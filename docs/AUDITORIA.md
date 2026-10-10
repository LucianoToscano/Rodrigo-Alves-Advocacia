# Auditoria técnica e retrospectiva — 2026-10-10

## Fontes examinadas
- Pacote local `/mnt/data/RA_SITE_V64_PUBLICAR` e ZIP da V6.4, scripts CSS/JS e arquivos HTML.
- Histórico acessível do projeto nesta conversa; relatório V6.4 e plano anexo de Atendimento Seguro.
- GitHub privado (metadados e README inicial via conector); não localizados `index.html` nem `docs/` na branch principal.
- Netlify projeto `rodrigo-alves-advocacia` consultado via conector: SSO requerido, deploy ready, Forms desabilitado.

## Inventário real da base local
37 arquivos HTML, CSS, JavaScript próprio; sem package.json, sem banco, sem login autenticado, sem funções servidor no pacote. `robots.txt` bloqueia indexação; sitemap está vazio até domínio final. A política de conteúdo e o formulário exigem testes/validação em hospedagem.

## Contra esquecimentos — demandas registradas/recuperadas
1. **Registradas:** antifraude, contato oficial, checklists BPC, integração Instagram, fontes públicas, responsividade, correção de contraste.
2. **Recuperadas:** correção do escopo indevido de comandos da interface do ChatGPT; garantia de documentação permanente; status real do GitHub/Netlify; separação das credenciais/documentos.
3. **Relacionadas/duplicadas:** portal do cliente, denúncias e cobrança pertencem ao mesmo programa de backend seguro; não criar três simuladores independentes.
4. **A confirmar:** data oficial de revisão jurídica, domínio principal, autoria/autorização das imagens, responsáveis LGPD, política real de retenção.

## Achados críticos
- **GitHub ainda não é a fonte oficial do código**, embora a conta e README existam.
- **Netlify deploy ready não comprova publicação deste site**; restrição SSO permanece.
- **Formulário desabilitado por segurança:** Netlify Forms não está habilitado, `useNetlifyForms:false`.
- SEO de produção incompleto: URL do site vazia; robots disallow; sitemap sem URLs.
- Arquitetura estática impede armazenar anexos, autorizar transações ou proteger arquivos de clientes com segurança de servidor.
- OBRIGAÇÃO de auditar no domínio: cabeçalhos CSP, TLS, performance, acessibilidade, vazamento de dados.

## Testes desta etapa
Registrar separadamente no arquivo `RELATORIO_DE_PENDENCIAS.md` com comandos de evidência. Não declarar Lighthouse, leitores de tela nem teste de envio sem execução real.

## Retificação retrospectiva V3.2 — DOC-006
O pedido de copiar, expandir/recolher e voltar ao início de textos extensos referia-se à **interface do ChatGPT**, e foi equivocadamente integrado ao escopo do website na V3.1. A Seção 34 e os antigos IDs UX-001 a UX-004 e TASK-003 estão excluídos do backlog ativo do site. Os números ficam reservados para rastreabilidade e não serão reutilizados. O código correspondente foi retirado da cópia local V3.2, preservando o texto educativo. Não atribuir ao site qualquer capacidade de modificar a interface do ChatGPT.

**Nota complementar:** `TASK-003` era uma demanda derivada do equívoco sobre controles de prompts; retirada do backlog ativo e ID reservado no histórico. A acessibilidade geral do website permanece coberta por auditorias de UX/QA, independente dessa interface.


### Prova de integridade da branch de recuperação V3.3
- Diretório `site/` criado com os 72 arquivos extraídos, sem renomeações.
- Árvore remota GitHub: `9a26ef73caa5ae0ab2e99cea411fb47ba4a2c9e2`; árvore local com `git add -A && git write-tree` retornou o mesmo SHA, evidenciando equivalência exata do conjunto de arquivos (incluindo binários).
- Branch exclusiva `chore/recuperacao-v33-20261010`; `main` preservada. Testes visuais e deploy não são abrangidos por essa equivalência.


## Verificação Portal Privado V3.4
GitHub PR #3 em rascunho; commit 385350c0ea10cb703e454551894442c9abdb4bd3 contém código e 20 testes. 37 páginas existentes intactas. Segredos inexistentes no GitHub e não transmitidos no chat. Rate limit declarado via config de Edge Function, ainda sem teste de HTTP 429 na hospedagem. Deploy oficial 6aca07e0e41b1e712c726fc0 tem 1 arquivo, nenhuma Edge Function e SSO ligado. Sem homologação real. Não alterar visibilidade sem preflight com segredos e navegador.
