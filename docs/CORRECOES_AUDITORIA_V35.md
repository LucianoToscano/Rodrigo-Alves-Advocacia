# V3.5 — Correções após auditoria do comitê | 10/10/2026

Status: **branch de revisão, sem merge em `main`, sem deploy oficial, SSO Netlify preservado**. Base V3.3/V3.4 preservada; nunca publicar sem homologação real.

## Correções implementadas
1. Netlify: `portal-login.ts` agora usa `path: '/__acesso/entrar'` literal. A declaração desse handler existe apenas inline para manter o rate limiting; `portal-guard` é declarado exclusivamente no `netlify.toml`, garantindo ordem de avaliação, sem duplicação.
2. Validador CNJ: algoritmo corrigido para sufixo de **dois zeros `00`**, conforme Resolução CNJ nº 65/2008, Anexo VIII (os antigos `0₁`/`0₀` são índices subscritos e não quatro dígitos). Exemplo sintético: `0000001-39.2024.8.26.0100` tem DV matemático 39; a versão antiga calculava incorretamente 15.
3. Home: formulário desabilitado e promessa de registro removidos da interface; agora há CTA para WhatsApp e e-mail oficiais. Netlify Forms continua **desativado**; não adicionar armazenamento de dados de clientes.
4. Política de Privacidade: texto adequadamente marcado como versão privada de apresentação, canais externos e cookie assinado de sessão de 12h descritos. Revisão do escritório para publicação final permanece obrigatória.
5. Defesa SEO: metadados `robots` de 37 páginas alterados para `noindex,nofollow,noarchive`, coerentes com a fase privada. Cabeçalho `X-Robots-Tag` e `robots.txt` já exigiam `noindex`/`Disallow`. O sitemap segue propositalmente vazio até o lançamento público, sem indexação prematura.
6. Novos testes automatizados `tests/test-release-v35.mjs`, além de `tests/test-portal.mjs`.

## Portões de homologação ainda pendentes (P0)
- Configurar RA_PRIVATE_ACCESS_PASSWORD e RA_PRIVATE_SESSION_KEY apenas como segredos Netlify (Functions), jamais em GitHub/docs/chat; build + deploy necessários.
- Verificar se o projeto institucional real já possui GitHub conectado. Fazer **branch deploy protegido** no mesmo projeto `rodrigo-alves-advocacia`, com SSO mantido; confirmar duas Edge Functions, HTML/arquivos inacessíveis sem cookie, rate limit HTTP 429, expiração, logout, 503 sem segredo, histórico de deploy URLs/preview/permalinks.
- Executar testes reais de navegadores, mobile, telas, navegação, foto original, WhatsApp, acervo, acessibilidade WCAG e performance. Static tests não substituem isso.
- Verificar 12 postagens Instagram sinalizadas para revisão e autenticidade de dados OAB/canais; não fingir aprovação jurídica.
- Aprovar privacidade, uso de formulários, política editorial e abertura pública futura separadamente. SEO canonicals e sitemap só após autorização de domínio e de lançamento público.
- Inspecionar URL direta de deploys antigos antes de remover Netlify SSO; caso qualquer conteúdo privado seja exposto, restabelecer barreira externa.

## Operação
- Testes: `node --experimental-strip-types --test tests/test-portal.mjs tests/test-release-v35.mjs` com Node 22+.
- Rotacionar a chave de sessão e redeploy invalida as sessões; trocar só a senha não revoga cookies já emitidos.
- Não apagar demo antigo sem inventário, e não publicar `docs/`, `source/`, `tests/` no diretório `site/`.
- Para o lançamento público futuro, elaborar PR separado removendo portal privado, incluindo metadados `index`, canonical, sitemap, revisão jurídica/OAB/LGPD e documentação de aprovação.

Fontes:
- Resolução CNJ 65/2008 compilada (Anexo VIII): https://atos.cnj.jus.br/files/compilado23285720221017634de539229ab.pdf
- Edge Functions declarations Netlify: https://docs.netlify.com/build/edge-functions/declarations/
- Netlify rate limiting: https://docs.netlify.com/manage/security/secure-access-to-sites/rate-limiting/
