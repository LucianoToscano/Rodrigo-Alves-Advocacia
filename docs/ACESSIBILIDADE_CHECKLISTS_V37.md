# V3.7 — Checklists por assunto e acessibilidade inclusiva

Data: 10/10/2026 · Base V3.6, 38 páginas, branch isolada; status: somente código e testes locais. **Não publicado, não homologado, não equivale a certificado WCAG.**

## Entregas
- Organizador de documentos já possuía 3 temas (BPC, benefício INSS negado e negativa do plano), checkboxes e impressão/PDF nativo. V3.7 amplia para **7 temas**: mais medicamentos/tratamentos, auxílio-acidente, perícia INSS e mensagem suspeita. Os itens são informativos, não documentação legal obrigatória exaustiva. Zero campos pessoais, zero uploads, zero requisições de dados. `?assunto=...` contém apenas um código enumerado, sem informação pessoal.
- Página `/acessibilidade.html`, link em rodapé de todas as 39 páginas, controles para ampliar texto e alto contraste, detalhes para leitores de tela/teclado, leitura em voz nativa opcional e orientação para pessoas surdas.
- VLibras oficial integrado em **carregamento somente após clique** e advertência sobre serviço externo e limitações de tradução automática. Transmissão de dados ao provedor e comportamento devem ser revisados sob LGPD antes de publicar; nenhuma biblioteca remota é carregada de modo automático.
- Preferências de contraste e texto gravadas em `localStorage` sob chave `ra_display_preferences`; sem identificação/analytics. Política de Privacidade ajustada para informar. A opção de restaurar padrão apaga o efeito, mantendo somente valores padrão se o armazenamento for permitido.
- Fluxo de `window.print()` permite imprimir / salvar PDF local, sem gerar arquivo no servidor. Marcação em memória, perdida ao sair da página. Opção teclado/ARIA progressivo.
- Links dos 7 cards da página `Por onde começar?` apontam a checklist com tema pré-selecionado; sem copiar documentos ou PII na URL.
- Imagens hero, mobile, perfil e logo oficiais **inalteradas**. Netlify Edge, sessão 12h, SSO e branches oficiais sem alterações.

## Segurança e limites
- Travar a proteção privada antes de liberar conteúdo, incluindo essa nova página e scripts. Não alterar `netlify.toml`, `netlify/edge-functions/` nem variáveis de autenticação no escopo desta versão.
- VLibras é tradução automática, NÃO substitui intérprete humano (incluindo atendimento, consultas ou audiências). Ver documentação oficial: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras e https://vlibras.gov.br/doc/widget/installation/webpageintegration.html .
- A tecnologia de fala do navegador não substitui NVDA/VoiceOver/TalkBack; dependendo do navegador, vozes podem requerer recursos externos do fornecedor, portanto não prometer funcionamento totalmente offline.
- Não declarar que o site atende integralmente à WCAG 2.2 AA sem auditoria de navegação real e testes com usuários. Referência: https://www.w3.org/TR/WCAG22/ . Lei Brasileira de Inclusão, art. 63: https://planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm .

## Aceite antes do merge
- Testar teclado sem mouse (incluindo autenticação, navegação, categorias, checklist e botões), NVDA + Firefox/Chrome, VoiceOver Safari, TalkBack Android, zoom 200%/400%, contraste real e dispositivos 320px.
- Testar impressão em A4 e "Salvar como PDF" para cada situação, título e itens relevantes; links diretos e `?assunto=` inválidos.
- Testar o VLibras no ambiente protegido com consentimento, CSP, rede e cookies; informar política de processamento; se não funcionar, manter link externo e desabilitar widget até correção.
- Confirmar revisão jurídica dos sete roteiros por advogado; não prometer resultado nem incluir prazos/benefícios desatualizados.
- Dependências de releases: PR #2 V3.3 -> PR #3 V3.5 -> PR #6 V3.6 -> PR V3.7. Não tocar produção sem homologação Netlify e SSO.
