# AVR-001 — Assistente Virtual Rodrigo V3 | Integração contínua

**Data:** 10/10/2026. **Estado:** integrado em branch de revisão `feat/assistente-rodrigo-animado-v1`, PR #10 em rascunho, **sem merge e sem publicação/alteração de acesso Netlify**.

## Decisão e escopo
- O assistente é um guia ilustrado educativo; não se apresenta como advogado real, atendimento ao vivo ou inteligência artificial.
- V2 substituída como mecanismo ativo por um renderizador de uma única figura de **811 × 1506 px**, WebP lossless RGBA, recortada de imagem individual previamente fornecida pelo usuário; imagens V1/V2 históricas preservadas.
- O PNG tem transparência real; a movimentação usa malha WebGL2 de microdeformações no rosto/cabeça, respiração e gestos discretos. Sem troca de poses, sem caminhada fingida. Navegadores sem WebGL2 usam Canvas 2D com deformação subpixel contínua; fallback final é imagem estática.
- No site, o componente é carregado pelas referências existentes em `site/assets/js/site.js`, sem necessidade de inserir scripts nas 39 páginas HTML nem de reconstruir o layout.
- Digitação de perguntas NÃO é oferecida; a V3 tem cinco opções informativas e links internos já existentes: INSS, BPC/LOAS, Saúde, Segurança e Contato.
- O visitante pode pausar o movimento. Respeitar `prefers-reduced-motion`; pausa na guia oculta. É armazenada localmente apenas a preferência de animação (chave `ra_assistente_pausado_v3`). Não usa API externa, formulários, analytics, IA ou upload.

## Arquivos integrados
- `site/assets/img/assistente-rodrigo-v3.webp` — arte alfa de alta definição (única imagem ativa da V3).
- `site/assets/js/assistente-rodrigo.js` — instalação e ciclo de vida do painel e do renderizador contínuo.
- `site/assets/css/assistente-rodrigo.css` — estilos isolados, responsividade, foco visível, impressão e acessibilidade.
- `tests/test-assistente-v3.mjs` — regressão estática, art asset, privacidade e links.
- `tests/test-assistente-v1.mjs` / `tests/test-assistente-v2.mjs` — testes anteriores adaptados para a V3, preservando validação das imagens históricas, sem exigir técnicas retiradas.

## Integração e limites
- Botão no canto inferior direito acima do WhatsApp, painel informativo, acessibilidade por teclado (`Escape` fecha), `aria-expanded`, foco e links.
- O site institucional e as fotografias aprovadas permanecem inalterados. Nenhuma integração com Meta/OAB e nenhum selo falso.
- O efeito V3 **não é um rig profissional**: a cabeça não pode virar para ângulos novos e os membros não são articulados de maneira independente. Um rig Rive/Live2D real requer ilustração separada em camadas de alta resolução e validação artística própria.
- O modelo conserva exatamente os pixels da imagem-base 811x1506 por compressão sem perdas, mas a tela renderiza em resolução adaptativa limitada a 2× DPR para evitar gasto exagerado em dispositivos móveis.

## Qualidade e gates
- JS: `node --check` do novo script passou; testes de interação executados em Chromium usando página autocontida sob `page.set_content`, viewports 1440×900, 390×844, 320×700. Abertura, assunto Saúde, URL correta, pausa e fechamento Escape passaram; sem pageerrors ou overflow horizontal. Acesso ao servidor local por `http://127.0.0.1` foi bloqueado administrativamente; portanto não equivale à homologação no domínio real.
- O teste WebGL2 real depende de navegação/ambiente compatível; em Chromium do protótipo anterior havia fallback Canvas 2D. O funcionamento visual em páginas reais e sobreposições com banners, menu, WhatsApp, botão sair e leitores de tela precisa de QA adicional.
- **Pendente:** testar preview Netlify sob SSO, verificar dispositivos iOS/Android reais, confirmar revisão editorial/jurídica e executar a suíte total no checkout real antes de fazer merge.
- **Não mudar** `main`, SSO, senha, Edge Functions, Netlify Forms, `netlify.toml` ou URLs de produção sem autorização e controles existentes.

## PAUSADO / OCULTO — solicitação de 10/10/2026
**AVR-001 está desativado por decisão do usuário.** O carregador em `site/assets/js/site.js` usa `const ASSISTENTE_RODRIGO_ATIVO = false` e retorna antes de inserir CSS, script ou qualquer elemento do assistente. O personagem não deve aparecer nem se movimentar em nenhuma página enquanto esse bloqueio estiver ativo. Guardar os arquivos JS/CSS/WebP, testes e histórico para futura melhoria; **não remover a proteção ou publicar** sem novo pedido explícito. PR #10 permanece em revisão/pausado.
