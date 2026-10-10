# V3.3 — Demonstração completa (pré-publicação) — 10/10/2026

Base: V3.2 com retratos originais restaurados. Nenhum dos três arquivos `rodrigo-*.webp` foi alterado.

## Feito
- Substituídas notas internas de rascunho por conteúdo público apropriado em Início, Sobre, Segurança e Acervo.
- Página Cartão Profissional aprimorada com retrato aprovado.
- Central de publicações: incluídas quatro capas verdadeiras do acervo @advogadorodrigoalves, com identidade RA. **Não** reproduzidas as capas antigas com identidade de terceiro; demais posts continuam com links originais.
- Contato: alterado formulário inativo para orientador local por assunto que abre o WhatsApp oficial. Sem backend e sem armazenamento de dados. Não simula envio de formulário.
- Privacidade: texto alinhado ao funcionamento real da demonstração; a política operacional definitiva ainda depende das práticas reais de retenção e controle de acessos do escritório.
- CSS responsivo e suporte a movimento reduzido.

## Não realizado
- Nenhum novo deploy no Netlify, nem alteração da produção.
- Não habilitado Netlify Forms, login de cliente, verificação de cobrança, portal ou recebimento de anexos.
- Nenhum selo fictício ou parceria com Meta/OAB.
- Não se considera que um site com acesso SSO possa ser compartilhado externamente sem conta.

## Próximos testes
- Abrir em dispositivo móvel real, validar clique WhatsApp, botão voltar, acervo, contraste, controles de cookie.
- Somente após aprovação e política de privacidade revisada pelo responsável, considerar versão pública.

## Verificações desta revisão
- 37 HTML com `meta viewport` e página `h1`.
- 1.748 referências relativas verificadas; **0** arquivos locais ausentes.
- 0 IDs HTML duplicados no inventário estático.
- 3 retratos institucionais idênticos byte a byte à versão preferida.
- 8 JavaScripts locais passaram em `node --check` (sem erros de sintaxe).
- 2 testes unitários do orientador WhatsApp passaram: URL com número autorizado e caso de número indisponível. Nenhuma mensagem foi enviada.
- Chromium não pôde executar testes reais: `net::ERR_BLOCKED_BY_ADMINISTRATOR`. **Responsividade e clique real no navegador não estão homologados nesta versão.**
- Rota `/seguranca` preparada com `_redirects` para deploy manual; `X-Robots-Tag` mantém a intenção de não indexar a demonstração. A proteção de visitantes real continua definida pelo Netlify (SSO).
- Pacotes ZIP abrem sem erro de integridade.

## Risco identificado na amostra Instagram
Algumas peças do acervo mais antigo incluem uma identidade visual que não corresponde à marca RA. Para evitar confusão institucional, somente quatro capas do perfil profissional que exibem RA foram aproveitadas. As outras publicações permanecem como referência por URL.

## Estado de hospedagem
O projeto de testes `rodrigo-alves-demo-testes-20261010` continha versão anterior, com status de deploy `ready` e acesso SSO. **Nenhum novo deploy foi efetuado com este pacote V3.3**, pois a conexão Netlify disponível não oferece upload do conteúdo.
