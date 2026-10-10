# Checklist geral permanente

Atualizado 2026-10-10. `[x]` significa validação local documentada em etapa anterior; não equivale a teste em produção. Itens que só possuem implementação ficam desmarcados.

- [ ] **DOC-001** [P0] Criar fonte única da documentação /docs — Implementada, aguardando testes; Revisar sincronização GitHub.
- [ ] **DOC-002** [P0] Arquivo mestre do projeto — Implementada, aguardando testes; Revisão final dos dados.
- [ ] **DOC-003** [P0] Registro, checklist, roadmap e changelog cruzados — Implementada, aguardando testes; Conferir contagens e links.
- [ ] **DOC-004** [P1] Auditoria retrospectiva de demandas esquecidas — Em análise; Comparar com demais conversas indisponíveis.
- [x] **DOC-006** [P1] Corrigir escopo indevido da UX para prompts do ChatGPT — Removido do site e documentação V3.2; ids anulados e não reutilizáveis.
- [ ] **DOC-005** [P1] Guia de continuidade entre chats — Implementada, aguardando testes; Revisar com o próximo responsável.
- [ ] **DEP-001** [P0] Sincronizar código completo com repositório GitHub — Planejada; Sincronizar após conferência de branch/PR.
- [ ] **DEP-002** [P0] Inspecionar Netlify oficial e proteger hospedagem — Em testes; Verificar conteúdo do deploy em conta autorizada.
- [ ] **DEP-003** [P0] Implantar homologação sem expor dados privados — Bloqueada; Conectar versão correta e confirmar acesso.
- [ ] **DEP-004** [P0] Testar formulário em Netlify Forms — Bloqueada; Habilitar e testar com dados fictícios de teste.
- [ ] **DEP-005** [P1] Confirmar domínio e habilitar SEO de produção — Bloqueada; Confirmar domínio e aprovação final.
- [x] **UX-005** [P0] Auditar contraste nas seções claras — Concluída e validada em testes locais; Repetir no Netlify/Lighthouse.
- [ ] **UX-006** [P1] Fotografias autênticas e logo oficial em alta resolução — Em análise; Comparar com originais oficiais e aprovar.
- [x] **BUG-001** [P0] Título quase invisível sobre fundo marfim — Concluída e validada em testes locais; Revalidar visualmente em produção.
- [ ] **BUG-002** [P0] Formulário indicava sucesso sem confirmação — Implementada, aguardando testes de produção; Testar Netlify Forms de ponta a ponta.
- [x] **BUG-003** [P1] Estouro horizontal em telas de 320px — Concluída e validada em testes locais; Repetir em dispositivos.
- [x] **BUG-004** [P1] Possível duplicação de canonical no runtime — Concluída e validada em testes locais; Verificar no deploy de domínio real.
- [ ] **BUG-005** [P0] URLs e dados de produção ainda incompletos — Bloqueada; Validar domínio e publicação.
- [x] **SEC-001** [P0] Central de Segurança antifraude — Concluída e validada em testes locais; Revisar validade dos contatos periodicamente.
- [x] **SEC-002** [P1] Verificador educativo de canais cadastrados — Concluída e validada em testes locais; Testar revisão e revogação de contatos.
- [ ] **SEC-003** [P0] Plano seguro para canal sigiloso de denúncias e anexos — Planejada; Contratar/desenvolver backend após DPIA/segurança.; **aprovação de implementação pendente de análise de viabilidade, segurança e LGPD**
- [ ] **SEC-004** [P0] Sistema real de confirmação de cobranças — Bloqueada; Definir responsável, banco, autenticação e logs.; **aprovação de implementação pendente de análise de viabilidade, segurança e LGPD**
- [ ] **SEC-005** [P1] Validação real de documentos emitidos — Bloqueada; Backend, assinatura e revogação antes do uso.; **aprovação de implementação pendente de análise de viabilidade, segurança e LGPD**
- [ ] **SEC-006** [P0] Portal autenticado de clientes e arquivos — Bloqueada; Especificar identidade, RBAC/MFA, armazenamento privado.; **aprovação de implementação pendente de análise de viabilidade, segurança e LGPD**
- [ ] **SEC-007** [P1] Painel admin de canais com trilha de auditoria — Bloqueada; Criar backend e permissões.; **aprovação de implementação pendente de análise de viabilidade, segurança e LGPD**
- [ ] **SEC-008** [P0] Política de privacidade e responsabilidade LGPD — Em análise; Definir responsável, retenção, canais de direitos.
- [ ] **SEC-009** [P0] MFA, HTTPS, headers, backup e restauração — Em testes; Auditoria real de produção com responsável.
- [ ] **SEC-010** [P1] Separar projeto de selos por conselhos — Implementada, aguardando testes; Desenvolver proposta própria sem selo no site.
- [x] **INT-001** [P1] Serviços oficiais INSS/SUS/ANS/OAB/ITI — Concluída e validada em testes locais; Verificar URLs periodicamente.
- [ ] **INT-002** [P2] DataJud / Jusbrasil e monitoramento processual — Adiada; Reavaliar licenças e finalidade.
- [ ] **INT-003** [P2] Login Gov.br para clientes privados — Rejeitada; Manter login próprio futuro.
- [ ] **INT-004** [P2] Integração API CNES e medicamentos — Em análise; Verificar endpoint e termos.
- [x] **CONT-001** [P1] Biblioteca jurídica com busca e guias — Concluída e validada em testes locais; Revisão jurídica editorial recorrente.
- [x] **CONT-002** [P1] Acervo Instagram organizado e links de origem — Concluída e validada em testes locais; Confirmar licença/reuso de cada mídia.
- [ ] **CONT-003** [P0] Revisar legislação e artigo por advogado — Em análise; Registrar revisão por URL e data.
- [x] **SOC-001** [P1] Dois Instagram oficiais vinculados — Concluída e validada em testes locais; Checar perfis e canal de golpes periodicamente.
- [ ] **SOC-002** [P1] Materiais de prevenção para Instagram/WhatsApp — Implementada, aguardando testes; Aprovar e publicar manualmente nas contas.
- [ ] **SEO-001** [P0] Sitemap, canonical e robots no domínio final — Bloqueada; Configurar URL exata e validar indexação.
- [ ] **SEO-002** [P1] Revisão de fontes e datas de artigos — Em análise; Revisar por advogado antes da indexação.
- [ ] **LEG-001** [P1] Aprovação institucional informada pelo usuário — Aprovada; Guardar comprovante de revisão formal interna.
- [ ] **LEG-002** [P0] Revisar normas publicitárias OAB na publicação — Planejada; Conferir regras vigentes e textos definitivos.
- [ ] **TASK-001** [P2] Calculadoras previdenciárias com tabelas versionadas — Adiada; Validar fontes, fórmulas, limites e testes.
- [ ] **TASK-002** [P1] Área do cliente com atualização individual de caso — Bloqueada; Definir provedor seguro, perfis e testes isolamento.


## Checklist de retomada V3.3 — 10/10/2026
- [x] Localizar e extrair ZIP V3.3 final no Drive; verificar integridade de 72 arquivos.
- [x] Validar 37 páginas HTML, 1.748 referências locais, 9 scripts e atributos básicos de acessibilidade.
- [x] Comparar os três retratos aos aprovados na V3.2 (arquivos idênticos).
- [x] Recuperar `site/` e documentos em branch GitHub isolada; comparação exata do SHA da árvore Git com diretório extraído.
- [x] Confirmar SSO e Forms desabilitado nos dois Netlify; não modificar hospedagens.
- [ ] Conferir PR draft e solicitar revisão antes de merge na main.
- [ ] Verificar com navegador autorizado a versão servida no Netlify demo e se equivale à V3.3.
- [ ] Homologar desktop/mobile 320–375px, menus, cookies, Central de Segurança, cartão, acervo e clique WhatsApp.
- [ ] Revisar LGPD, segurança, conteúdo jurídico e aprovação final antes de abrir ao público.


## Checklist V3.4 — portal de acesso
- [x] Recuperar V3.3 mais completa; pacote V3.2 PORTAL_PRIVADO_SENHA não localizado nos acessos atuais.
- [x] Preservar 37 HTML e fotos institucionais.
- [x] Implementar Edge Functions, login, cookie 12h, logout e UI com logomarca.
- [x] Testar 20 cenários locais com credenciais fictícias.
- [x] Criar PR #3 rascunho e manual técnico, sem modificar main ou Netlify.
- [ ] Configurar variáveis secretas somente no projeto oficial Netlify (Functions).
- [ ] Executar deploy de preview no projeto oficial mantendo SSO.
- [ ] Validar HTTP 401, 429, cookies, mobile, menu, Whatsapp, segurança, fotos e acesso direto.
- [ ] Após QA e aprovação, mudar proteção SSO para tela privada e conferir anonimamente.


## Checklist V3.6 — funcionalidades educativas sem dados de cliente
- [x] UX-007: Implementar guia Por onde começar? por 7 situações; não pedir dados/arquivos pessoais. Teste estático.
- [x] CONT-004: Tornar pesquisáveis as 18 perguntas frequentes existentes sem enviar termos.
- [x] CONT-005: Acrescentar formato de conteúdo como filtro mantendo pesquisa e área da biblioteca.
- [x] SOC-003: Complementar antifraude com 4 roteiros sem prometer verificação ou coleta de provas.
- [x] UX-008: CSS isolado responsivo, foco, redução de movimento e impressão; implementação, não certificação WCAG.
- [x] QA-001: Rodar 33 testes Node, checar 38 HTML, 1.829 refs locais, 1.251 âncoras e preservar SHA das imagens.
- [ ] Validar todo fluxo, links, busca, CSS, teclado, leitura assistiva e dispositivo móvel no navegador.
- [ ] Validar a V3.5 em Netlify oficial com SSO ativo, duas Edge Functions, rate limit e URLs diretas bloqueadas.
- [ ] Revisão OAB/LGPD, direitos de mídia e 12 conteúdos do Instagram pelo profissional.
- [ ] Aprovação e merge sequencial PR #2 → PR #3 → PR #6; registro de commit e rollback; NÃO alterar Netlify oficial até homologação.
Nota: Netlify Forms segue desligado por decisão de segurança da V3.5; evitar reativação automática só porque o checklist V3.2 antigo dizia DEP-004 P0.


## Checklist V3.7 — 10/10/2026
- [x] Evoluir organizador de 3 para 7 situações, preservando os 3 existentes e impressão PDF pelo navegador.
- [x] Ligar as sete situações de Por onde começar? às listas temáticas com código allowlisted.
- [x] Página Acessibilidade com instruções de teclado, leitores de tela, leitura por voz local e comunicação escrita.
- [x] Contraste e aumento do texto, preferência apenas no navegador; privacidade atualizada.
- [x] VLibras opcional sob clique e aviso de serviço externo, com alternativa de link oficial.
- [x] Testar 42 casos Node, links internos, 39 páginas, JS e hashes de quatro imagens.
- [ ] Testar fisicamente NVDA, VoiceOver e TalkBack, zoom 200%/400%, PDF A4, 320px, contraste e teclado.
- [ ] Revisar compatibilidade e privacidade externa do VLibras e linguagem jurídica com pessoa surda ou especialista em Libras.
- [ ] Validar no Netlify oficial (SSO ainda ativo) o portal e as URLs/permalinks históricos; depois submeter PRs #2, #3, #6 e #7 por ordem.


## MIGRAÇÃO DO DRIVE — 10/10/2026
- [x] Identificar novo Arquivo Mestre no Drive LucianoToscano: https://drive.google.com/drive/folders/1vcwfP0U-jQR-b2pbXHFgadp6t1wyUOj5
- [x] Verificar seis subpastas, inventário inicial (site 14, docs 39, Instagram 3, backups 3, selos 2, imagens 49).
- [x] Confirmar cópia de guia de continuidade DOCX com referência à V3.7 no destino novo.
- [x] Registrar novos IDs de localização, roteiro de migração e alerta de permissão pública na branch PR #7.
- [ ] **URGENTE:** alterar `Qualquer pessoa com o link: Editor` no arquivo mestre — preferir `Restrito`. Para GPT externo somente guia sanitizado com `Leitor`.
- [ ] Reconfigurar conexão do plugin Google Drive do ChatGPT para a conta LucianoToscano. Testar perfil de conta e gravação em destino protegido.
- [ ] Verificar para cada subpasta e arquivo sensível as permissões efetivas após mudança.
- [ ] Criar/publicar apenas o guia GPT sanitizado como Leitor; conferir acesso externo em navegação anônima.
- [ ] Atualizar o conteúdo de links antigos dentro de documentos DOCX copiados, **após reconectar conta correta**.
- [ ] Checar integridade de todos os arquivos migrados com hashes, especialmente ZIPs grandes; tamanhos iguais não bastam para comprovar integridade.
- [ ] Considerar migração concluída somente após verificação e restauração de acesso sem a conta antiga.


## Bloqueio de liberação do portal apenas com senha — 10/10/2026

- [ ] **DEP-006** [P0] Revisar e mesclar com segurança PRs #2, #3, #6, #7 e #8, preservando SSO durante as publicações intermediárias.
- [ ] **SEC-011** [P0] Confirmar guard `/*`, ambas Edge Functions e configuração de segredos no **deploy de produção** do projeto oficial, não apenas em preview.
- [ ] **SEC-012** [P0] Inventariar e tratar todos os permalinks e deploys históricos sem guard ANTES de mudar a política de visibilidade.
- [ ] **SEC-013** [P0] Homologar login no Android e iOS, sessão, cookie, rate limiting, bloqueio de ativos e logout; corrigir incompatibilidade de logout WebView sem enfraquecer CSRF.
- [ ] **DEP-007** [P0] Verificar capacidade real de SSO restrito a **não produção** (ou proteção equivalente). Se não suportada, manter SSO nos deploys legados.
- [ ] **DEP-008** [P0] Abrir produção com somente a senha institucional após aprovação explícita, teste anônimo completo e rollback SSO previamente preparado.
- [x] **DOC-007** [P0] Preparar runbook detalhado de liberação e reversão — `docs/PLANO_LIBERACAO_SOMENTE_SENHA_20261010.md`, **nenhuma desproteção executada**.

**Estado operacional: NO-GO para remover SSO.** `main` ainda tem deploy antigo sem guard. Não considerar um teste em preview como autorização para tornar todos os permalinks públicos.

### AVR-001 — Assistente Rodrigo
- [x] Criar componente isolado a partir de ilustração fornecida, sem alterar fotografias, portal ou SSO.
- [x] Preparar orientação educativa, redução de movimento, pausa e tecla Escape.
- [ ] Executar QA real em mobile e desktop, leitores de tela e sobreposição de componentes.
- [ ] Aprovar editorial e uso institucional das poses; revisar PR antes de merge/deploy.

### AVR-001 V2 — Movimento automático
- [x] Recortar dez poses reais do último material existente, sem solicitar nem gerar novas imagens.
- [x] Criar loop autônomo de expressões e pequenas caminhadas, respeitando movimento reduzido e pausa voluntária.
- [x] Executar verificações estáticas e testes Node V2 (3/3).
- [ ] Homologar movimento fluido sem tremores em navegadores e celulares reais.
- [ ] Revisar possíveis sobreposições com WhatsApp, banner de consentimento e saída do portal.
- [ ] Aprovar uso institucional das ilustrações e dos textos antes de merge/deploy.


### AVR-001 V3 — integração no site em revisão
- [x] Preservar fotos e marca existentes, utilizar só a imagem fornecida e recortada, sem gerar novo rosto.
- [x] Integrar no loader global existente com CSS/JS isolados, sem modificar páginas institucionais.
- [x] Substituir alternância de imagens por movimento contínuo; WebGL2 com fallback Canvas 2D e PNG/WebP sem perdas.
- [x] Testar interface isolada em Chromium 1440, 390 e 320 px; sem overflow horizontal ou erros de página observados.
- [ ] Executar testes integrais na branch (Netlify deploy preview protegido e dispositivos reais) e validar desempenho/acessibilidade com leitores de tela.
- [ ] Rever sobreposição com cookies, WhatsApp, banner, botão sair e telas de menor altura.
- [ ] Obter revisão visual e editorial antes de liberar deploy/merge.


### AVR-001 — suspensão temporária aprovada
- [x] Registrar solicitação de desativação e manter histórico, imagens, código e demais recursos.
- [x] Aplicar bloqueio explícito no carregamento do assistente para que permaneça oculto na prévia.
- [ ] Validar build de prévia após commit e conferir que o personagem não aparece no domínio de homologação.
- [ ] Retomar refinamento de rigging, nitidez e naturalidade apenas quando solicitado.
