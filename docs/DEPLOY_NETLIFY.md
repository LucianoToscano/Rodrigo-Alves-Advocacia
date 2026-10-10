# GitHub e Netlify — procedimento seguro

**GitHub** `LucianoToscano/rodrigo-alves-advocacia` privado, `main`. Na checagem 10/10/2026 o repo possuía README inicial, não `index.html` nem `docs/`. Nunca sobrescrever `main` sem comparar.

**Netlify** projeto `rodrigo-alves-advocacia`, ID `8771458f-6330-4e91-b891-2d25b0e32982`, URL `rodrigo-alves-advocacia.netlify.app`; SSO da equipe exigido; deploy atual **ready** não comprova código V6.4; Forms **não ativado**.

## Novo formato proposto para o GitHub
```
README.md
netlify.toml              # publish = site
site/                     # SOMENTE conteúdo público
  index.html
  seguranca.html
  assets/
  ...
docs/                     # documentação PRIVADA no repositório, FORA do publish
institucional-selos/      # PROPOSTA SEPARADA, fora do publish
```

## Passos mínimos
1. Conferir diferença repo main vs fonte V6.4 e registrar cópia de segurança.
2. Criar branch `chore/consolidacao-v31`, subir arquivos da **raiz** sem alterar main.
3. Verificar Netlify deploy preview privado/SSO; confirmar `publish = site`, sem comando build.
4. Testar rotas, imagens, fonts, menu, segurança, link WhatsApp, mobile, formulários e headers.
5. No Netlify Forms: configurar detecção, habilitar processamento, testar recebimento com dados fictícios, configurar destinatários e revogar acesso não necessário.
6. Registrar URL, deploy ID, commit SHA, relatório de testes; só então aprovar merge e produção.
7. Manter `robots.txt` bloqueando indexação de preview; ativar sitemap/canonical apenas com domínio autorizado.

Não modificar projeto Netlify `superb-pothos-b96a04` sem comprovação de titularidade/finalidade.

## Pull Request parcial criado em 10/10/2026
- https://github.com/LucianoToscano/rodrigo-alves-advocacia/pull/1 (rascunho, não mesclar).
- Incluídos no PR: `docs/RODRIGO_ALVES_ADVOCACIA_MASTER.md` e `docs/SYNC_STATUS.md`.
- Os 16 documentos completos e todo o código V3.1 **estão no ZIP**, mas ainda não foram transferidos ao GitHub.
- `main` e deploy Netlify não alterados nesta execução.


## Estado reconfirmado em 10/10/2026
- Demo site fcc5fbbc-2043-463c-a57f-4288c352afeb, deploy manual 6aca2f8346e0a16fb3c6a76d, ready, 37 páginas, SSO exigido, Forms desabilitado.
- Site oficial 8771458f-6330-4e91-b891-2d25b0e32982, deploy 6aca07e0e41b1e712c726fc0, SSO exigido, Forms desabilitado.
- ZIP V3.3 não comprovado no deploy de testes. Nenhum Netlify foi alterado nesta continuidade. Branch GitHub recuperacao-v33 isolada sem merge.


## Complemento de segurança — transição para senha institucional (10/10/2026)

A antiga recomendação genérica de aprovar um deploy **não autoriza** remoção do SSO. A produção publicada ainda está no commit inicial sem Edge Functions, enquanto a solução de login por senha está em PR #8, encadeado aos PRs #2, #3, #6 e #7. Versões históricas têm permalinks imutáveis, mesmo após um novo deploy. **Não deixar exposta uma versão antiga sem guard.**

**Plano operacional atualizado:** `docs/PLANO_LIBERACAO_SOMENTE_SENHA_20261010.md`. A estratégia prioritária é guardar SSO em previews e liberar a produção somente depois de publicar o guard e tratar os permalinks legados. Verificar suporte da conta antes da mudança. O logout no navegador incorporado permanece pendente de validação.

**Bloqueio vigente:** sem mudar SSO, sem publicar senhas e sem novo site. Todo rollback de acesso deve restaurar login de equipe a TODOS os deploys até resolver eventual exposição.
