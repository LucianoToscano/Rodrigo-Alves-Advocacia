# Correção de compatibilidade do portal com navegadores móveis — 10/10/2026

## Evidência relatada
Ao enviar a senha no navegador incorporado do celular, a tela exibiu apenas **"Origem não autorizada."**. A requisição foi bloqueada pelo controle anti-CSRF antes da validação efetiva do login. A captura comprova o sintoma HTTP de origem, mas não revela os cabeçalhos que chegaram ao Netlify nem garante uma única causa.

## Correção de login
Preservado o primeiro critério: um POST com evidências coerentes de mesma origem pode ser aceito. Para clientes que omitem ou modificam cabeçalhos `Origin`, `Referer` ou `Sec-Fetch-Site`, há agora uma segunda validação independente:
- O HTML servido pelo próprio Edge gera um **token aleatório HMAC-SHA256 de finalidade exclusiva "login-csrf"**, assinado com segredo armazenado apenas na Netlify.
- O mesmo token é enviado em cookie `__Host-ra_login_csrf` com `Secure; HttpOnly; SameSite=Strict; Path=/` e validade máxima de 15 minutos; o token também segue em campo oculto do formulário.
- Quando a prova por cabeçalhos não é suficiente, **cookie e formulário devem apresentar o mesmo token válido**, vinculado ao host da requisição, dentro da janela de tempo; o servidor verifica sua assinatura.
- Tokens copiados de outra sessão, alterados, expirados ou de outro host são rejeitados. Pedidos de outro site normalmente não enviam o cookie SameSite=Strict, mesmo se o adversário obtiver seu próprio token.
- Um bloqueio HTTP 403 agora exibe a tela de senha com orientação, nunca uma página preta contendo só a frase do erro. Senha incorreta continua HTTP 401. Tokens de autenticação e senhas não são colocados no HTML ou JavaScript.

## Correção de logout
- GET `/__acesso/saida-token` só responde a uma **sessão autenticada válida** e retorna JSON sem cache contendo token HMAC específico para logout, derivado no servidor da sessão e do host (não é senha nem cookie de sessão).
- O botão de sair busca esse token via `fetch` same-origin e inclui `csrf` em POST `/__acesso/sair`. Se o navegador não oferecer prova de origem confiável, o servidor valida o token vinculado à sessão.
- Token ausente, falso ou referente a outra sessão não libera logout sem prova de mesma origem. Não há endpoint público para obter tokens de saída.

## Escopo e integridade
Branch `fix/portal-origin-preview-20261010`, PR #8, baseada na V3.7. `main` e produção preservadas, acesso SSO mantido. Nenhuma alteração de senha, segredos, identidade visual, imagens institucionais ou conteúdos jurídicos. Sem novas páginas e sem cadastro de clientes.

Os testes automatizados cobrem fluxos em navegador comum e WebView, senha errada, cookie seguro, token expirado/adulterado, host divergente, cookie trocado, logout vinculado à sessão, acessos sem autenticação, origem externa, rota de sessão e restauração em caso de falha.

O comando de testes em `netlify.toml` executa `node --experimental-strip-types --test tests/*.mjs` no **contexto deploy-preview** com Node 22. O estado `ready` comprova build com sucesso, mas os logs de execução ainda devem ser auditados para informar quantidade exata de testes.

## Gate de validação real — sem retirar SSO
1. Confirmar build da última revisão do PR #8 como `ready` e presença das **2 Edge Functions**.
2. Acessar a URL da prévia pelo celular, autenticar SSO quando necessário e usar a tela de senha com o formulário recém-carregado (não reutilizar uma aba antiga).
3. Verificar senha correta, senha errada, navegação interna, imagens, links, **Encerrar acesso**, retorno à tela inicial e sessão expirando.
4. Se ocorrer 403 mesmo com token, verificar primeiro compatibilidade dos cookies first-party e host efetivo de prévia; nunca remover o controle anti-CSRF como solução rápida.
5. Verificar rate limiting real, URL antiga de deploy, rotas estáticas e segurança de acesso não autenticado.
6. Revisão final e aprovação explícita antes de mesclar ou substituir SSO.

**Ainda não homologado no navegador real do usuário.** Não registrar êxito de login até o teste manual confirmado.
