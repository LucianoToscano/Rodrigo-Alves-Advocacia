# Plano de liberação controlada — somente senha institucional
Data: 10/10/2026
Projeto: Rodrigo Alves | Advocacia
Status: **PREPARADO — NÃO EXECUTADO**. Publicação e mudança de acesso dependem da validação dos gates. NÃO mudar SSO enquanto houver deploy público sem guard.

## Resultado desejado
O visitante de `https://rodrigo-alves-advocacia.netlify.app` encontra **apenas** a página privada com a identidade visual do escritório, digita a senha institucional e navega no site; não precisa ter conta Netlify, nem passar por segundo login. A senha é verificada exclusivamente pelo servidor. Não é o lançamento aberto e indexável do website.

Não criar projeto Netlify novo; não alterar domínio, identidade visual, fotografias, conteúdo jurídico ou diretórios existentes. Não publicar segredos em GitHub, logs, documentação ou conversa. Manter `noindex` nesta fase.

## Recursos verificados
- Site oficial no Netlify: `rodrigo-alves-advocacia`, ID `8771458f-6330-4e91-b891-2d25b0e32982`.
- Produção publicada ao preparar o plano: deploy `6aca07e0e41b1e712c726fc0`, commit `27c70c685ff482ca996edd3445ab159962c0e2fe`: **não contém Edge Functions**. Proteção de login da equipe Netlify (SSO) em todos os deploys.
- Homologação: PR #8, branch `fix/portal-origin-preview-20261010`, sobre V3.7. Prévia `https://deploy-preview-8--rodrigo-alves-advocacia.netlify.app`. Deploy `6acaa6e356e40b0008dfc706` registrou 2 Edge Functions; commits posteriores corrigiram o login móvel, com build de prévia concluído.
- Dependências GitHub ainda não mescladas: PR #2 (base V3.3), #3 (portal V3.5), #6 (conteúdo V3.6), #7 (V3.7), #8 (correção da origem móvel). Ramo `main` não é a fonte atual das páginas completas.
- Site de demonstração anterior `rodrigo-alves-demo-testes-20261010` é distinto: não confundir, renomear, excluir ou abrir durante este processo.

## BLOQUEADOR: versões históricas
O Netlify cria **permalinks imutáveis** para deploys bem-sucedidos. Mudar a branch `main` ou adicionar o guard a um novo deploy NÃO insere o guard em permalinks antigos. Ao liberar a visibilidade do projeto, permalinks históricos sem proteção também podem ficar visíveis.

A lista completa de deploys antigos **não foi obtida** por esta integração; há apenas alguns IDs conhecidos. Sem inventário exaustivo no painel e resolução dos casos sem guard, a transição é **NO-GO**.

Antes de remover SSO, avaliar duas opções:
1. **Preferencial, se suportada pela configuração efetiva da conta:** manter o SSO da equipe somente em deploys **não produtivos** (prévias e branches), após proteger a produção com o guard. Para os deploys de produção anteriores, verificar e remover no painel os que não têm guard, após backup e auditoria, **antes** de abrir produção. Com isso, o endereço principal usa só senha institucional e as prévias permanecem restritas à equipe.
2. **Sem SSO em nenhum contexto:** somente após inventariar e tratar TODOS os deploys legados, inclusive prévias e permalinks históricos, confirmar que não há versão insegura acessível. Se não for viável garantir isso no plano/conta, NÃO desproteger todos os deploys. Alternativa provisória: SSO existente ou proteção nativa de senha para todos os deploys (nesta última, a tela visual e a experiência de senha única precisarão ser reconsideradas).

A ferramenta de acesso de visitantes substitui a política do site inteiro. Ela não permite excluir permalinks individuais e não deve ser usada para tornar o projeto público sem o inventário.

## Etapa 1 — preservar e homologar sem retirar SSO
- [ ] Salvar backup verificável do repositório e do deploy anterior em armazenamento privado, mais exportação das configurações não secretas do Netlify. Não copiar valores de senha/chaves.
- [ ] Revisar e aprovar cada PR dependente; mesclar a cadeia **#2 → #3 → #6 → #7 → #8** somente após aprovação explícita. Verificar se as bases permanecem compatíveis. O SSO continua em todos os deploys durante esse processo, mesmo se a produção se atualizar automaticamente.
- [ ] Confirmar que a versão COMPLETA institucional, não só uma página de placeholder, foi publicada em `main` no **mesmo** site Netlify.
- [ ] Conferir manifesto de produção do Netlify: devem existir **duas Edge Functions**, `portal-guard` em `/*` e `portal-login` em POST `/__acesso/entrar`. Não basta checar que o deploy ficou `ready`.
- [ ] No painel oficial, conferir secret env vars em **production** e **deploy previews**, com escopo Functions/Edge: `RA_PRIVATE_ACCESS_PASSWORD` (mínimo 20 caracteres), `RA_PRIVATE_SESSION_KEY` (mínimo 43 caracteres, gerada aleatoriamente) e `RA_PRIVATE_SESSION_HOURS` (1–24, padrão 12). Usar segredos diferentes por finalidade. Alterações exigem novo deploy.
- [ ] Confirmar, no ambiente real, execução da suíte `node --experimental-strip-types --test tests/*.mjs`, log detalhado, rate limit da plataforma (5 tentativas/60 s por IP e domínio) e funcionamento do guard.
- [ ] Validar via navegador sob SSO: Chrome Android, Chrome desktop, Safari iPhone e navegador incorporado; login correto, senha incorreta, cookie HttpOnly/Secure, expiração, troca de senha, retorno à rota original, saída e entrada novamente.
- [ ] **Logout mobile ainda pode falhar com "Origem não autorizada."**: a extensão experimental para WebView foi revertida. Corrigir e homologar essa etapa antes da desproteção.
- [ ] Checar que um erro interno ou uma configuração incompleta resulta em negação/503, nunca entrega páginas ou arquivos protegidos.
- [ ] Revisar OAB/LGPD, conteúdo informativo, materiais de acesso restrito, links, serviços externos e manutenção de `noindex`.

## Etapa 2 — inventário obrigatório antes de abrir
- [ ] Em Netlify → projeto oficial → Deploys, filtrar **produção, previews, branches e deploys atômicos**. Enumerar cada permalink que ainda responde.
- [ ] Identificar deploys de produção anteriores ao guard, inclusive `6aca07e0e41b1e712c726fc0`, e todas as outras versões sem guard. Preservar evidências/backups privados antes de excluir.
- [ ] Após a **nova produção protegida** estar ativa, remover manualmente pelo painel os deploys históricos **que possam ficar acessíveis sem senha**, seguindo as regras de retenção e exclusão do Netlify; não apagar o deploy publicado atual. Excluir deploy remove logs/permalink irreversivelmente.
- [ ] Para qualquer permalink legado que não possa ser removido ou protegido, **não liberar SSO**. A mera ausência de indexação ou desconhecimento da URL não é proteção.
- [ ] Validar, ainda sob SSO, a compatibilidade do fluxo de autenticação com cookies `__Host-`, `SameSite` e HTML do portal. Não desativar proteção anti-CSRF para contornar erro móvel.
- [ ] Conferir se o plano e as permissões permitem SSO restrito a **não produção**; se não, manter SSO integral até alternativa efetiva.

## Etapa 3 — janela assistida de abertura
Executar SOMENTE após todas as etapas anteriores, aprovação humana final e acesso de administrador disponível:
1. Definir janela de manutenção e pessoa responsável pelo rollback. Ter o painel Netlify já aberto, sem publicar senha em mensagens.
2. Aplicar a visibilidade adequada de forma atômica: preferencialmente **exigir login Netlify apenas em não-produção**, liberando a produção para ser protegida SOMENTE pelo guard Edge. Não utilizar a opção "sem nenhuma proteção" se há deploy antigo inseguro.
3. Em janela anônima, sem sessão Netlify, testar imediatamente `/`, `/index.html`, uma página interna e acessos diretos a `/assets/css/`, `/assets/js/`, `/data/`, imagens e arquivos; o conteúdo protegido deve exigir sessão institucional.
4. Login correto → website completo; senha errada → negado; logout → sessão encerrada; cookie vencido → tela de senha. Validar em celular e desktop.
5. Testar permalinks antigos de produção e previews, URLs de branch, destinos de redirecionamento e respostas com cabeçalhos `no-store` e `noindex`.
6. Se qualquer recurso privado aparecer sem senha, ou se login/logout quebrar: **restaurar imediatamente SSO para TODOS os deploys** no painel e confirmar bloqueio anônimo. Não tentar consertar com site aberto.
7. Registrar: commit `main`, ID do deploy, URLs verificadas, data/hora, testes aprovados, política final de acesso e administrador que aprovou.

## Operação após liberação
- Manter URL do site publicada mas NÃO anunciar como lançamento jurídico oficial até revisão editorial/OAB.
- Revisar métricas de Edge, falhas de login, limite de tentativas e alertas sem armazenar segredos.
- Ao trocar a senha, atualizar `RA_PRIVATE_ACCESS_PASSWORD` na Netlify e disparar deploy; para revogar sessões abertas também rotacionar `RA_PRIVATE_SESSION_KEY`.
- Manter cópia privada de backup de aplicação, checklist de incidentes e política para futuras prévias sem guard.
- **Não retornar à publicação de um deploy legado sem Edge guard** enquanto a produção estiver sem SSO.

## Autorizações e estado
O usuário pediu **preparação** da transição para somente senha institucional. Não foi autorizada, por este plano, a exposição pública de conteúdo sem senha, a exclusão irreversível de deploys antigos ou a quebra dos PRs de revisão. A liberação concreta exige gates documentados e aprovação para o momento de corte.

### Referências técnicas
- https://docs.netlify.com/deploy/deploy-overview/
- https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/
- https://docs.netlify.com/manage/security/secure-access-to-sites/password-protection/
- https://docs.netlify.com/deploy/protect-deploys/
