# Rodrigo Alves | Advocacia — Portal privado institucional (V3.4 — implementação sob revisão)

**Base preservada:** V3.3 integral, 37 HTML, 72 arquivos de origem, fotos e identidade RA inalteradas.  
**Destino futuro:** único projeto oficial Netlify `rodrigo-alves-advocacia` (`8771458f-6330-4e91-b891-2d25b0e32982`).  
**Ambiente anterior:** `rodrigo-alves-demo-testes-20261010` somente como referência para auditoria, sem novos deploys e sem exclusão.  
**Status:** implementado em branch para revisão, **não** publicado/homologado no domínio oficial.

## Arquitetura

- Edge Function `portal-guard.ts`: intercepta **todos** os caminhos com `path: "/*"`. Sem sessão válida, devolve a tela de acesso para HTML ou `401` para arquivos protegidos; caminhos internos, scripts, JSON e fotos não são acessíveis sem autenticação. É permitido sem login apenas o **logo original** e o script de mostrar/ocultar senha, ambos indispensáveis à tela de acesso.
- Edge Function `portal-login.ts`: processa somente POST `application/x-www-form-urlencoded` na rota `/__acesso/entrar`. Compara a senha no servidor com valor da variável protegida. Restringe a origem, a dimensão da requisição, e redirecionamentos. A limitação de tentativas é feita pela plataforma Netlify: **5 requisições por 60 segundos por IP e domínio**, definida no `config.rateLimit` da função (sujeita a verificação no deploy real).
- `portal-shared.ts`: utilitários do servidor. Assina HMAC-SHA256 um token de sessão contendo expiração e nonce, com chave mantida apenas na Netlify. Token não inclui a senha. Cookie `__Host-ra_private` possui `HttpOnly`, `Secure`, `SameSite=Lax`, `Path=/` e validade de **12 horas** por padrão.
- `site/assets/js/portal-entry.js`: ação **somente visual** de revelar/ocultar texto da senha; não lê nem armazena segredos.
- `site/assets/js/site.js` e `site/assets/css/site.css`: pequeno botão fixo "Encerrar acesso", que faz POST `/__acesso/sair` para apagar cookie e voltar à entrada. Ausência de backend de contas pessoais; senha é compartilhada apenas por equipe autorizada.
- `netlify.toml`: `publish = "site"`, edge functions no nível raiz do repositório. **Nunca publicar `docs/`, `source/`, testes ou `institucional-selos/`.**

## Variáveis de ambiente obrigatórias — SOMENTE no projeto oficial Netlify

Em **Project configuration → Environment variables** crie:

- `RA_PRIVATE_ACCESS_PASSWORD`: senha privada compartilhada forte, **pelo menos 20 caracteres**. Marcar como segredo, escopo **Functions** (incluindo Edge Functions), no contexto de preview para testar e depois production. Nunca gravar em HTML, JavaScript, repositório, documentação, chat ou logs.
- `RA_PRIVATE_SESSION_KEY`: chave aleatória forte independente, de **pelo menos 43 caracteres** (recomendado 32 ou mais bytes gerados criptograficamente e codificados em Base64URL/hex). Marcar como segredo, escopo **Functions**. Sua rotação invalida sessões existentes.
- `RA_PRIVATE_SESSION_HOURS`: opcional, inteiro entre 1 e 24, padrão `12`.

**Sem as duas variáveis obrigatórias, a proteção bloqueia o site com HTTP `503` (fail closed).** Alterações em variáveis das Edge Functions exigem novo build/deploy na Netlify; nunca supor que mudar uma variável reconfigura um deploy existente.

## Substituição segura do SSO existente — não executar antes da revisão

1. Conservar o SSO nos dois sites enquanto prepara os arquivos.
2. Confirmar o ZIP V3.3 preservado no GitHub privado, o commit e hashes das três imagens originais.
3. Revisar o PR do portal e aprovar o build **somente** para o projeto oficial. Validar que as duas Edge Functions existem no manifesto do deploy; sem elas, não alterar o acesso.
4. Configurar os segredos em **Netlify UI oficial** (não no projeto de demonstração), escopo **Functions** e contexto de preview/production. Disparar um novo build/deploy.
5. Testar sob SSO, em URL de deploy do projeto oficial: senha correta/incorreta, limite de tentativas, acesso direto a HTML/CSS/JS/JSON/fotos, vencimento e saída. Testar desktop e dispositivos móveis. Verificar que CSS/imagens do site permanecem funcionais após autenticação.
6. Executar uma verificação externa de segurança da URL do deploy. Confirmar comportamento esperado de cabeçalhos de cache, segurança e `X-Robots-Tag`. Verificar que erros internos não liberam conteúdo.
7. **Só após teste satisfatório**, no painel Netlify do mesmo projeto oficial, alterar a visibilidade do SSO para permitir o formulário personalizado. A alteração deve ser acompanhada de teste imediato em janela anônima e de um procedimento operacional de reversão. Caso qualquer requisição anônima receba página interna ou ativo protegido, **restabelecer o SSO imediatamente**.
8. Não ativar Netlify Forms, área de clientes, anexos nem compartilhamento público de dados pessoais. Publicação com senha não corresponde a lançamento oficial aberto ao público.

Observação: conforme plano/configuração da Netlify, a configuração de visibilidade pode exigir alterações pelo painel e privilégios de administrador. **Não existe operação segura automatizada nesta implementação para substituir o SSO ou configurar segredos.** Nunca remover a proteção atual antes dos testes comprovados.

## Operação e revogação

- **Trocar a senha:** substituir apenas `RA_PRIVATE_ACCESS_PASSWORD` por outra forte no painel privado, com novo deploy. Para invalidar também sessões já abertas, **rotacionar `RA_PRIVATE_SESSION_KEY` conjuntamente** e redeploy; trocar só a senha **não** invalida cookies existentes imediatamente.
- **Encerrar sessão no dispositivo:** botão "Encerrar acesso" apaga o cookie. Isso não invalida um token que já tenha sido copiado: nesse caso rotacionar a chave de sessão.
- **Revogar todos os acessos:** rotacionar a chave de sessão e definir nova senha, redeploy, testar bloqueio e registrar o incidente sem divulgar segredos.
- **Perda de acesso administrativo:** recuperar acesso à conta Netlify pelo procedimento oficial do provedor, não criar página pública de recuperação de senha.
- **Lançamento oficial futuro:** revisar informações jurídicas/OAB, LGPD e consentimentos, armazenar backup do deploy; preparar PR específico que remova as Edge Functions e o logout, remover configurações privadas e só então abrir visibilidade no Netlify. Desativar `noindex` após aprovação e com domínio/canonical corretos. Fazer rollback ao primeiro defeito.

## Testes de segurança locais

Executar `node --experimental-strip-types --test tests/test-portal.mjs` (Node.js 22+). Testes com segredos **fictícios**, sem dados de clientes. Cobrem 20 casos: caminhos protegidos, credenciais ausentes, assinatura HMAC, expiração, adulteração, logout, tentativa de redirecionamento externo, cookies e políticas de bloqueio. Validar novamente no Edge Runtime real e mobile.

## Evidências ainda faltantes

- Confirmação da integração de builds GitHub→Netlify no projeto oficial.
- Configuração das variáveis secretas apenas na conta Netlify.
- Deploy criado a partir da branch aprovada no projeto oficial, com identificação e contagem de Edge Functions.
- Teste real de navegador com SSO e, mais tarde, verificação de visitantes sem SSO.
- Aprovação explícita da liberação da tela personalizada e eventual mudança no SSO.

**Nenhum dado de cliente, credencial, token ou segredo integra esta documentação.**
