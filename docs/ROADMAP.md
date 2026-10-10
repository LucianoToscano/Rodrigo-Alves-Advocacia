# Roadmap por dependências

**P0 / imediato** — DOC-001/002/003 consolidar documentação; DEP-001 sincronizar em branch revisada; DEP-002 inspecionar Netlify; DEP-003 homologação SSO; DEP-004 ativar e testar Netlify Forms; SEC-008 política LGPD e LEG-002 revisão OAB. Critério: não liberar sem testes de envio/segurança.

**P1 / estabilidade e qualidade** — UX-006 imagens e logo; SOC-002 conteúdo antifraude; acessibilidade, performance, links e manutenção de contatos.

**P2 / recursos opcionais** — INT-004 CNES; TASK-001 calculadoras baseadas em normas versionadas; gestão editorial e UX de conteúdo.

**Bloqueado por backend** — SEC-003 denúncias seguras; SEC-004 cobranças; SEC-005 autenticação de documentos; SEC-006 Área do Cliente; SEC-007 painel admin. Esses itens só passam de planejado para implementação com autenticação, MFA, autorização por recurso, criptografia, revisão LGPD e plano de incidentes.

**Separado** — SEC-010 proposta de selos emitidos por conselhos. Não afeta o deploy do escritório.

## Complemento V3.2 — novas funcionalidades (somente após avaliação)

| Ordem sugerida | ID(s) | Funcionalidade | Situação / condição de avanço |
|---|---|---|---|
| 1 | SEC-003 | Formulário confidencial de denúncias com anexos | Avaliar base legal, minimização, antimalware, retenção, armazenamento privado e autenticação; autorização específica pendente |
| 2 | SEC-007 | Painel administrativo de canais oficiais | Exige autenticação, MFA, RBAC, logs imutáveis e fluxo de aprovação de alterações; autorização específica pendente |
| 3 | SEC-006 / TASK-002 | Área do Cliente / acompanhamento | Exige backend, autenticação forte, isolamento por cliente, armazenamento privado e testes IDOR; autorização específica pendente |
| 4 | SEC-004 / SEC-005 | Verificação de cobrança e documentos emitidos | Exige registros verificáveis, tokens sem informações sigilosas, expiração/revogação, antifraude e revisão jurídica; autorização específica pendente |

**Não implementar por aparência.** Não usar dados reais em testes. O projeto de selos profissionais permanece inteiramente separado em `institucional-selos/`, com documentação e backlog próprios.


## Prioridades atualizadas pós-recuperação V3.3 (10/10/2026)
**P0 concluído em GitHub, não em hospedagem:** importação de 72 arquivos na branch isolada e conferência exata da árvore `site/`; documentação e ZIP fonte preservados, sem merge.
**P0 pendente:** revisar PR, visualizar Netlify demo autenticado, verificar se contém V3.3, executar testes mobile/desktop, WhatsApp, menus, cookies e acessibilidade assistiva; corrigir somente defeitos comprovados.
**P1:** homologação institucional com Rodrigo, revisão jurídica/OAB/LGPD, SEO e domínio final, deploy oficial somente após liberação explícita.
**Dependência de arquitetura:** área de clientes, verificação de cobranças e documentos, denúncias sigilosas e painel administrativo permanecem restritos ao backlog de estudos.
