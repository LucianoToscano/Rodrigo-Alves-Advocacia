# Netlify — pré-homologação V3.7 — 2026-10-10

**Situação:** código verificado localmente, **nenhum deploy de branch executado** e **nenhuma alteração SSO**. O projeto Netlify oficial permanece em estado anterior à versão V3.7.

## Fontes de verdade
- Site oficial existente `rodrigo-alves-advocacia`, id `8771458f-6330-4e91-b891-2d25b0e32982`.
- URL institucional: https://rodrigo-alves-advocacia.netlify.app
- Deploy oficial `6aca07e0e41b1e712c726fc0`: ready, 1 asset informado, 0 Edge Functions, SSO de equipe ativado (todos os deploys), Forms desativados.
- V3.7 da branch `feat/v37-checklists-acessibilidade`, commit `ac5514edd6e5e601e6e617757a3be52ab1321b87`. PRs dependentes #2, #3, #6, #7 ainda draft e não mesclados.

## Verificações concluídas
- Pacote V3.7 local tem **árvores Git idênticas** às do repositório remoto: `site` = `6da6608fff2584846d0ed4d354202fbc9ca70531`; `netlify` = `71a6d6c44895b9777241a1c93e6f08d5dde048d1`; `netlify.toml` = `11204572c91ae56004bfde19bea0f293cbf676e6`.
- 39 HTML, 9 WebP e 13 JS; retratos hero, mobile, perfil byte a byte idênticos aos originais aprovados.
- `node --experimental-strip-types --test tests/*.mjs`: **42/42** aprovados (inclui 20 testes de autenticação).
- O portal possui guard `/*` em `netlify.toml`, login POST `/__acesso/entrar` configurado inline com limitador 5/60s IP/domínio, sessão HMAC 12h, cookie seguro e logout. Não há segredo inserido no GitHub.
- Backup com manifesto de 94 arquivos gerado e verificado localmente: `RODRIGO_ALVES_BACKUP_VERIFICAVEL_V37_PRE_DEPLOY_20261010.zip`, SHA256 `41b9ad8de3aed062f8ee2859e1c669413f9dab5f46af87830ebc05fe1b16880c`. O backup preserva fonte, **não** configuração/segredos da conta Netlify; guardá-lo em local privado.

## Bloqueadores antes do deploy e da troca de SSO
1. Conferir conexão GitHub/Netlify e habilitar deploy da **branch de revisão no mesmo projeto**.
2. Configurar no painel Netlify variáveis secretas `RA_PRIVATE_ACCESS_PASSWORD` (20+ caracteres), `RA_PRIVATE_SESSION_KEY` (chave aleatória 43+ caracteres), escopo Functions e contexto correto. Sem enviar credenciais em chats, código ou documentação. `RA_PRIVATE_SESSION_HOURS=12` é opcional.
3. Verificar compilação das duas Edge Functions e o rate limiting **real no log de deploy e HTTP 429**. A Netlify pode aceitar deploy com regra de limitação ignorada.
4. Testar página, CSS, JS, JSON, imagens, rotas internas, senha correta/errada, cookie, tempo de sessão, logout e segurança cross-origin em desktop/mobile com acesso SSO vigente.
5. Inventariar **todos os permalinks e deploys antigos**: retirar SSO do projeto pode expor versões antigas que não possuem Edge guard. É condição bloqueadora de publicação, não apenas um teste cosmético.
6. Confirmar rollback das proteções, QA jurídico/OAB/LGPD, VLibras e revisão de fotografias aprovadas.
7. Somente depois solicitar aprovação explícita para qualquer merge, deploy em produção ou mudança de SSO.

**Limitação de ferramentas nesta etapa:** os conectores desta conversa inspecionam o projeto e o deploy, mas não expõem criação de branch deploy, variáveis secretas, logs de build ou navegação autenticada no Netlify. Nenhuma ação de produção foi executada. **NO-GO até homologação real.**

Relatório detalhado registrado no Drive LucianoToscano: https://docs.google.com/document/d/1iphdJoneBEVqfjwJQk7ewfF-pC357-4jCAW9FXdTbec/edit
