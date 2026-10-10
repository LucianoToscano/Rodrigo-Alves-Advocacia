# Relatório de correção V3.2 — Rodrigo Alves | Advocacia

**Data:** 10 de outubro de 2026. **Base:** pacote local consolidado V3.1, que por sua vez preserva a V6.4 do site. **Status:** edição local para revisão, não implantada no GitHub/Netlify.

## Correção principal
- Antiga Seção 34 do Prompt Mestre eliminada; antiga 35 renumerada 34, passo 14 excluído e seguintes renumerados.
- V3.1 havia interpretado uma solicitação para a interface do ChatGPT como melhoria do site. Correção registrada sob DOC-006. UX-001 a UX-004 e TASK-003 não constam mais no backlog/checklist ativos; os IDs históricos não serão reutilizados.
- Controles adicionados anteriormente a três páginas removidos com preservação do conteúdo informativo, sem criar nova arquitetura.

## Avançados, sem backend
- SEC-003 (denúncias privadas), SEC-004+005 (cobranças e documentos), SEC-006 (Área do Cliente), SEC-007 (painel admin) permanecem para estudo. Só após avaliação de segurança, LGPD e aprovação específica.
- Projeto de selos em `institucional-selos/` com backlog próprio, sem execução como certificação.

## GitHub / Netlify
- GitHub oficial e Netlify preservados; nenhuma publicação ou merge executado por este pacote.
- A branch remota de revisão criada anteriormente contém somente parte da documentação V3.1. Enviar pacote V3.2 completo a branch de revisão e comparar antes de merge.
- Netlify: restringir acesso no ambiente de homologação e testar site, formulário, SEO e segurança antes de publicar.

## Testes e pendências
- Verificação automática de retirada dos seletores/JS antigos, integridade das 37 páginas e consistência dos IDs (ver resultado abaixo).
- Testes de navegador completo, Netlify Forms e verificação visual em produção dependem de homologação.

**Nota complementar:** `TASK-003` era uma demanda derivada do equívoco sobre controles de prompts; retirada do backlog ativo e ID reservado no histórico. A acessibilidade geral do website permanece coberta por auditorias de UX/QA, independente dessa interface.

## Testes locais executados nesta correção
- 37 arquivos HTML verificados por parser; referências locais de `href` e `src`: **0 caminhos ausentes**.
- Quatro blocos informativos retirados da UI de prompts e preservados como HTML simples, conferidos por títulos e textos.
- `longtext.js`, `longtext.css` e seletores `.ra-longtext`: **não presentes na V3.2**.
- 34 seções do Prompt Mestre com numeração contínua; execução renumerada em 14 passos.
- Backlog e checklist: **43 IDs únicos coincidentes**, cinco IDs antigos anulados e reservados (`UX-001..UX-004`, `TASK-003`).
- Nenhum teste de backend ou implantação pública foi executado; teste visual interativo da V3.2 em hospedagem ainda pendente.

## Registro de sincronização parcial remota
- Arquivo `docs/RODRIGO_ALVES_ADVOCACIA_MASTER.md` atualizado na branch de revisão `chore/consolidacao-v31-revisao` (commit `ff5d21054a6927b36dd2670535cd4c4e30109018`).
- PR #1 permanece **draft**, agora rotulado para a correção V3.2: https://github.com/LucianoToscano/rodrigo-alves-advocacia/pull/1
- O pacote integral **ainda não foi sincronizado**. `main` e Netlify não foram alterados; não se deve fazer merge sem enviar os demais arquivos e homologar.
