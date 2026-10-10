# Homologação de branch Netlify — 10/10/2026

Inspeção do painel autenticado confirmou integração com LucianoToscano/rodrigo-alves-advocacia. Projeto oficial 8771458f-6330-4e91-b891-2d25b0e32982, rodrigo-alves-advocacia.

Habilitado branch deploy exclusivamente para feat/v37-checklists-acessibilidade. Produção permanece em main. SSO global e visibilidade privada preservados. Não houve merge ou publicação de produção.

Painel Environment variables informa que não há variáveis configuradas no projeto. RA_PRIVATE_ACCESS_PASSWORD e RA_PRIVATE_SESSION_KEY precisam ser cadastradas pelo responsável diretamente no Netlify; não enviar valores por chat nem incluir no Git. Não considerar autenticação homologada antes disso.

Este commit documental permite ao fluxo Git já conectado iniciar o branch deploy autorizado. Primeiro validar compilação e proteção de falha sem segredos; testes de login/sessão/logout e 429 permanecem pendentes.

Deploy de produção preservado: 6aca07e0e41b1e712c726fc0. Outros deploys existentes inventariados no painel: 6aca3b3c6231860008f0c16a, 6aca2b63ca4eb5000939306d, 6aca14906cdd740008a370ee, 6aca11cae0c1ac0008cb57b5, 6aca0e2c1fcbcb0007783103. Proteção HTTP individual ainda não verificada.

Antes desta alteração: branch deploys=None; previews em PRs contra main/branches habilitadas; build ativo; base=/; build command e publish directory não definidos no painel (netlify.toml da branch publica site); Node 24.x; Ubuntu Noble 24.04. Reversão da configuração: retornar branch deploys a None, preservando SSO; isso não remove deploys existentes.

Fotos e código do site/Edge Functions não foram modificados. Homologação mobile/desktop, todas as URLs e permalinks, rate limit real, sessão/login/logout e publicação seguem pendentes. Testes locais anteriores não constituem homologação externa.
