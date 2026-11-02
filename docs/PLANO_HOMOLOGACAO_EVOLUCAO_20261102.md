# Plano de homologação e evolução — 02/11/2026

**Projeto:** Rodrigo Alves | Advocacia  
**Base verificada:** `main` — `13e37312c158c0d7db00de5231d1ab197a7b02c7`.  
**Netlify verificada:** projeto `rodrigo-alves-advocacia`, deploy publicado `6acaaed846e0a138a2c6a761` (versão anterior, de outubro); **a produção não pode ser declarada sincronizada com o GitHub** apenas por um merge.  
**Estratégia:** preservar arquitetura e identidade, preparar PR de homologação, não remover senha/SSO, `noindex` ou publicar sem aprovação.

## P0 — bloqueadores antes da abertura pública

| ID | Estado verificado e impacto | Ação e critério de aceitação | Aprovação |
|---|---|---|---|
| P0-01 — sincronização | `main` não corresponde ao deploy atualmente publicado informado pela Netlify | Obter build do commit exato em preview; comparar `commit_ref` do deploy, logs, cabeçalhos, imagens, rotas e identidade; liberar somente após testes e plano de reversão | DevOps + responsável |
| P0-02 — sessão e acesso | Há Edge Functions de autenticação no repositório, mas sua presença em código não prova funcionamento em preview ou produção | Testar sem login HTML/CSS/JS/JSON/WebP e PDFs, redirecionamentos, logout, expiracão, cookies HttpOnly/Secure/SameSite, rate limit, CSRF, autenticação em guias e links imutáveis antigos; nunca imprimir segredos | Engenharia/segurança |
| P0-03 — aprovação jurídica | Conteúdo da PR #13 já foi mesclado na main e ainda consta como pendente de assinatura jurídica | Revisar textos e fontes do auxílio-acidente, BPC, ADI 7.265, negativas e INSS; registrar aprovação datada por versão/commit | Dr. Rodrigo |
| P0-04 — LGPD | Página de privacidade existe; implementação real de fornecedores, retenção, cookies e logs ainda precisa de conferência | Mapear dados que trafegam e onde ficam, bases legais, terceiros, política de retenção e solicitação do titular; reconciliar com texto e código | Jurídico + engenharia |
| P0-05 — canais de contato | O site **já usa WhatsApp/e-mail**, e avisa para não enviar dados médicos, CPF ou processos na primeira mensagem; Netlify Forms não é necessário ao funcionamento atual | Preservar canal atual; testar que campos não enviam dados ao servidor, verificando requisições reais, e confirmar identidade e política de pagamentos | Escritório + QA |
| P0-06 — editorial | Contradição na FAQ estruturada do auxílio-acidente; acervo atribuía tudo a 2025, embora contenha posts de 2026; data na política não uniforme | Corrigir HTML/JSON-LD, descrição do acervo e data editorial, com testes de regressão; não confundir revisão editorial com aprovação jurídica | Editorial + advogado |

## Homologação de segurança (checklist de evidências)

- [ ] Deploy de prévia associado ao commit exato, com estado `ready` e logs sem erros.
- [ ] URL de teste protegida por senha/SSO. Ninguém acessa HTML, CSS, JS, JSON ou fotos sem sessão válida, salvo exceções documentadas do portal.
- [ ] Tentativas inválidas de login sofrem limitação de taxa; cookies de sessão são protegidos e não aparecem em logs.
- [ ] Logout, expiração de sessão, retorno ao destino e navegação após login funcionam em desktop e celular.
- [ ] Testes das URLs de deploy permanente antigas confirmam ausência de vazamento de conteúdo.
- [ ] `robots.txt`, `noindex`, cabeçalhos de cache e CSP revisados; não autorizar indexação.
- [ ] Formulários, links WhatsApp e e-mail testados sem dados reais de clientes.
- [ ] Testes automatizados + navegação real executados e anexados à liberação.
- [ ] Dr. Rodrigo valida conteúdo jurídico, fotos, dados de contato e política de pagamento.
- [ ] Plano de retorno à versão anterior documentado e testado antes da mudança do domínio principal.

## P1 — aprimoramentos úteis sem reconstrução

**P1-01 — Central de Apoio ao Cidadão:** propor páginas por necessidade: assistência alimentar/CRAS/Cadastro Único, urgência de saúde, canais do SUS/ANS, Defensoria e prevenção de golpes. Todos os links devem apontar diretamente para fontes oficiais, datadas e revisadas. Não alegar convênios nem exigir dados pessoais.

**P1-02 — Glossário e busca por situação:** reutilizar `site/orientacao/index.html` e a biblioteca atual; mapear termos populares (auxílio-doença, aposentadoria por invalidez, negativa de exame) a textos tecnicamente corretos, com aprovação jurídica antes de expor ao público.

**P1-03 — Checklists imprimíveis:** partir dos sete roteiros existentes; revisar quebra de página, margens, contraste em papel e botão de impressão. Não guardar dados sensíveis, não emitir diagnóstico ou elegibilidade.

**P1-04 — Acessibilidade real:** testar teclado, foco, NVDA, VoiceOver, zoom 200–400%, contraste e preferências de movimento; usar WCAG 2.2 AA como meta, não como certificação. Conferir ativação voluntária do VLibras e privacidade.

**P1-05 — Segurança visível:** a home **já contém** chamada para verificação de contatos e golpes. Medir legibilidade e comportamento mobile antes de acrescentar outro aviso. Evitar sobreposição de CTAs.

## P2 — preparar, não ativar prematuramente

- SEO: metadados, URLs canônicas, sitemap e Open Graph com imagens oficiais; só remover `noindex` após publicação autorizada e homologação.
- Performance: Lighthouse no ambiente permitido, WebP, CSS efetivamente usado, comportamento mobile e Core Web Vitals.
- Acervo: revisar cada publicação, data, direito de uso, vínculo e desatualização antes de republicar.
- Ferramentas adicionais: modelos e cálculo didático de renda do BPC apenas após normas versionadas e conferência jurídica, sem promessa de elegibilidade.

## Fora do escopo atual

Área autenticada do cliente; upload de documentos ou denúncias; integração fictícia com Gov.br, INSS, SUS, ANS ou PJe; cálculo de valor garantido de benefício; chatbot de consulta jurídica. A proposta de selos emitidos por conselhos permanece **documentação institucional separada**.

## Fontes para a próxima revisão de conteúdo

- ANS — Notificação de Intermediação Preliminar (NIP), consultada em 02/11/2026: https://www.gov.br/ans/pt-br/assuntos/consumidor/notificacao-de-intermediacao-preliminar-nip
- Ministério da Saúde — SAMU 192: https://www.gov.br/saude/pt-br/composicao/saes/samu-192
- Ministério da Saúde — UPA 24h: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/u/upa-24h
- INSS — Meu INSS: https://meu.inss.gov.br/

**Status deste documento:** proposta técnica, sem aprovação jurídica. Esta PR não publica a produção e não altera regras de autenticação.
