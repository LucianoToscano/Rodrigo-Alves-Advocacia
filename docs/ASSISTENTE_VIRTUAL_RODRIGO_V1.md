# AVR-001 — Assistente Rodrigo ilustrado (versão inicial)

**Data:** 10/10/2026. **Estado:** Implementado em branch de revisão; não mesclado nem publicado.

## Objetivo
Personagem ilustrado criado a partir das imagens fornecidas pelo solicitante, com sete poses e orientações por temas, integrado à arquitetura existente HTML/CSS/JS sem frameworks ou backend adicional.

## Arquivos
- `site/assets/img/assistente-rodrigo-poses.webp`: recortes da imagem enviada, com fundo transparente.
- `site/assets/css/assistente-rodrigo.css`: estilos, responsividade e movimento opcional.
- `site/assets/js/assistente-rodrigo.js`: roteiro local com cinco assuntos, botões e links internos.
- `site/assets/js/site.js`: loader progressivo comum às páginas existentes.
- `tests/test-assistente-v1.mjs`: testes estáticos de regressão.

## Segurança, ética e usabilidade
O guia ilustrado **não é IA nem o advogado atendendo ao vivo**. Não analisa processos ou situações individuais, não recebe CPF, senhas, documentos ou dados médicos, não envia requisições ou gera relatórios. Possui apenas links para conteúdos já existentes. Textos educativos não substituem atendimento individualizado. Não criar selo oficial ou parceria inexistente. Não inserir dados de terceiros.

Acesso via botão flutuante no canto direito, posicionado acima do WhatsApp, sem exibição automática do painel. Existem cinco temas: INSS, BPC/LOAS, Direito da Saúde, proteção contra golpes e contato. Sete poses conforme imagem enviada. O visitante pode pausar as animações, e a preferência fica armazenada localmente; `prefers-reduced-motion` é respeitado. Escape fecha o painel; links/botões nativos oferecem teclado e foco.

## Validação e pendências
- Sintaxe do JavaScript: `node --check` executado com sucesso localmente.
- Testes estáticos novos dependem de checkout completo (`node --experimental-strip-types --test tests/*.mjs`).
- Navegador Chromium local retornou `ERR_BLOCKED_BY_ADMINISTRATOR`, impossibilitando conferência visual real. Não declarar que houve teste funcional em browser.
- Pendente revisão responsiva 320/390/820/1440, leitores de tela, foco, conteúdo jurídico, sobreposições com banners, confirmação de uso institucional do personagem e homologação com SSO.
- Netlify `main`, SSO, senha, Edge Functions e Forms **não alterados**.