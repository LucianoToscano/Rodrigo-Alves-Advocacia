# Melhorias V3.6 — UX, Biblioteca e Central de Segurança

**Estado**: implementação estática em branch de revisão dependente de V3.5. **Não é deploy de produção e não foi homologada em Netlify**. O site institucional segue protegido por SSO externo.

## Mudanças
- Criada `site/orientacao/index.html`, novo guia de navegação por 7 situações, sem envio de dados, CPF, documentos ou armazenamento local. Apresenta somente roteiros educativos e links preexistentes.
- A página inicial oferece atalho destacado e busca sobre as 18 perguntas frequentes. O JS da busca altera apenas visibilidade das respostas locais; não utiliza APIs de rede.
- `blog/index.html` agora contém filtro de tipo de conteúdo (Guia, Artigo, Ferramenta) além da pesquisa existente por assunto e área. O índice `data/conteudos.json` não foi reescrito.
- `seguranca.html` oferece quatro roteiros objetivos para pedido de Pix, transferência já realizada, links suspeitos e conta comprometida, preservando alerta de que lista de canais não autentica autoria.
- `ferramentas/index.html` ganhou atalho de navegação. Links dos menus principais em páginas HTML apontam para Comece aqui, sem acrescentar item extra à largura do cabeçalho. Links originais do conteúdo permanecem acessíveis no corpo.
- Nova folha CSS isolada `assets/css/orientacao-v36.css`, com suporte a telas móveis, foco, redução de movimento e impressão; JS `orientacao-v36.js` e `faq-v36.js` com funcionamento progressivo.

## Limites e QA
- Sem novos serviços jurídicos automatizados, consultas de dados pessoais, inscrições falsas, login Gov.br, pagamentos ou portal real de clientes.
- Verificar no navegador autorizado teclado/leitor de tela, layout mobile, contraste real, clique em links e menus; testes Node e inspeção estática não substituem essa validação.
- Preservadas as 37 páginas anteriores, três retratos e logo oficiais, arquivos Netlify/Edge de V3.5, variáveis não divulgadas e a branch `main` sem alterações.
- O acervo Instagram com 12 posts em revisão permanece sem publicar material adicional.
- Fontes públicas de referência devem ser revisadas pelo escritório antes do lançamento.
- Checklist/roadmap: atualizar os itens LEG, DEP e QA. Não retirar SSO e não fazer merge PR #2/#3/#4 até homologação dos predecessores.

## Evidências dos testes desta revisão
- Testes Node: 33/33 (25 regressões do portal e V3.5, mais 8 novos testes V3.6).
- Auditoria estrutural com BeautifulSoup: 38 HTML, 1.829 referências locais href/src/poster, 85 elementos de imagem, 12 scripts JS válidos; **nenhuma referência local ausente**.
- Auditoria específica das âncoras: 1.251 links locais com seus fragmentos, **zero alvos ausentes**.
- Hashes SHA-256 das fotos hero, mobile, perfil e da logomarca original idênticos à V3.3; não houve alterações binárias na pasta `site/assets/img/`.
- Auditoria de navegador real, layout/teclado/leitor de tela e Netlify continua pendente; o uso de `hidden` nos seletores é progressivo, preservando todos os conteúdos quando JS não está disponível.

## Próximas ações de lançamento privado
1. Revisar e mesclar PR #2 (recuperação V3.3), PR #3 (portal V3.5) e, por último, PR V3.6 somente depois de revisão humana e QA independente.
2. Configurar os segredos de sessão apenas na Netlify oficial, escopo Functions; implantar prévia protegida com SSO.
3. Verificar visualmente, por rede e em dispositivos móveis, incluindo links da orientação, filtros, FAQ e antifraude; revogar SSO somente após prova de bloqueio de todos os paths e previews antigos.
4. Revisão jurídica/OAB e conteúdo selecionado do Instagram; nenhum conteúdo adicional é publicado automaticamente.
5. Não ativar indexação/SEO nem formulários privados antes da aprovação específica.
