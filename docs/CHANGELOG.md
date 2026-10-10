# Histórico de alterações

## 2026-10-10 — Consolidação V3.1 (local; ainda não publicada)
- DOC-001/002/003/005: criada estrutura `docs/` e documentação cruzada.
- UX-001/002/003/004: criados `site/assets/js/longtext.js` e `site/assets/css/longtext.css`; aplicados quatro blocos em três páginas.
- DEP-001/002: inspecionados repositório GitHub privado e projeto Netlify; código não identificado no GitHub, Forms desativado, deploy com SSO.
- Segurança: documentação fora do diretório publicável; `publish = site` em `netlify.toml` raiz.
- Não foi realizado deploy nem implantado backend.

## Histórico anterior (evidência: relatórios/arquivos locais)
- V6.4: segurança, cartão profissional, guias antifraude.
- V6.3: central antifraude e verificação local de canais.
- V6.2: contrastes em áreas claras.
- V6.1: correções de formulário/canonical/320px.
- V6: Central de Serviços Jurídicos.
- V5: acervo Instagram curado.
- V4: institucional e ferramentas BPC.
- V3: biblioteca e recursos editoriais.
- V2: refinamento visual.

Antes de relacionar a commits reais, obter SHAs e validar comparações.

## 2026-10-10 — Sincronização GitHub parcial (sem deploy)
- Branch `chore/consolidacao-v31-revisao`; PR #1 draft. Arquivo Mestre e SYNC_STATUS adicionados.
- Os demais arquivos aguardam transferência integral; ver DEP-001.

## V3.2 — 2026-10-10 — Correção de escopo (DOC-006)
- Excluída do Prompt Mestre a antiga Seção 34; antiga Seção 35 renumerada 34; removido o antigo PASSO 14 e renumerada a sequência; retirada frase do objetivo final sobre interface de textos longos.
- **Erro de interpretação na V3.1:** os IDs UX-001 a UX-004 e TASK-003 foram anulados (não reutilizar), removidos do backlog e checklist ativos; histórico preservado neste changelog e na auditoria.
- Retirados `longtext.js`, `longtext.css` e os elementos `.ra-longtext` inseridos em três páginas. Conteúdo substantivo dos quatro blocos preservado em HTML simples.
- SEC-003, SEC-004, SEC-005, SEC-006, SEC-007 vinculados à análise de viabilidade, segurança, LGPD e autorização específica. Nenhum backend novo foi habilitado.
- Projeto de selos segue separado. GitHub e Netlify não foram modificados pelo pacote local V3.2.

**Nota complementar:** `TASK-003` era uma demanda derivada do equívoco sobre controles de prompts; retirada do backlog ativo e ID reservado no histórico. A acessibilidade geral do website permanece coberta por auditorias de UX/QA, independente dessa interface.

## V3.2 — atualização parcial do PR #1 (GitHub, sem merge)
- Branch `chore/consolidacao-v31-revisao`: Arquivo Mestre alterado para registrar correção de escopo; descrição do PR #1 atualizada para V3.2.
- **Não enviado ao GitHub ainda:** site/ completo, docs/ completos, Prompt Mestre V3.2 e projeto institucional separado. O PR continua em rascunho e não deve ser mesclado.
- **Netlify:** sem deploy novo.


### Conclusão da recuperação do código — 10/10/2026
- 72 arquivos descompactados e sincronizados no diretório `site/` da branch `chore/recuperacao-v33-20261010`, incluindo 9 WebP preservadas.
- Árvores Git local/remota idênticas: `9a26ef73caa5ae0ab2e99cea411fb47ba4a2c9e2`.
- Pacote original preservado em `source/` e projeto `institucional-selos/` segregado. Sem merge, sem novo deploy, sem alteração SSO.


## V3.4 — 10/10/2026 — portal privado em revisão
Criadas Netlify Edge Functions (guarda geral, login limitado, sessão HMAC) e JS público apenas para mostrar/ocultar senha. site.js/site.css adicionam Encerrar acesso. Mantidas 37 páginas e 3 fotografias. Testes locais 20/20. GitHub PR #3 draft; sem deploy, sem merge, sem retirada do SSO.


## V3.6 — experiência guiada e segurança educativa (2026-10-10)
- Nova rota estática site/orientacao/index.html com sete tópicos e links para material existente.
- Teaser na homepage e navegação por Comece aqui, sem inserir itens adicionais no menu principal.
- Filtro por palavra nas 18 perguntas frequentes, via assets/js/faq-v36.js, sem rede ou retenção.
- Biblioteca: filtro por formato de conteúdo e orientação contextual. Página de ferramentas e Central de Segurança atualizadas com atalhos/roteiros.
- CSS novo assets/css/orientacao-v36.css e JS assets/js/orientacao-v36.js; testes tests/test-v36.mjs. Teste V3.5 ajustado para reconhecer explicitamente a 38ª página.
- Fotografia, logomarca, autenticação Netlify e infraestrutura da V3.5 preservadas. PR #6 draft, sem merge/deploy. QA local 33/33 aprovado; homologação visual real pendente.


## V3.7 — checklists personalizados e inclusão — 10/10/2026
- Novo site/acessibilidade.html, CSS/JS inclusivos carregados nas 39 páginas; controles de apresentação, orientações de leitor de tela, fala opcional e VLibras somente após clique (terceiro não homologado).
- `site/ferramentas/organizar-documentos.html` de 3 para 7 temas; marcações em memória e impressão nativa/PDF, sem entrada de dados pessoais.
- Ligações da orientação V3.6 aos checklists via código de assunto em URL. Testes tests/test-v37.mjs, 42/42 aprovados no conjunto.
- Conservadas imagens, portal privado, SSO e branch main. PR #7 draft pendente de QA real, LGPD/OAB e homologação externa.

## AVR-001 — 10/10/2026 — Assistente Rodrigo na branch de revisão
Sete poses do desenho enviado, painel de navegação por Previdência, BPC, Saúde, Golpes e Contato, CSS/JS progressivos e testes estáticos. Sem IA, coleta pessoal, merge ou deploy. QA visual bloqueado no navegador de desenvolvimento, aguardando homologação. Ver `ASSISTENTE_VIRTUAL_RODRIGO_V1.md`.

## AVR-001 V2 — 10/10/2026 (branch de revisão)
Alterado assistente V1 para V2 com 10 poses individuais com transparência, alternância autônoma de expressões, passos curtos em desktop, balanço corporal discreto e controle de pausa. Mantidos menus de informação e política sem coleta. Criados `tests/test-assistente-v2.mjs` e documentação V2. Testes Node passaram; homologação visual pendente. **Não publicado**.


## AVR-001 V3 — 10/10/2026 — movimento contínuo em revisão
- Substituído o slideshow V2 por uma só imagem de alta definição com transparência sem perdas e deformação suave contínua (WebGL2 / fallback Canvas 2D).
- Reduzido asset ativo para 467 KB sem alteração de pixels em relação ao PNG da V3.
- Novo CSS/JS independente, painel responsivo, cinco orientações locais, pausa, teclado e movimento reduzido.
- Testes históricos V1/V2 adaptados para verificar regressões relevantes; adicionado `test-assistente-v3.mjs`.
- Testes Chromium isolados em desktop e telas 390/320 px: abrir/fechar painel, link educativo, pausa e Escape passaram. Ambiente bloqueou navegação por localhost; homologação no site real permanece pendente.
- Sem merge, deploy, alteração de conteúdo institucional, login, SSO, Edge Functions ou Netlify Forms.


## 2026-10-10 — AVR-001 suspenso, assistente oculto
- Usuário solicitou deixar assistente Rodrigo desligado por enquanto e retomar melhorias futuramente.
- Desabilitado o carregamento em `site/assets/js/site.js` por flag `ASSISTENTE_RODRIGO_ATIVO = false`. Sem injeção de CSS, JS do widget ou DOM do personagem.
- Arquivos, documentação, imagens e testes preservados na branch PR #10 (rascunho). Sem merge na `main`, sem mudança no portal privado/Netlify SSO.

## AVR-001 — suspensão reforçada (10/10/2026)
Removido o autocarregador do assistente do `site/assets/js/site.js` na branch PR #10. JS, CSS e imagens do assistente permanecem no repositório, porém não são carregados nem mostrados. Ajustados testes para assegurar inatividade. A prévia da Netlify só refletirá a alteração após um build bem-sucedido; nenhum deploy em produção.
