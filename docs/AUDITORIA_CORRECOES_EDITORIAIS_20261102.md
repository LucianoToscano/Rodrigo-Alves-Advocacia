# Auditoria e correções editoriais — 02/11/2026

> **Registro de atualização — 02/11/2026 (pós-merge):** as referências abaixo a PR em rascunho, não mesclar e testes não executados descrevem o estado *na data de redação do relatório original*, antes da ação posterior. A PR #13 foi mesclada na `main` em 02/11/2026, com commit `13e37312c158c0d7db00de5231d1ab197a7b02c7`, por autorização do responsável pelo projeto. Essa mesclagem não equivale a aprovação jurídica ou publicação na Netlify. Os testes Node do snapshot passaram (63/63), sem testes funcionais reais de autenticação no ambiente publicado. As primeiras duas inconsistências encontradas após o merge foram propostas para correção em uma PR separada: FAQ estruturada/visível sobre auxílio-acidente e intervalo de anos do acervo Instagram. A auditoria subsequente da mesma PR encontrou ainda 17 divergências em marcações FAQPage (14 perguntas sem FAQ visível em 7 páginas e 3 respostas diferentes do texto exibido), tratadas como limpeza de dados estruturados sem mudança na orientação jurídica ao público. Consultar `STATUS_POS_MERGE_20261102.md`.

**Projeto:** Rodrigo Alves | Advocacia  
**Repositório:** LucianoToscano/rodrigo-alves-advocacia  
**Branch:** `fix/auditoria-conteudo-20261102`  
**Status:** proposta de revisão; não mesclar nem publicar sem aprovação jurídica e testes.

## Escopo aplicado

- **Auxílio-acidente:** categorias previstas pelo INSS, Central 135, compatibilidade com trabalho, documentação e FAQ mais objetiva nas páginas de área e artigo.
- **BPC/LOAS:** 65 anos ou deficiência, renda por pessoa até 1/4 do salário mínimo, Cadastro Único, natureza assistencial; aprofundamento no artigo.
- **Rol da ANS:** Lei 14.454/2022 e cinco critérios cumulativos divulgados pelo STF na ADI 7.265, nas três páginas de saúde; sem afirmar cobertura automática.
- **Negativa de plano:** protocolo, justificativa fundamentada (RN ANS 623/2024), NIP e cuidado em urgência; reforço no artigo de blog.
- **Perícia e incapacidade:** FAQ objetiva; termos atuais de benefícios, incluindo nomenclaturas populares antigas para localização.
- **Textos internos:** removidas referências a “demonstração/fase privada”, instruções editoriais dos artigos e aviso de pré-aprovação nas duas páginas do blog.
- **Segurança:** distinção entre os dois perfis do Instagram, verificação independente antes de Pix/pagamento e explicação de que cadastro profissional não autentica remetente.
- **Serviços:** renomeado filtro “área do cliente” para canais de atendimento; rótulos de 34 links tornados específicos ao serviço; mais 5 na página do INSS. Procuração eletrônica do Meu INSS ajustada à orientação de junho de 2026.
- **Ferramentas:** acrescentado link para o guia de negativa de plano, antes pouco visível; textos de privacidade e de checklist simplificados.
- **Acervo:** aviso de data e possível desatualização; orientação de atualização sobre o Rol da ANS.
- **Acessibilidade:** linguagem de capacidade comprovada transformada em compromisso a ser testado.
- **Indexação:** `obrigado.html` já continha `noindex,nofollow,noarchive`; preservado. Não foi removida a proteção ou regra de indexação existente.

## Fontes primárias conferidas no dia da revisão

1. Auxílio-acidente (gov.br): https://www.gov.br/pt-br/servicos/solicitar-auxilio-acidente
2. INSS (auxílio-acidente): https://www.gov.br/inss/pt-br/direitos-e-deveres/beneficios-por-incapacidade/auxilio-acidente
3. MDS (BPC): https://www.gov.br/mds/pt-br/acoes-e-programas/SUAS/beneficios-assistenciais/beneficio-assistencial-ao-idoso-e-a-pessoa-com-deficiencia-bpc
4. MDS (renda per capita): https://www.gov.br/mds/pt-br/acoes-e-programas/suas/beneficios-assistenciais/como-calcular-a-renda-per-capita-familiar
5. STF, notícia da ADI 7.265 de 18/09/2025: https://noticias.stf.jus.br/postsnoticias/stf-fixa-criterios-para-que-planos-de-saude-cubram-tratamentos-fora-da-lista-da-ans/
6. RN ANS 623/2024: https://bvsms.saude.gov.br/bvs/saudelegis/ans/2024/res0623_19_12_2024.html
7. ANS, procedimento NIP: https://www.gov.br/ans/pt-br/assuntos/consumidor/notificacao-de-intermediacao-preliminar-nip
8. INSS, procuração eletrônica (atualização 12/06/2026): https://www.gov.br/inss/pt-br/assuntos/saiba-o-passo-a-passo-para-acesso-ao-meu-inss-por-meio-de-procuracao-eletronica
9. OAB, Provimento 205/2021: https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021

## Critérios de revisão jurídica obrigatória

- Revisar a interpretação da ADI 7.265 no acórdão, inclusive alcance da exigência de registro na Anvisa em cada tipo de tratamento.
- Revisar textos de benefícios, hipóteses de exclusão, renda do BPC e atualização do CadÚnico segundo normas vigentes.
- Confirmar política real de recebimento de pagamentos; só então inserir regra institucional afirmativa na página de segurança.
- Confirmar titularidade/inscrição OAB/RN 9.792 no CNA e os dois perfis informados.
- Validar integralmente Política de Privacidade (LGPD): bases legais, cookies, fornecedores externos, retenção, direitos e implementação técnica.
- Confirmar prática real de coleta de dados, comportamento do formulário de contato e controles de acesso.
- Revisar publicidade ética à luz do Provimento OAB 205/2021 e demais regras vigentes, especialmente chamadas da home e CTAs.
- Conferir um a um os títulos, datas e resumos do acervo do Instagram antes de qualquer republicação (os cards atuais redirecionam para originais).

## Verificações técnicas efetuadas e limites

Verificada a existência de conteúdo HTML no repositório; conferidos programaticamente, nos arquivos críticos modificados, os pares de tags `<main>` / `</main>`, `<article>` / `</article>`, o fechamento do HTML, remoção dos textos internos específicos e da expressão genérica “Abrir recurso” do catálogo principal.

**Não executados:** testes automatizados do projeto, renderização visual, teste em navegador real, links clicados ponta a ponta, leitores de tela, auditoria da LGPD em runtime, teste de deploy Netlify e testes de fluxo de autenticação. Esses testes são obrigatórios antes do merge.

## Pendências do backlog, não tratadas como concluídas

- Revisão jurídica datada das demais páginas fora do escopo.
- Duplicações de FAQ, títulos HTML, metadescriptions, `conteudos.json` e navegação da biblioteca completa.
- Orientações ampliadas para cidadãos (exigência INSS, recursos, CRAS, SUS, apoio social, glossário).
- Avaliação integral de cookies, transmissão de dados, bibliotecas externas e acessibilidade WCAG.
- Conferência de prazos e links oficiais em toda a área de serviços e redes sociais.
- Política de pagamentos aprovada pelo advogado.

**Decisão de liberação:** manter a PR em rascunho, promover testes e obter aprovação do advogado antes de mesclar em `main` ou publicar.
