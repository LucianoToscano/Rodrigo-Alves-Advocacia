# Registro mestre de demandas — RA | Advocacia

Versão documental: 3.2 · Atualizado 2026-10-10. **Fonte de verdade pretendida:** GitHub, após sincronização revisada.

Regra: ID não é reutilizado; aprovação ≠ implementação ≠ validação. Datas anteriores provenientes de relatos e relatórios locais são identificadas como histórico, não como testes novos.

## Quadro de acompanhamento

| ID | Título | Prioridade | Status | Aprovação | Próxima ação |
|---|---|---|---|---|---|
| `DOC-001` | Criar fonte única da documentação /docs | P0 | Implementada, aguardando testes | Aprovada | Revisar sincronização GitHub |
| `DOC-002` | Arquivo mestre do projeto | P0 | Implementada, aguardando testes | Aprovada | Revisão final dos dados |
| `DOC-003` | Registro, checklist, roadmap e changelog cruzados | P0 | Implementada, aguardando testes | Aprovada | Conferir contagens e links |
| `DOC-004` | Auditoria retrospectiva de demandas esquecidas | P1 | Em análise | Aprovada | Comparar com demais conversas indisponíveis |
| `DOC-005` | Guia de continuidade entre chats | P1 | Implementada, aguardando testes | Aprovada | Revisar com o próximo responsável |
| `DOC-006` | Corrigir escopo indevido de UX para prompts do ChatGPT | P1 | Concluída e validada localmente | Correção solicitada pelo usuário | Manter IDs UX-001 a UX-004 anulados apenas em histórico |
| `DEP-001` | Sincronizar código completo com repositório GitHub | P0 | Planejada | Aprovada | Sincronizar após conferência de branch/PR |
| `DEP-002` | Inspecionar Netlify oficial e proteger hospedagem | P0 | Em testes | Aprovada | Verificar conteúdo do deploy em conta autorizada |
| `DEP-003` | Implantar homologação sem expor dados privados | P0 | Bloqueada | Aprovada | Conectar versão correta e confirmar acesso |
| `DEP-004` | Testar formulário em Netlify Forms | P0 | Bloqueada | Aprovada | Habilitar e testar com dados fictícios de teste |
| `DEP-005` | Confirmar domínio e habilitar SEO de produção | P1 | Bloqueada | Aprovada | Confirmar domínio e aprovação final |
| `UX-005` | Auditar contraste nas seções claras | P0 | Concluída e validada em testes locais | Aprovada | Repetir no Netlify/Lighthouse |
| `UX-006` | Fotografias autênticas e logo oficial em alta resolução | P1 | Em análise | Aprovada | Comparar com originais oficiais e aprovar |
| `BUG-001` | Título quase invisível sobre fundo marfim | P0 | Concluída e validada em testes locais | Aprovada | Revalidar visualmente em produção |
| `BUG-002` | Formulário indicava sucesso sem confirmação | P0 | Implementada, aguardando testes de produção | Aprovada | Testar Netlify Forms de ponta a ponta |
| `BUG-003` | Estouro horizontal em telas de 320px | P1 | Concluída e validada em testes locais | Aprovada | Repetir em dispositivos |
| `BUG-004` | Possível duplicação de canonical no runtime | P1 | Concluída e validada em testes locais | Aprovada | Verificar no deploy de domínio real |
| `BUG-005` | URLs e dados de produção ainda incompletos | P0 | Bloqueada | Aprovada | Validar domínio e publicação |
| `SEC-001` | Central de Segurança antifraude | P0 | Concluída e validada em testes locais | Aprovada | Revisar validade dos contatos periodicamente |
| `SEC-002` | Verificador educativo de canais cadastrados | P1 | Concluída e validada em testes locais | Aprovada | Testar revisão e revogação de contatos |
| `SEC-003` | Plano seguro para canal sigiloso de denúncias e anexos | P0 | Planejada | Aprovada para estudo; implantação pendente | Contratar/desenvolver backend após DPIA/segurança |
| `SEC-004` | Sistema real de confirmação de cobranças | P0 | Bloqueada | Aprovada para estudo; implantação pendente | Definir responsável, banco, autenticação e logs |
| `SEC-005` | Validação real de documentos emitidos | P1 | Bloqueada | Aprovada para estudo; implantação pendente | Backend, assinatura e revogação antes do uso |
| `SEC-006` | Portal autenticado de clientes e arquivos | P0 | Bloqueada | Aprovada para estudo; implantação pendente | Especificar identidade, RBAC/MFA, armazenamento privado |
| `SEC-007` | Painel admin de canais com trilha de auditoria | P1 | Bloqueada | Aprovada para estudo; implantação pendente | Criar backend e permissões |
| `SEC-008` | Política de privacidade e responsabilidade LGPD | P0 | Em análise | Aprovada | Definir responsável, retenção, canais de direitos |
| `SEC-009` | MFA, HTTPS, headers, backup e restauração | P0 | Em testes | Aprovada | Auditoria real de produção com responsável |
| `SEC-010` | Separar projeto de selos por conselhos | P1 | Implementada, aguardando testes | Aprovada | Desenvolver proposta própria sem selo no site |
| `INT-001` | Serviços oficiais INSS/SUS/ANS/OAB/ITI | P1 | Concluída e validada em testes locais | Aprovada | Verificar URLs periodicamente |
| `INT-002` | DataJud / Jusbrasil e monitoramento processual | P2 | Adiada | Aprovada para estudo | Reavaliar licenças e finalidade |
| `INT-003` | Login Gov.br para clientes privados | P2 | Rejeitada | Rejeitada para implantação atual | Manter login próprio futuro |
| `INT-004` | Integração API CNES e medicamentos | P2 | Em análise | Aprovada para estudo | Verificar endpoint e termos |
| `CONT-001` | Biblioteca jurídica com busca e guias | P1 | Concluída e validada em testes locais | Aprovada | Revisão jurídica editorial recorrente |
| `CONT-002` | Acervo Instagram organizado e links de origem | P1 | Concluída e validada em testes locais | Aprovada | Confirmar licença/reuso de cada mídia |
| `CONT-003` | Revisar legislação e artigo por advogado | P0 | Em análise | Aprovada genericamente | Registrar revisão por URL e data |
| `SOC-001` | Dois Instagram oficiais vinculados | P1 | Concluída e validada em testes locais | Aprovada | Checar perfis e canal de golpes periodicamente |
| `SOC-002` | Materiais de prevenção para Instagram/WhatsApp | P1 | Implementada, aguardando testes | Aprovada | Aprovar e publicar manualmente nas contas |
| `SEO-001` | Sitemap, canonical e robots no domínio final | P0 | Bloqueada | Aprovada | Configurar URL exata e validar indexação |
| `SEO-002` | Revisão de fontes e datas de artigos | P1 | Em análise | Aprovada | Revisar por advogado antes da indexação |
| `LEG-001` | Aprovação institucional informada pelo usuário | P1 | Aprovada | Aprovada por relato | Guardar comprovante de revisão formal interna |
| `LEG-002` | Revisar normas publicitárias OAB na publicação | P0 | Planejada | Aprovada | Conferir regras vigentes e textos definitivos |
| `TASK-001` | Calculadoras previdenciárias com tabelas versionadas | P2 | Adiada | Aprovada para planejamento | Validar fontes, fórmulas, limites e testes |
| `TASK-002` | Área do cliente com atualização individual de caso | P1 | Bloqueada | Aprovada | Definir provedor seguro, perfis e testes isolamento |

## Detalhes e evidências por registro

### DOC-006 — Corrigir interpretação do escopo da UX de prompts
- **Objetivo:** retirar a antiga Seção 34 do Prompt Mestre V3.1, as demandas de UX-001 a UX-004 e o registro derivado TASK-003 e os controles inseridos indevidamente no site; o pedido original referia-se à interface do ChatGPT.
- **Origem:** correção expressa do usuário em 2026-10-10. **Categoria:** DOC.
- **Prioridade/estado/aprovação:** P1 / Concluída e validada localmente / Correção solicitada pelo usuário.
- **IDs históricos:** UX-001, UX-002, UX-003, UX-004 e TASK-003 **anulados, não reutilizar**, não fazem parte do backlog ativo do site. Rastreabilidade mantida em CHANGELOG, AUDITORIA, DECISOES_DO_PROJETO.
- **Evidência:** ausência de `longtext.css/js`, ausência de `.ra-longtext` nas páginas, conteúdo educacional convertido para HTML regular; teste estático descrito em `RELATORIO_CORRECAO_V32.md`.
- **Versão:** consolidação documental e código local V3.2; **não publicada**.
- **Próxima ação:** confirmar incorporação segura em branch de revisão e homologação.


### DOC-001 — Criar fonte única da documentação /docs
- **Descrição/objetivo:** Criar fonte única da documentação /docs.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** DOC.
- **Prioridade/estado/aprovação:** P0 / Implementada, aguardando testes / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** docs/ + README local. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Revisar sincronização GitHub.

### DOC-002 — Arquivo mestre do projeto
- **Descrição/objetivo:** Arquivo mestre do projeto.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** DOC.
- **Prioridade/estado/aprovação:** P0 / Implementada, aguardando testes / Aprovada.
- **Dependências:** DOC-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** docs/RODRIGO_ALVES_ADVOCACIA_MASTER.md. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Revisão final dos dados.

### DOC-003 — Registro, checklist, roadmap e changelog cruzados
- **Descrição/objetivo:** Registro, checklist, roadmap e changelog cruzados.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** DOC.
- **Prioridade/estado/aprovação:** P0 / Implementada, aguardando testes / Aprovada.
- **Dependências:** DOC-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** docs/*. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Conferir contagens e links.

### DOC-004 — Auditoria retrospectiva de demandas esquecidas
- **Descrição/objetivo:** Auditoria retrospectiva de demandas esquecidas.
- **Origem:** Prompt V3.1 + histórico acessível. **Criado/registrado:** 2026-10-10. **Categoria:** DOC.
- **Prioridade/estado/aprovação:** P1 / Em análise / Aprovada.
- **Dependências:** DOC-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** docs/AUDITORIA.md. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Comparar com demais conversas indisponíveis.

### DOC-005 — Guia de continuidade entre chats
- **Descrição/objetivo:** Guia de continuidade entre chats.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** DOC.
- **Prioridade/estado/aprovação:** P1 / Implementada, aguardando testes / Aprovada.
- **Dependências:** DOC-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** docs/CONTEXTO_PARA_NOVOS_CHATS.md. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Revisar com o próximo responsável.

### DEP-001 — Sincronizar código completo com repositório GitHub
- **Descrição/objetivo:** Sincronizar código completo com repositório GitHub.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** DEP.
- **Prioridade/estado/aprovação:** P0 / Planejada / Aprovada.
- **Dependências:** DOC-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** GitHub: README inicial; ZIP local gerado. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Sincronizar após conferência de branch/PR.

### DEP-002 — Inspecionar Netlify oficial e proteger hospedagem
- **Descrição/objetivo:** Inspecionar Netlify oficial e proteger hospedagem.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** DEP.
- **Prioridade/estado/aprovação:** P0 / Em testes / Aprovada.
- **Dependências:** DEP-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Netlify: projeto SSO, deploy ready; Forms off. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Verificar conteúdo do deploy em conta autorizada.

### DEP-003 — Implantar homologação sem expor dados privados
- **Descrição/objetivo:** Implantar homologação sem expor dados privados.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** DEP.
- **Prioridade/estado/aprovação:** P0 / Bloqueada / Aprovada.
- **Dependências:** DEP-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Nenhum deploy novo nesta etapa. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Conectar versão correta e confirmar acesso.

### DEP-004 — Testar formulário em Netlify Forms
- **Descrição/objetivo:** Testar formulário em Netlify Forms.
- **Origem:** Auditoria V6.1. **Criado/registrado:** 2026-10-10. **Categoria:** DEP.
- **Prioridade/estado/aprovação:** P0 / Bloqueada / Aprovada.
- **Dependências:** DEP-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Config useNetlifyForms=false; Netlify Forms off. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Habilitar e testar com dados fictícios de teste.

### DEP-005 — Confirmar domínio e habilitar SEO de produção
- **Descrição/objetivo:** Confirmar domínio e habilitar SEO de produção.
- **Origem:** Prompts anteriores. **Criado/registrado:** 2026-10-10. **Categoria:** DEP.
- **Prioridade/estado/aprovação:** P1 / Bloqueada / Aprovada.
- **Dependências:** DEP-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/robots.txt bloqueia bots; siteUrl vazio. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Confirmar domínio e aprovação final.

### UX-005 — Auditar contraste nas seções claras
- **Descrição/objetivo:** Auditar contraste nas seções claras.
- **Origem:** V6.2 + captura do usuário. **Criado/registrado:** 2026-10-10. **Categoria:** UX.
- **Prioridade/estado/aprovação:** P0 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** assets/css/qa-v62.css; relatório V6.2. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Repetir no Netlify/Lighthouse.

### UX-006 — Fotografias autênticas e logo oficial em alta resolução
- **Descrição/objetivo:** Fotografias autênticas e logo oficial em alta resolução.
- **Origem:** Crítica de imagens do usuário. **Criado/registrado:** 2026-10-10. **Categoria:** UX.
- **Prioridade/estado/aprovação:** P1 / Em análise / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** assets/img/ versões webp derivadas; fotos autorizar. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Comparar com originais oficiais e aprovar.

### BUG-001 — Título quase invisível sobre fundo marfim
- **Descrição/objetivo:** Título quase invisível sobre fundo marfim.
- **Origem:** Captura do usuário V6.1. **Criado/registrado:** 2026-10-10. **Categoria:** BUG.
- **Prioridade/estado/aprovação:** P0 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** UX-005.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** assets/css/qa-v62.css; relatório anterior. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Revalidar visualmente em produção.

### BUG-002 — Formulário indicava sucesso sem confirmação
- **Descrição/objetivo:** Formulário indicava sucesso sem confirmação.
- **Origem:** Auditoria V6.1. **Criado/registrado:** 2026-10-10. **Categoria:** BUG.
- **Prioridade/estado/aprovação:** P0 / Implementada, aguardando testes de produção / Aprovada.
- **Dependências:** DEP-004.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** data-ra-contact e useNetlifyForms=false. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Testar Netlify Forms de ponta a ponta.

### BUG-003 — Estouro horizontal em telas de 320px
- **Descrição/objetivo:** Estouro horizontal em telas de 320px.
- **Origem:** Auditoria V6.1. **Criado/registrado:** 2026-10-10. **Categoria:** BUG.
- **Prioridade/estado/aprovação:** P1 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** assets/css/qa-v61.css; verificação de largura. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Repetir em dispositivos.

### BUG-004 — Possível duplicação de canonical no runtime
- **Descrição/objetivo:** Possível duplicação de canonical no runtime.
- **Origem:** Auditoria V6.1. **Criado/registrado:** 2026-10-10. **Categoria:** BUG.
- **Prioridade/estado/aprovação:** P1 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** DEP-005.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site.js guarda links já existentes. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Verificar no deploy de domínio real.

### BUG-005 — URLs e dados de produção ainda incompletos
- **Descrição/objetivo:** URLs e dados de produção ainda incompletos.
- **Origem:** Auditoria atual. **Criado/registrado:** 2026-10-10. **Categoria:** BUG.
- **Prioridade/estado/aprovação:** P0 / Bloqueada / Aprovada.
- **Dependências:** DEP-005.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** siteUrl vazio; robots Disallow /. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Validar domínio e publicação.

### SEC-001 — Central de Segurança antifraude
- **Descrição/objetivo:** Central de Segurança antifraude.
- **Origem:** Prompts V6.3/V6.4. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P0 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/seguranca.html + security.js. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Revisar validade dos contatos periodicamente.

### SEC-002 — Verificador educativo de canais cadastrados
- **Descrição/objetivo:** Verificador educativo de canais cadastrados.
- **Origem:** V6.3/V6.4. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P1 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** SEC-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/assets/js/security.js; config.js. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Testar revisão e revogação de contatos.

### SEC-003 — Plano seguro para canal sigiloso de denúncias e anexos
- **Descrição/objetivo:** Plano seguro para canal sigiloso de denúncias e anexos.
- **Origem:** V6.4, plano anexado. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P0 / Planejada / Aprovada para estudo; implantação pendente.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** docs/SEGURANCA_E_LGPD.md. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Contratar/desenvolver backend após DPIA/segurança.

### SEC-004 — Sistema real de confirmação de cobranças
- **Descrição/objetivo:** Sistema real de confirmação de cobranças.
- **Origem:** Plano de Atendimento Seguro. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P0 / Bloqueada / Aprovada para estudo; implantação pendente.
- **Dependências:** SEC-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Arquitetura privada anterior; não implementado. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Definir responsável, banco, autenticação e logs.

### SEC-005 — Validação real de documentos emitidos
- **Descrição/objetivo:** Validação real de documentos emitidos.
- **Origem:** Plano de Atendimento Seguro. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P1 / Bloqueada / Aprovada para estudo; implantação pendente.
- **Dependências:** SEC-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Apenas link VALIDAR/ITI funciona. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Backend, assinatura e revogação antes do uso.

### SEC-006 — Portal autenticado de clientes e arquivos
- **Descrição/objetivo:** Portal autenticado de clientes e arquivos.
- **Origem:** V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P0 / Bloqueada / Aprovada para estudo; implantação pendente.
- **Dependências:** SEC-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Sem backend/autenticação no pacote estático. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Especificar identidade, RBAC/MFA, armazenamento privado.

### SEC-007 — Painel admin de canais com trilha de auditoria
- **Descrição/objetivo:** Painel admin de canais com trilha de auditoria.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P1 / Bloqueada / Aprovada para estudo; implantação pendente.
- **Dependências:** SEC-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Config.js estática, sem login/histórico. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Criar backend e permissões.

### SEC-008 — Política de privacidade e responsabilidade LGPD
- **Descrição/objetivo:** Política de privacidade e responsabilidade LGPD.
- **Origem:** V6.1 + V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P0 / Em análise / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/privacidade.html, falta validação operacional. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Definir responsável, retenção, canais de direitos.

### SEC-009 — MFA, HTTPS, headers, backup e restauração
- **Descrição/objetivo:** MFA, HTTPS, headers, backup e restauração.
- **Origem:** V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P0 / Em testes / Aprovada.
- **Dependências:** DEP-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/_headers; Netlify SSO; sem verificação TLS de domínio. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Auditoria real de produção com responsável.

### SEC-010 — Separar projeto de selos por conselhos
- **Descrição/objetivo:** Separar projeto de selos por conselhos.
- **Origem:** Decisão do usuário. **Criado/registrado:** 2026-10-10. **Categoria:** SEC.
- **Prioridade/estado/aprovação:** P1 / Implementada, aguardando testes / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** institucional-selos/ (documentação separada). **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Desenvolver proposta própria sem selo no site.

### INT-001 — Serviços oficiais INSS/SUS/ANS/OAB/ITI
- **Descrição/objetivo:** Serviços oficiais INSS/SUS/ANS/OAB/ITI.
- **Origem:** V6. **Criado/registrado:** 2026-10-10. **Categoria:** INT.
- **Prioridade/estado/aprovação:** P1 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/servicos; redirecionamentos; sem API simulada. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Verificar URLs periodicamente.

### INT-002 — DataJud / Jusbrasil e monitoramento processual
- **Descrição/objetivo:** DataJud / Jusbrasil e monitoramento processual.
- **Origem:** Prompts V6. **Criado/registrado:** 2026-10-10. **Categoria:** INT.
- **Prioridade/estado/aprovação:** P2 / Adiada / Aprovada para estudo.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Sem API conectada; restrições/contrato. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Reavaliar licenças e finalidade.

### INT-003 — Login Gov.br para clientes privados
- **Descrição/objetivo:** Login Gov.br para clientes privados.
- **Origem:** Prompt V6. **Criado/registrado:** 2026-10-10. **Categoria:** INT.
- **Prioridade/estado/aprovação:** P2 / Rejeitada / Rejeitada para implantação atual.
- **Dependências:** SEC-006.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Sem integração; elegibilidade restrita. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Manter login próprio futuro.

### INT-004 — Integração API CNES e medicamentos
- **Descrição/objetivo:** Integração API CNES e medicamentos.
- **Origem:** Prompt V6. **Criado/registrado:** 2026-10-10. **Categoria:** INT.
- **Prioridade/estado/aprovação:** P2 / Em análise / Aprovada para estudo.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Links oficiais sem consultas em tempo real. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Verificar endpoint e termos.

### CONT-001 — Biblioteca jurídica com busca e guias
- **Descrição/objetivo:** Biblioteca jurídica com busca e guias.
- **Origem:** V3–V5. **Criado/registrado:** 2026-10-10. **Categoria:** CONT.
- **Prioridade/estado/aprovação:** P1 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/blog e data/conteudos.json. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Revisão jurídica editorial recorrente.

### CONT-002 — Acervo Instagram organizado e links de origem
- **Descrição/objetivo:** Acervo Instagram organizado e links de origem.
- **Origem:** V5. **Criado/registrado:** 2026-10-10. **Categoria:** CONT.
- **Prioridade/estado/aprovação:** P1 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/acervo; índices privados fora site. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Confirmar licença/reuso de cada mídia.

### CONT-003 — Revisar legislação e artigo por advogado
- **Descrição/objetivo:** Revisar legislação e artigo por advogado.
- **Origem:** Prompts e conteúdos jurídicos. **Criado/registrado:** 2026-10-10. **Categoria:** CONT.
- **Prioridade/estado/aprovação:** P0 / Em análise / Aprovada genericamente.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Algumas páginas trazem revisão pendente. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Registrar revisão por URL e data.

### SOC-001 — Dois Instagram oficiais vinculados
- **Descrição/objetivo:** Dois Instagram oficiais vinculados.
- **Origem:** Dados confirmados. **Criado/registrado:** 2026-10-10. **Categoria:** SOC.
- **Prioridade/estado/aprovação:** P1 / Concluída e validada em testes locais / Aprovada.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** assets/js/config.js; rodapé. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Checar perfis e canal de golpes periodicamente.

### SOC-002 — Materiais de prevenção para Instagram/WhatsApp
- **Descrição/objetivo:** Materiais de prevenção para Instagram/WhatsApp.
- **Origem:** V6.4 + V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** SOC.
- **Prioridade/estado/aprovação:** P1 / Implementada, aguardando testes / Aprovada.
- **Dependências:** CONT-001.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/seguranca.html modelos copiáveis. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Aprovar e publicar manualmente nas contas.

### SEO-001 — Sitemap, canonical e robots no domínio final
- **Descrição/objetivo:** Sitemap, canonical e robots no domínio final.
- **Origem:** Prompts anteriores. **Criado/registrado:** 2026-10-10. **Categoria:** SEO.
- **Prioridade/estado/aprovação:** P0 / Bloqueada / Aprovada.
- **Dependências:** DEP-005.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** robots disallow; sitemap vazio. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Configurar URL exata e validar indexação.

### SEO-002 — Revisão de fontes e datas de artigos
- **Descrição/objetivo:** Revisão de fontes e datas de artigos.
- **Origem:** Auditoria conteúdos. **Criado/registrado:** 2026-10-10. **Categoria:** SEO.
- **Prioridade/estado/aprovação:** P1 / Em análise / Aprovada.
- **Dependências:** CONT-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** site/blog textos com referência temporal. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Revisar por advogado antes da indexação.

### LEG-001 — Aprovação institucional informada pelo usuário
- **Descrição/objetivo:** Aprovação institucional informada pelo usuário.
- **Origem:** Conversa 10/10/2026. **Criado/registrado:** 2026-10-10. **Categoria:** LEG.
- **Prioridade/estado/aprovação:** P1 / Aprovada / Aprovada por relato.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Usuário relata aprovação geral Rodrigo. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Guardar comprovante de revisão formal interna.

### LEG-002 — Revisar normas publicitárias OAB na publicação
- **Descrição/objetivo:** Revisar normas publicitárias OAB na publicação.
- **Origem:** Prompt V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** LEG.
- **Prioridade/estado/aprovação:** P0 / Planejada / Aprovada.
- **Dependências:** CONT-003.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Aviso no rodapé ainda cita Prov. 205/2021. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Conferir regras vigentes e textos definitivos.

### TASK-001 — Calculadoras previdenciárias com tabelas versionadas
- **Descrição/objetivo:** Calculadoras previdenciárias com tabelas versionadas.
- **Origem:** V6. **Criado/registrado:** 2026-10-10. **Categoria:** TASK.
- **Prioridade/estado/aprovação:** P2 / Adiada / Aprovada para planejamento.
- **Dependências:** nenhuma identificada.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Nenhuma calculadora real ativa. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Validar fontes, fórmulas, limites e testes.

### TASK-002 — Área do cliente com atualização individual de caso
- **Descrição/objetivo:** Área do cliente com atualização individual de caso.
- **Origem:** V3.1. **Criado/registrado:** 2026-10-10. **Categoria:** TASK.
- **Prioridade/estado/aprovação:** P1 / Bloqueada / Aprovada.
- **Dependências:** SEC-006.
- **Critério de aceite:** recurso presente no código correto, comportamento verificado e restrições documentadas.
- **Evidência:** Sem infraestrutura. **Versão:** base até V6.4; documentação V3.1.
- **Última atualização:** 2026-10-10. **Próxima ação:** Definir provedor seguro, perfis e testes isolamento.

## Nota de governança sobre as quatro demandas avançadas (correção V3.2)

As demandas `SEC-006` (Área do Cliente), `SEC-004` + `SEC-005` (cobranças e documentos), `SEC-003` (denúncias confidenciais) e `SEC-007` (administração de canais) foram **aprovadas para análise de viabilidade**, não para implantação imediata. É obrigatória, antes de desenvolver componentes operacionais, uma decisão documentada sobre autenticação, autorização, segurança, LGPD, retenção, fornecedores e testes de isolamento. Nunca usar dados reais de clientes em testes. `TASK-002` trata acompanhamento individual e depende de `SEC-006`, não é uma segunda Área do Cliente.
