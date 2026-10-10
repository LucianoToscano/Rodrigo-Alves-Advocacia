# Bugs e correções

| ID | Página/componente | Gravidade | Reprodução / causa | Ação / evidência | Status |
|---|---|---|---|---|---|
| BUG-001 | `index.html` Como funciona, seções claras | P0 | branco sobre fundo marfim, regra herdada de CSS escuro | `qa-v62.css`; relatório V6.2 | Corrigido em testes locais anteriores; revalidar produção |
| BUG-002 | formulário de contato | P0 | confirmação HTTP não significava registro no Forms | formulário bloqueado `useNetlifyForms:false` | Bloqueado até teste real |
| BUG-003 | mobile 320px | P1 | largura de componentes excedia viewport | `qa-v61.css`; teste V6.1 | Corrigido localmente, revalidar |
| BUG-004 | SEO canonical | P1 | JS podia duplicar link | guarda no `site.js` | Corrigido localmente, testar domínio |
| BUG-005 | metadados site/robots/sitemap | P0 | domínio não configurado | `robots.txt` bloqueio, sitemap vazio | Aberto / dependência domínio |

Para reabrir: registrar evidência/captura, navegador, resolução e URL; reproduzir → corrigir → testar regressão → vincular mudança/commit.

## DOC-006 — Erro de escopo V3.1 (correção documental)
- **Data:** 2026-10-10.
- **Sintoma:** funcionalidades solicitadas para a interface do ChatGPT registradas como UX do site e aplicadas em três HTML.
- **Correção:** removidos quatro blocos expansíveis e JS/CSS específicos; os textos de orientação continuam legíveis em HTML. Excluídos UX-001 a UX-004 e TASK-003 do backlog ativo; IDs anulados sem reutilização.
- **Teste:** ausência de arquivos e seletores indevidos, preservação de textos por contagem e verificação estrutural; validação de regressão em hospedagem pendente.
- **Evidência:** docs/RELATORIO_CORRECAO_V32.md.

**Nota complementar:** `TASK-003` era uma demanda derivada do equívoco sobre controles de prompts; retirada do backlog ativo e ID reservado no histórico. A acessibilidade geral do website permanece coberta por auditorias de UX/QA, independente dessa interface.


## Pendência de homologação V3.3 — 10/10/2026
- QA-001 (bloqueio de ambiente, não bug confirmado): Chromium retorna net::ERR_BLOCKED_BY_ADMINISTRATOR inclusive em data:/file:/localhost; teste mobile, fluxo WhatsApp e menu no navegador não realizados.
- DEP-003 (divergência de evidências, não bug confirmado): Netlify demo ready com 37 páginas, mas equivalência com ZIP V3.3 não foi demonstrada. Conferir no Work antes de alterar.
