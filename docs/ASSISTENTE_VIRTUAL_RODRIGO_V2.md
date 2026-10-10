# AVR-001 — Assistente Rodrigo V2: animação autônoma

**Data:** 10/10/2026  
**Status:** código preparado para homologação; não aprovado para publicação principal.  
**Fonte visual:** última montagem ilustrada de 10 poses enviada/gerada na conversa, preservada sem gerar imagens adicionais.

## Entrega

- 10 imagens WebP individuais, transparentes (300 × 410), oriundas da última montagem, `site/assets/img/assistente-rodrigo-v2/pose-01.webp` a `pose-10.webp`.
- Script `site/assets/js/assistente-rodrigo.js`: máquina de estados em repouso, alternância automática de pose, caminhadas curtas em telas largas, cinco temas informativos, botão de pausa, memória local apenas da preferência.
- Estilos `site/assets/css/assistente-rodrigo.css`: crossfades 650ms, leve balanço/respiração 6,7s e passos 650ms, foco visível, responsividade e motion reduction.
- Página **somente demonstrativa** `site/preview.html` no pacote local. Não instalar esse `preview.html` na produção sem revisão e não substituir o `index.html` institucional.
- Teste automatizado estático `tests/test-assistente-v2.mjs`.

## Integração

O arquivo global `site/assets/js/site.js` do PR #10 já inclui carregador progressivo dos mesmos caminhos CSS e JS, sem alterações nos layouts e fotos oficiais. Na branch V2, substituir apenas os arquivos desses caminhos; manter o código do portal de senha, as Netlify Edge Functions, o SSO e os arquivos de marca sem alterações.

## Segurança e ética

O boneco é explicitamente um **guia ilustrado**, não conversa com o advogado e não avalia casos. Não há API de IA, dados sensíveis, formulário ou armazenamento de conteúdo. O único valor guardado em `localStorage` é a preferência por movimento pausado. Não incluir informações de clientes, fotos de terceiros, selos falsos ou tokens.

## Qualidade

- Sintaxe JS e testes Node: aprovados localmente.
- Dez arquivos WebP identificados; transparência RGBA verificada na geração.
- Browser Chromium da infraestrutura retornou `ERR_BLOCKED_BY_ADMINISTRATOR`, inclusive para URLs locais. **Não confundir isso com êxito ou falha do componente.** Homologação visual e testes de clique real em desktop/mobile e leitores de tela continuam pendentes.
- Permitir pausa de movimento, respeitar `prefers-reduced-motion`, e limitar deslocamento horizontal a 90px em desktops.
- Aprovação de retrato/estilo e conteúdo editorial pelo escritório ainda é necessária.

## Próximos passos

1. Abrir a página demonstrativa em navegador real, incluindo celular (movimento curto desativado em telas pequenas).
2. Ajustar escala/posição e sobreposição com WhatsApp, banner de consentimento, botão de saída e menu.
3. Revisar licitude do uso institucional da representação visual e mensagens.
4. Revisar PR e efetuar deploy somente com aprovação; não liberar o SSO ou permalinks antigos sem controles de acesso.