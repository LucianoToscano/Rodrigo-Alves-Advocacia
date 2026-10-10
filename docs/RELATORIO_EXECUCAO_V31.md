> **Histórico V3.1, preservado para auditoria:** registros de UX de prompts abaixo descrevem uma implementação posteriormente revertida na V3.2 após correção do escopo pelo usuário. Não representam funcionalidades aprovadas do site atual.

# Relatório de execução — consolidação V3.1

Data: 2026-10-10. Base: site V6.4 pré-existente. **Não é aprovação para publicação.**

## Implementado localmente
- Reestruturação controlada do pacote: `site/` apenas público, `docs/` privado do repositório e `institucional-selos/` separado.
- `netlify.toml` com `publish = "site"`; preservados redirects, 37 páginas, CSS, JS, imagens, biblioteca, ferramentas e área de segurança.
- 16 documentos mestres, README na raiz preservando o conteúdo inicial, 47 demandas rastreadas, checklist, roadmap e histórico.
- `longtext.js/css` e 4 blocos copiáveis/expansíveis em 3 páginas; sem nova dependência.

## GitHub — verificação e ações
- Repositório privado `LucianoToscano/rodrigo-alves-advocacia`, branch main com README inicial; sem site completo.
- Criada branch `chore/consolidacao-v31-revisao` e PR rascunho https://github.com/LucianoToscano/rodrigo-alves-advocacia/pull/1.
- Enviados apenas Arquivo Mestre e SYNC_STATUS. **Não foram enviados os demais arquivos**; PR não está pronto para merge.

## Netlify — somente inspeção
- Projeto id `8771458f-6330-4e91-b891-2d25b0e32982`; deploy existente ready, acesso por SSO obrigatório; Forms não habilitado.
- Nenhuma nova publicação, configuração de domínio ou ativação de Forms executada.

## Testes executados
- Validação estática local: 37 HTML, 9 JS, 4 blocos de texto longo, 16 arquivos mestres, **zero caminhos locais ausentes**; scripts checados com `node --check`.
- Navegador Chromium isolado: dois blocos na Central de Segurança; abrir/recolher, botões gerados, cópia com `navigator.clipboard` simulado e contexto seguro, foco no bloco correto, blocos independentes; **passou**.
- Larguras 320/390/820/1440 px no cenário isolado: `scrollWidth == clientWidth`; zero erros JavaScript observados.
- Sem teste real da API Clipboard sobre HTTPS nem leitores de tela.
- Nenhum teste de envio Netlify Forms, segurança backend, auditoria Lighthouse real ou isolamento de documentos (não há backend).

## Pendente e bloqueado
- **P0:** transferir integralmente site/ e docs/ ao GitHub, validar PR, Netlify preview e formulário real; domínio/SEO e conformidade final.
- **P0/P1 por arquitetura:** denúncias com anexos, cobranças, verificador documental próprio, login e documentos de cliente, admin autenticado. Nenhum foi simulado ou ativado.
- **Projeto institucional de selos** mantido em documentação separada, sem credenciais exibidas no site.

## Recomendação de próxima sessão
1. Usar ZIP completo no repositório privado em branch revisada; confirmar 87 arquivos, assets binários e estrutura `site/`.
2. Somente após diff e revisão, testar deploy-preview SSO do Netlify; não alterar `main`.
3. Aprovar privacidade, revisar materiais jurídicos e validar fluxos da equipe antes do lançamento público.
