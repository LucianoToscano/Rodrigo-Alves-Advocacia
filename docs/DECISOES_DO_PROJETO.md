# Decisões do projeto

| Data | Decisão | Razão | Efeito / demandas |
|---|---|---|---|
| 2026-10-10 | Não recomeçar do zero | Preservar 37 páginas e base V6.4 | DOC-001, DEP-001 |
| 2026-10-10 | Fonte de verdade no GitHub, após comparação | Rastreabilidade e chats futuros | DEP-001 |
| 2026-10-10 | `site/` separada de `docs/` | Evitar publicar documentação interna | SEC-009, DEP-001 |
| 2026-10-10 | Manter formulários inativos até recebimento real | Evitar falsas confirmações | BUG-002, DEP-004 |
| 2026-10-10 | Comparador de canais não autentica pessoa | Golpes por conta comprometida | SEC-002 |
| 2026-10-10 | Selos emitidos por conselhos são projeto INDEPENDENTE | Não inventar certificação | SEC-010 |
| 2026-10-10 | **V3.2 corrige erro de interpretação V3.1**: o pedido era para a interface do ChatGPT, não para o site | Retirada dos controles indevidos e anulação dos IDs UX-001 a UX-004, sem reutilização | DOC-006 |
| 2026-10-10 | Área do cliente/cobranças/arquivos restritos não habilitados sem backend | LGPD, sigilo, segurança | SEC-003/004/005/006/007 |

As aprovações institucionais foram relatadas pelo usuário; não são assinatura digital. Revisões podem ser propostas, mas devem ficar registradas.

| 2026-10-10 | SEC-003/004/005/006/007 aprovadas **para estudo**, não para implantação direta | Requer segurança, LGPD e decisão específica sobre backend e operações | SEC-003/004/005/006/007 |

**Nota complementar:** `TASK-003` era uma demanda derivada do equívoco sobre controles de prompts; retirada do backlog ativo e ID reservado no histórico. A acessibilidade geral do website permanece coberta por auditorias de UX/QA, independente dessa interface.


## Decisão adicional — 10/10/2026

**Rede de Apoio e Solidariedade como módulo público gratuito e autônomo (SOCIAL-001–009):** criar no site existente uma central para orientar cidadãos vulneráveis e divulgar links oficiais de instituições sociais; nunca condicionar ajuda à contratação, intermediar doações nem alegar vínculo institucional sem autorização. Quaisquer dados sensíveis, painel de administração, formulários, sistemas de doação e localização automática ficam fora do MVP; precisam de análise jurídica, técnica e LGPD própria. Preservar retratos, marca e segurança Netlify. Implementação em branch de revisão; nenhuma alteração em produção ou liberação de SSO. Ver manual V3.8.

