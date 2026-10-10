# Status da sincronização — 2026-10-10

Esta branch de revisão registra a primeira etapa da documentação V3.1, sem alterar a produção.

## Verificado
- O repositório privado tinha apenas o README inicial na branch main; o site V6.4 ainda não constava em arquivos do repositório.
- O projeto Netlify existe, com acesso SSO da equipe, deploy ready e Netlify Forms desabilitado.
- Há um pacote local com a V6.4 e 37 páginas, mais documentação e aprimoramentos de UX (V3.1).

## NÃO concluído
- A transferência integral do diretório site/ e dos demais arquivos de docs/ para esta branch.
- A integração/merge na main e qualquer deploy novo no Netlify.
- A ativação do formulário; testes reais de HTTPS, área de transferência, Lighthouse e leitor de tela.

## Para completar
1. Transferir o pacote integral *Rodrigo_Alves_Advocacia_V3_1_Consolidado.zip* pela interface GitHub ou fluxo Git autenticado.
2. Preservar a estrutura raiz site/, docs/, institucional-selos/ e netlify.toml (publish = "site").
3. Conferir diffs, arquivos binários, rotas e bloqueio de indexação.
4. Executar preview restrito, QA e somente depois considerar merge/publicação.

**Não fazer merge deste PR enquanto o pacote integral não estiver sincronizado.**
