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


## Roadmap V3.4
P0 concluído em código: portal privado autenticação Edge e documentação em PR #3 sobre PR #2, 20/20 testes locais. P0 pendente: variáveis secretas configuradas no Netlify oficial; preview autenticada; teste de rate limit do provedor; QA mobile e rotas. Mudança SSO apenas após comprovação, com rollback imediato. Site demo antigo somente fonte histórica, sem novos deploys ou exclusão.


## V3.6 — ciclo de melhoria sem alterar produção
Concluído em branch **feat/v36-orientacao-conteudo-seguranca** e PR #6 draft, com base na V3.5 (PR #3; dependência anterior PR #2): orientação por sete situações, FAQs pesquisáveis, filtros adicionais da biblioteca, quatro roteiros antifraude e CSS acessível para os novos componentes. Nenhum segredo/Edge alterado. 33/33 testes locais aprovados, 38 páginas, 1.829 refs válidas, zero âncoras internas quebradas. Fotos/identidade preservadas.
**Próximo P0:** QA no navegador de Edge/SSO, links, móvel, leitura assistiva e permalinks; autenticação V3.5 real; inspeção de todas as páginas. Sem retirar SSO ou publicar branch V3.6 antes disso.
**Próximo P1:** revisão editorial e jurídica dos links, artigos e 12 publicações do Instagram; atualização dos canais oficiais; testes de acessibilidade e desempenho, revisão gradual CSS baseada em snapshots visuais reais.
**Futuro condicionado:** SEO/canonical/sitemap somente após autorização pública; calculadoras previdenciárias normativas versionadas somente com validação; área de clientes e confirmações de cobrança/documentos somente com backend/MFA e LGPD; selos institucionais continuam projeto separado.
**Registro Drive:** https://docs.google.com/document/d/1g4olJ2bV2j0Rj0jkmNdf22AHDoZy6YYlIvaAon8wxLE/edit


## Atualização V3.7 — acessibilidade e checklists
Concluído em código (PR #7 draft): sete checklists de organização por situação com impressão/PDF local; atalhos nos sete cartões de orientação; página de acessibilidade para pessoas cegas/baixa visão/surdas/dificuldade motora; alto contraste e ampliação; voz opcional do navegador e VLibras externo apenas após clique. Testes Node 42/42, 39 HTML, 2066 refs válidas, fotos originais intactas. Não publicado.
Próximo P0: validação Netlify Edge/SSO, todas URLs antigas, segurança de sessão, qualidade visual e teclado/leitor de tela; revisão jurídica das sete listas e processamento externo VLibras antes de efetivar qualquer integração em produção. Avaliar com usuários reais e intérprete humano quando apropriado.
