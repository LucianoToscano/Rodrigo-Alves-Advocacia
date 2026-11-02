# Rodrigo Alves | Advocacia — ARQUIVO MESTRE

**Data:** 2026-10-10 · **Edição:** 3.2 · **Escopo:** site institucional, ferramentas educativas, segurança antifraude e documentação.

## 1. Identidade
Marca: **Rodrigo Alves | Advocacia**; advogado informado: **Rodrigo Alves da Silva Rodrigues Gentil**, OAB/RN **9.792**. Direito da Saúde e Previdenciário. Endereço informado e aprovado via usuário: Rua Natal Sul, 34, 1º andar, Capim Macio, Natal/RN, 59080-005. Whatsapp +55 (84) 99615-0539; e-mail rodrigoalves.advprev@gmail.com. Perfis @advocaciarodrigoalves e @advogadorodrigoalves. Atenção: aprovação foi **relatada pelo usuário**, não comprovada mediante documento formal de assinatura. Não usar documentos de clientes.

## 2. Identidade visual
Monograma RA e imagens já presentes em `site/assets/img`. Azul/ petróleo profundo, grafite, marfim, dourado discreto; fonte Cormorant Garamond e DM Sans declaradas no site. Referência, não substituir a paleta comprovada: `#08151A`, `#132730`, `#BDA57F`, `#F2EEE6`, `#457F7A`. Fotografia oficial de alta resolução e logotipo vetorial permanecem dependentes de checagem do arquivo original. Não redesenhar marca indiscriminadamente.

## 3. Stack e infraestrutura
- **HTML 5 + CSS + JavaScript puro**, sem framework JS, banco ou autenticação nos arquivos auditados.
- Publicação estática via Netlify; raiz de **repositório** inclui `site/` e `docs/`; Netlify `publish = "site"`.
- Raiz local de site: `site/`; conteúdos `site/areas`, `site/blog`, `site/ferramentas`, `site/servicos`, `site/acervo`; JavaScript `site/assets/js`; CSS `site/assets/css`.
- Não há comando `npm run build`; deploy é **estático**, sem compilação.
- GitHub oficial privado: https://github.com/LucianoToscano/rodrigo-alves-advocacia (`main`, repositório ainda sem código site na checagem de 2026-10-10).
- Netlify: https://rodrigo-alves-advocacia.netlify.app ; projeto detectado com SSO obrigatório, deploy `ready`, Forms desativado. Publicação V6.4 nele **não demonstrada**.
- Sem chaves de API, sem endpoint privado e sem senha em repositório.

## 4. Estado comprovável
**Existente localmente:** 37 páginas HTML, central de segurança, verificador educativo de canais, biblioteca, checklists, links oficiais, dados de perfis, CSS e scripts. A V3.1 havia acrescentado controles de textos longos indevidamente, a pedido interpretado como UX do site. Esses controles foram removidos na V3.2; as orientações foram preservadas como conteúdo HTML estático.

**Testes históricos relatados e registrados localmente:** busca, filtros, segurança e responsividade V6.4, sem auditoria de hospedagem.

**Pendente de teste na etapa atual:** revisão de acessibilidade com leitores de tela, configuração e teste de publicação real.

**Bloqueado:** formulário (Netlify Forms não habilitado), documentos privados, cobranças autenticadas, painel admin, portal do cliente, denúncias com anexos, APIs restritas. **Não implementar simulacros.**

**Aprovado por relato do usuário:** informações institucionais e diretriz visual; checar revisão interna do conteúdo e compliance antes da indexação.

## 5. Segurança
Rota `/seguranca` redireciona para `seguranca.html` pelo Netlify. Verificador compara texto localmente; não autentica pessoas nem pagamentos. Sem registro sensível no site. OAB, CNA, ConfirmADV, VALIDAR são **links externos**. Documento institucional de selos emitidos por conselhos é projeto separado, sem certificação no site.

## 6. Histórico conhecido
V2 — aprimoramento visual; V3 — biblioteca; V4 — informações institucionais + checklists; V5 — curadoria Instagram; V6 — serviços oficiais; V6.1 — auditoria geral; V6.2 — contraste; V6.3 — segurança; V6.4 — guias antifraude/cartão; consolidação documental 3.1 (não equivale à publicação).

## 7. Prioridades
P0: GitHub sem código completo, deploy homologação, formulários sem comprovação, segurança/LGPD, revisão OAB. P1: autenticidade de mídia, modernização editorial, governança de contatos. P2: calculadoras, APIs condicionadas a licença. Critérios e responsáveis: ver **Registro**, **Checklist**, **Roadmap**. Responsável jurídico: advogado; responsável técnico/editorial: definir formalmente.

## 8. Documentos relacionados
Veja `REGISTRO_MESTRE_DE_DEMANDAS.md`, `CHECKLIST_GERAL_DO_PROJETO.md`, `DECISOES_DO_PROJETO.md`, `SEGURANCA_E_LGPD.md` e `CONTEXTO_PARA_NOVOS_CHATS.md`. Não confundir relato histórico com prova de funcionamento em produção.

## 9. Estado da sincronização em 10/10/2026
Pull Request de documentação **parcial**: https://github.com/LucianoToscano/rodrigo-alves-advocacia/pull/1. O PR não contém todo o código. A cópia local ZIP contém site/ e 16 documentos; não considerar GitHub a fonte única até transferência integral e revisão.

**Correção V3.2 registrada parcialmente na branch de revisão em commit `ff5d2105`; PR #1 ainda em rascunho. A cópia integral V3.2 permanece local até transferência segura.**


## 10. Continuidade V3.3 — verificação em 10/10/2026
- Base de site correta: ZIP final V3.3 localizado no Drive, SHA-256 `c9f569271a4e7f4d5debcfe632383b8fadedd798860326cd5c9a64a30f2025a1` (72 arquivos/37 páginas HTML).
- `site/` integralmente sincronizado na branch privada `chore/recuperacao-v33-20261010`. SHA da árvore Git `site/`: `9a26ef73caa5ae0ab2e99cea411fb47ba4a2c9e2`, idêntico à árvore local gerada dos arquivos extraídos. Inclui 9 imagens WebP e todos os scripts.
- 1.748 referências relativas auditadas sem ausências, nove scripts validados com `node --check`; sem ID HTML duplicado ou página sem H1/título/viewport.
- Três fotografias aprovadas intactas, com SHA-256 idêntico à V3.2.
- `main` GitHub e PR #1 preservados. Netlify oficial/demo sem modificações, protegidos por SSO; V3.3 não homologada visualmente na hospedagem.
- Chromium deste ambiente bloqueou navegação com `ERR_BLOCKED_BY_ADMINISTRATOR`; testes visuais/móveis/cliques aguardam navegador autorizado.


## Portal privado V3.4 — 10/10/2026
Implementado apenas na branch feat/portal-privado-institucional-v34 e PR #3 draft. Base V3.3 preservada (37 HTML, fotografias originais). Edge Functions com login no servidor, sessão 12h, cookie seguro e logout. 20 testes locais aprovados. O Netlify oficial continua com SSO; deploy atual 6aca07e0e41b1e712c726fc0 tem só 1 asset, sem Edge Functions. Senha e chave ainda não configuradas na Netlify; publicação pendente. Manual docs/PORTAL_PRIVADO_IMPLEMENTACAO_V34.md.


## V3.7 — checklists temáticos e inclusão digital — 10/10/2026
Implementado APENAS na branch feat/v37-checklists-acessibilidade, PR #7 draft, sobre V3.6 PR #6. Preservados SSO, Netlify oficial e todos os retratos e logo originais. Evolução dos checklists de 3 para 7 situações sem CPF, upload, coleta ou armazenamento de documentos. Nova página /acessibilidade.html referenciada no rodapé de todas as 39 páginas: texto ampliado, contraste, orientações NVDA/VoiceOver/TalkBack, leitura por voz do navegador e Libras governamental opcional somente por clique explícito com aviso sobre serviço externo e tradução não certificada. 42/42 testes Node locais; 2066 referências locais, 0 URLs internas faltantes, 13 JS com sintaxe válida. Não declarar conformidade WCAG nem aprovação jurídica ou deploy sem validação externa. Manual docs/ACESSIBILIDADE_CHECKLISTS_V37.md; PR #7.


## 12. Migração de Arquivo Mestre para Drive LucianoToscano (10/10/2026)
**Novo repositório documental oficial (pasta Drive):** https://drive.google.com/drive/folders/1vcwfP0U-jQR-b2pbXHFgadp6t1wyUOj5.
Localização confirmada via API: proprietário LucianoToscano; contém seis subpastas (site/código, documentação, acervo privado Instagram, backups, projeto institucional de selos separado e imagens/logos). Conferidas 14 entradas em código, 39 documentos, 3 ZIPs de Instagram, 3 backups, 2 itens do projeto de selos e 49 imagens. O guia de continuidade convertido para DOCX está em https://drive.google.com/file/d/1i1bz0XsZbyCrk1WKbD1Hqn0kd2mpkrRb/view, contém referências à V3.7. **Não assumir propriedade ou compartilhamento seguro de todos os arquivos sem auditoria de permissões.**
O conector Google Drive desta sessão ainda responde por conta antiga; antes de qualquer escrita de documento/backup, o proprietário precisa alterar a conexão para LucianoToscano em Plugins. A pasta nova foi identificada como `anyone:writer` (qualquer pessoa com link edita). Precisa ser corrigida pelo proprietário; não divulgar o acervo privado nessa condição. Um GPT externo pode usar uma pasta/arquivo separado de documentação sanitizada compartilhada como leitor, ou conectar Drive LucianoToscano diretamente — mero link não assegura acesso automatizado.
Guia de migração completo `docs/MIGRACAO_DRIVE_LUCIANOTOSCANO_20261010.md`. Sem alteração na hospedagem oficial/SSO, sem mesclar PRs. Fotos aprovadas, site V3.7 e projeto de selos separados permanecem preservados.


## Proteção da aparência do Dr. Rodrigo — Acervo 07 (10/10/2026)
Referências curadas: https://drive.google.com/drive/folders/1vbONFn8yQ-v8fftBmH3yf9dTGVaPv45i
Guia obrigatório de fisionomia e estilo: https://docs.google.com/document/d/1awl4cnyqQkGYayJBPPhvumm1XOtIFAhtAtbXEcsIW4w/edit
Inventário inicial: 58 imagens JPG e um desktop.ini; 0 imagens JPG idênticas no SHA-256, vários fotogramas quase iguais.
Seleção após auditoria de procedência: 17 imagens (10 naturais históricas, 4 de óculos/ângulos/perfil, 3 editoriais APENAS de estilo, nunca de fisionomia); 41 imagens redundantes, menos úteis ou de origem pendente e desktop.ini foram movidos reversivelmente para arquivo: https://drive.google.com/drive/folders/1kF2TthAezpQ8LtauuE6zXqGt8fsu_NW7 . Nenhuma foto foi apagada definitivamente, e os três retratos institucionais aprovados do site V3.3 permanecem idênticos.
Nunca modificar feições, idade aparente atual, sobrancelhas, olhos, nariz, boca, cabelo, barba, proporções ou tom natural de pele. Referência de rosto: fotos NATURAIS atuais expressamente aprovadas pelo advogado; fotos antigas só como apoio histórico; peças editoriais somente como referência de composição, não biométrica. As fotos do rosto precisam de revisão de Rodrigo antes da publicação. Não tomar imagens com outras marcas como prova da aparência dele.
A pasta compartilha acesso de Comentador por link; verificar autorização de acesso a retratos. Não houve alteração no Netlify, SSO, website ou branch main.


### Revisão final de procedência e fotos WebP aprovadas
As imagens de vídeo de 2025 com a identificação visual de outro perfil (alvesdiasadvogados) foram separadas em https://drive.google.com/drive/folders/1b0m1Dyg6qhLQ0O_yfVUbGHz9DJmAsEfb . Sua titularidade deve ser confirmada por Rodrigo ANTES de considerá-las referência facial. O total da pasta 07 é: 17 imagens selecionadas por uso (10 naturais históricas, 4 óculos/perfil, 3 EDITORIAIS SOMENTE ESTILO) e três fotografias WebP institucionais aprovadas do site V3.3, que estão agora disponíveis diretamente em https://drive.google.com/drive/folders/1Af0mtqOJOi2aB9WBA4Lv5EC9G9qf190H (arquivos, MIME e tamanho preservados). Painel visual das 17 selecionadas: https://drive.google.com/file/d/1Nc5W0SZiOQQ4nBy5hmyHlfmMUSOuC_nF/view . A triagem de descartes guarda 42 itens (41 JPG e desktop.ini), nenhum excluído definitivamente. Sempre seguir o guia atualizado https://docs.google.com/document/d/1awl4cnyqQkGYayJBPPhvumm1XOtIFAhtAtbXEcsIW4w/edit e pedir ao advogado retratos naturais recentes validados antes de gerar uma imagem oficial.

## Atualização editorial e jurídica — 02/11/2026

Em 02/11/2026 foi aberta a branch de revisão `fix/auditoria-conteudo-20261102` para correções de textos, segurança, links, BPC, auxílio-acidente, perícia, planos de saúde e acervo Instagram. Documento técnico com fontes e pendências: [AUDITORIA_CORRECOES_EDITORIAIS_20261102.md](AUDITORIA_CORRECOES_EDITORIAIS_20261102.md).

**Importante:** a mudança é proposta, não aprovação jurídica. Não confundir atualização editorial por IA com validação pelo advogado. Não publicar nem mesclar sem revisão ética (OAB), jurídica, LGPD, testes visuais e funcionais e conferência de dados do profissional. Produção Netlify não foi alterada por esta revisão.

### Situação pós-merge — 02/11/2026
Em 02/11/2026 a PR #13 foi mesclada na `main`, commit `13e37312c158c0d7db00de5231d1ab197a7b02c7`. A anotação imediatamente anterior era o plano de aprovação ANTES do merge e não representa mais o estado do GitHub. **Permanece pendente** aprovação jurídica e de privacidade pelo escritório, auditoria funcional real e homologação de produção; a mesclagem no GitHub não prova publicação na Netlify. Dois ajustes corretivos de coerência editorial estão em PR de revisão separada. Ver `docs/STATUS_POS_MERGE_20261102.md`.
