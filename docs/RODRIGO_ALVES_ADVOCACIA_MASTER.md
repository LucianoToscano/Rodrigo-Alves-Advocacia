# Rodrigo Alves | Advocacia — ARQUIVO MESTRE

**Data:** 2026-10-10 · **Edição:** 3.2 — documentação parcial no GitHub · **Escopo:** site institucional, ferramentas educativas, segurança antifraude e documentação.

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
**Existente localmente:** 37 páginas HTML, central de segurança, verificador educativo de canais, biblioteca, checklists, links oficiais, dados de perfis, CSS e scripts. Os controles de textos longos inseridos na V3.1 por erro de interpretação foram retirados da cópia local V3.2. A alteração no código completo ainda aguarda sincronização.

**Testes históricos relatados e registrados localmente:** busca, filtros, segurança e responsividade V6.4, sem auditoria de hospedagem.

**Pendente de teste na etapa atual:** UX de copiar sob HTTPS, revisão de acessibilidade com leitores de tela, conversão da implantação real.

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

## Retificação V3.2 (10/10/2026)
- A antiga seção 34 sobre copiar/expandir/retornar a prompts foi excluída do Prompt Mestre (interface do ChatGPT, não do site). A antiga seção 35 passa a ser a 34; o antigo passo 14 foi excluído.
- UX-001..UX-004 e o derivado TASK-003 foram anulados no backlog ativo; reservados apenas no histórico de correção DOC-006, sem reutilização.
- SEC-003/004/005/006/007 são demandas para estudo de viabilidade, segurança e LGPD; implementação exige autorização específica e backend confiável.
- A documentação completa V3.2 e o código corrigido estão **apenas no pacote local** até o envio integral pela revisão GitHub. Não mesclar o PR nem considerar deploy comprovado.
