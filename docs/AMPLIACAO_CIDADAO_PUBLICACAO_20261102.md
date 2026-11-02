# Ampliação cidadã, segurança e plano de publicação — 02/11/2026

## Situação do código
- Commit-base da branch de expansão: `d944ac28c2e63bad29b60ad1584adaa6888ac6fa` (PR #16 e #17 incorporadas à main).
- **Implementado nesta branch:** oito roteiros de utilidade pública em `site/servicos/index.html#apoio-cidadao`, com fontes MDS/CRAS, Cadastro Único, Meu INSS, SAMU, OuvSUS, ANS, DPU, Banco Central e doação de sangue; glossário com 12 termos em `site/orientacao/index.html#glossario`; filtro local sem coleta em `assets/js/orientacao-v36.js`; destaque de segurança na home; esclarecimentos de privacidade sobre Google Fonts, VLibras e ANPD; CSS de impressão A4; seis novos testes automáticos.
- **Preservados:** 39 páginas já existentes, identidade visual original, arquivos de imagens, Edge Functions, bloqueio `noindex,nofollow,noarchive`, diretório `institucional-selos/`, canal oficial de WhatsApp e configuração de deploy. Não ativar envio de dados sensíveis.

## Fontes oficiais consultadas em 02/11/2026
1. CRAS: https://www.gov.br/mds/pt-br/acoes-e-programas/SUAS/unidades-de-atendimento/centro-de-referencia-de-assistencia-social-cras
2. Benefícios eventuais: https://www.gov.br/mds/pt-br/acoes-e-programas/SUAS/beneficios-assistenciais/beneficios-eventuais
3. Cadastro Único: https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico/Cadastro-unico/
4. SAMU: https://www.gov.br/saude/pt-br/composicao/saes/samu-192
5. Rede de urgência: https://www.gov.br/saude/pt-br/composicao/saes/dahu/atencao-de-urgencia
6. Ouvidoria do SUS: https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus
7. ANS/NIP: https://www.gov.br/ans/pt-br/assuntos/consumidor/notificacao-de-intermediacao-preliminar-nip
8. Banco Central/Pix: https://www.bcb.gov.br/meubc/faqs/p/vitima-fez-um-pix-e-caiu-em-um-golpe
9. OAB/RN, alerta de falso advogado: https://www.oabrn.org.br/noticia/oabrn-alerta-sobre-golpe-do-falso-advogado-saiba-onde-denunciar
10. Doação de sangue: https://www.gov.br/saude/pt-br/composicao/saes/doacao-de-sangue/
11. ANPD, direitos dos titulares: https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares
12. OAB, publicidade: https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021

## Critérios de aceite técnico
- Executar `node --experimental-strip-types --test tests/*.mjs` em Node 22 e registrar logs integrais.
- Confirmar que 39 páginas permanecem `noindex`, que o acesso privado da Edge Function protege HTML/CSS/JS/JSON e imagens, e que login, logout, CSRF, cookie `HttpOnly/Secure/SameSite`, expiração e limite de tentativas funcionam na Netlify.
- Conferir visualmente 320/360/390px, desktop, zoom 200–400%, teclado, VoiceOver/NVDA e impressão A4; correções apenas após reproduzir problema real.
- Testar links externos oficiais e preferências de cookies, sem enviar mensagens de atendimento reais nem dados pessoais.

## Publicação e rollback
1. Criar preview da branch, validar testes e confirmar que as Edge Functions estão presentes.
2. Revisar as informações institucionais, o conteúdo jurídico sensível, as fotos e a política de pagamento com o advogado.
3. Fazer merge da PR após aprovação e executar deploy de produção da `main` com teste de acesso privado. Não remover `noindex` nem a senha até liberação explícita.
4. Conferir que Netlify realmente publicou o SHA atualizado, pois merge no GitHub não implica implantação; em falha, reverter pelo painel Netlify para o último deploy comprovadamente funcional.

## Pendências não comprovadas
- Aprovação jurídica do Dr. Rodrigo sobre jurisprudência, regras de benefícios, dados cadastrais e política de pagamentos.
- Validação operacional LGPD (fornecedores, bases legais específicas, prazos de retenção, controle de acesso a canais externos).
- Auditoria visual/manual com usuários, validação em navegador real e certificações de acessibilidade (não reivindicar conformidade).
- Configuração real de alertas, backups, domínio próprio e custos/limites da hospedagem.
- Formulário servidor: não habilitado; usar apenas contato direcionado a aplicativo externo, sem upload nem coleta pelo site.
- Atualização futura e autorização de uso de cada publicação do acervo Instagram.
- SEO de abertura: manter noindex até aprovação formal; sitemap/canonicals e Rich Results apenas em preparação.

Não confundir autorização técnica para continuar o desenvolvimento com comprovação externa de conformidade ou com aprovação jurídica.

## Resultado comprovado da execução de 02/11/2026

- PR #18 incorporada à `main` no commit `1c8a38fc7811566afd62d18bfa77e1a27e44f1e8` (subsequente atualização documental na `main`).
- Prévia Netlify #18: `https://deploy-preview-18--rodrigo-alves-advocacia.netlify.app` — estado `ready`, Edge Functions presentes, sem alertas do scanner de segredos do deploy.
- Reprodução local após integração das PRs #16, #17 e #18: `node --experimental-strip-types --test tests/*.mjs` — 74 testes, 74 aprovados, nenhuma falha.
- Verificação estática: 39 páginas; 0 recursos locais faltantes, 0 fragmentos sem destino, 0 imagens sem `alt`, 0 páginas com cardinalidade incorreta de `h1`.
- Limitação: navegador Chromium instalado bloqueou solicitações em ambiente isolado (`net::ERR_BLOCKED_BY_ADMINISTRATOR`); não há evidências de testes visuais/teclado efetivos.
- O deploy ativo principal na Netlify continuava `6acaaed846e0a138a2c6a761` (antigo), **não** o commit de merge; a publicação principal permanece operacionalmente pendente de disparo autorizado no painel e verificação pós-deploy. Não desativar senha, noindex nem proteção Edge.
- Pendências humanas continuam: aprovação jurídica, LGPD real, autorização de fotos e meios de pagamento, testes de leitor de tela, autenticação e fluxo de contato em produção protegida.
