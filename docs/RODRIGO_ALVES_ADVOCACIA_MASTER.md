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
