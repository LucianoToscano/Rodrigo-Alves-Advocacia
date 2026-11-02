# Status pós-merge e plano de homologação — 02/11/2026

**Projeto:** Rodrigo Alves | Advocacia  
**Data:** 02/11/2026  
**Natureza:** registro operacional, não homologação jurídica ou liberação pública.

## Fatos confirmados

- A PR #13 foi **mesclada** na `main` em 02/11/2026 (commit de merge por squash `13e37312c158c0d7db00de5231d1ab197a7b02c7`). O texto original da auditoria foi escrito quando a PR ainda estava em rascunho e deve ser lido historicamente.
- Na última consulta à Netlify nesta data, o deploy principal ainda era o ID `6acaaed846e0a138a2c6a761` (deploy de outubro), **não** um deploy confirmado do commit acima.
- Os testes automatizados Node existentes no snapshot do commit passaram (63/63). Isso não testa autenticação, cookies, Edge Functions, navegação visual ou acessibilidade na plataforma Netlify.
- A proteção por senha é implementada por Edge Functions; a informação `requiresPassword=false` da Netlify refere-se ao controle nativo da plataforma e **não prova** falta de proteção customizada.
- Os arquivos HTML permanecem configurados com `noindex,nofollow,noarchive`, e nenhuma correção desta fase deve desativar o portal ou publicar o site.

## Problemas de coerência encontrados após a PR #13

**A-001 — FAQ de auxílio-acidente:** em `site/areas/auxilio-acidente.html`, o campo `FAQPage.acceptedAnswer` começou com “Sim” para a pergunta “Voltar ao trabalho impede auxílio-acidente?”, mas a orientação do INSS e o restante da frase indicam o contrário. A FAQ visível também usava uma resposta genérica diferente. Ajustar ambas para resposta “Não”, explicando as condições, e testar equivalência textual. Fonte oficial: https://www.gov.br/pt-br/servicos/solicitar-auxilio-acidente.

**A-002 — Anos do acervo Instagram:** em `site/acervo/index.html`, o aviso dizia que as 12 postagens eram de 2025, embora haja 8 entradas de 2025 e 4 de 2026. Corrigir o aviso para “2025 e 2026” e adicionar teste derivado das datas presentes nos cards. Verificar título, autoria, data e autorização de cada postagem antes de publicação pública.

**A-003 — Auditoria ampliada de FAQPage:** foram identificadas mais 17 divergências no JSON-LD do site: 14 perguntas BPC em 7 páginas sem FAQ visível correspondente e 3 respostas estruturadas diferentes da resposta exibida (em auxílio-acidente, perícia e BPC). A correção proposta removeu apenas os nós `FAQPage` órfãos, preservando `Attorney`/`LegalService` e os conteúdos visíveis, e alinhou as 3 respostas estruturadas ao HTML. Os 44 pares de perguntas e respostas ainda marcados ficam cobertos por teste automático. O Google informou em junho de 2026 que removeu a documentação de rich results de FAQ, após retirar o recurso da Busca; esta limpeza busca **consistência sem promessa de rich results**. Referência: https://developers.google.com/search/updates?hl=pt-BR.\n\n## Pendências P0 antes de liberação pública

1. Preparar e verificar um deploy de **homologação** da `main` aprovada ou da PR corretiva. Não promover produção automaticamente.
2. Validar de ponta a ponta senha, logout, expiração da sessão, cookies `HttpOnly/Secure/SameSite`, rate limiting, acesso direto a HTML/CSS/JS/JSON/imagens e comportamento de previews, sem credenciais reais em logs.
3. Obter revisão e aprovação expressa pelo advogado do conteúdo jurídico, dados institucionais, redação sobre decisões judiciais, OAB e política de pagamentos; registrar responsável e data.
4. Revisar LGPD: dados transmitidos nos canais reais, Google Fonts, VLibras opcional, cookies, terceiros, retenção e direitos dos titulares.
5. Confirmar que os meios de contato realmente funcionam. O código atual usa contato direto e um formulário auxiliar local; **não** presumir que Netlify Forms está habilitado nem que haja servidor para envio de dados.

## Pendências P1 e P2

- Central de Apoio ao Cidadão: ampliar roteiros oficiais de CRAS/CadÚnico, SUS, ANS, Defensoria, prevenção a golpes e assistência social, com links verificados e linguagem respeitosa.
- Glossário de linguagem popular e filtros por situação, sem oferecer consulta jurídica automatizada.
- Acessibilidade com testes manuais de teclado, NVDA/VoiceOver, zoom, foco e impressão dos checklists.
- Após autorização de abertura, revisar sitemap, canonicals, Open Graph, structured data, performance móvel, indexação e consistência da informação.

## Separação de projetos e políticas

Preservar a arquitetura atual, as fotografias e a identidade oficial. Não implantar painel do cliente, captura de documentos sensíveis, consultas simuladas a Gov.br ou selo de conselho profissional no site. O projeto institucional de selos permanece independente em `institucional-selos/`.

**Status desta correção:** proposta em branch e PR de revisão; nada neste documento implica merge, deploy Netlify ou publicação. Testes automatizados locais devem ser acompanhados por verificação real em homologação.
