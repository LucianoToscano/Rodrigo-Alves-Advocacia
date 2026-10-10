# Ajuste de validação de origem do portal privado — 10/10/2026

## Escopo
Correção incremental na branch de revisão `fix/portal-origin-preview-20261010`, baseada na V3.7. Nenhuma alteração em `main`, deploy, credenciais ou Netlify SSO.

## Problema analisado
O POST de login e o de logout rejeitavam toda requisição em que o cabeçalho `Origin` não fosse exatamente igual a `new URL(request.url).origin`. Em navegadores que omitem `Origin`, inclusive alguns ambientes de prévia/restrições de privacidade, um envio legítimo podia resultar em HTTP 403.

## Política implementada
O novo helper do servidor `netlify/lib/portal-origin.ts` foi reutilizado nas duas Edge Functions. Uma requisição de formulário é admitida apenas quando existe pelo menos um sinal positivo, não contraditório, de mesma origem:

- `Origin` exato; ou
- na ausência de `Origin`, `Sec-Fetch-Site: same-origin`; ou
- na ausência de `Origin`, `Referer` com a mesma origem.

Todas as evidências presentes devem ser coerentes. `Origin: null`, origem externa, `Referer` externo ou malformado e `Sec-Fetch-Site: cross-site`, `same-site` ou `none` são rejeitados. Sem qualquer evidência, a decisão é negar (fail-closed). O helper não considera `X-Forwarded-Host` nem aceita automaticamente subdomínios do Netlify.

**Limitação:** isso não garante que um navegador que omita todos os três cabeçalhos funcionará. Também não encobre eventual reescrita de host/origem no lado da Netlify. Nesse caso, verificar o ambiente real antes de alterar a política.

## Testes e evidências
- Regra isolada executada com Node 22 (`--experimental-strip-types`): 16/16 casos de prova de origem e conflitos passaram.
- Dez casos adicionais foram incorporados em `tests/test-portal.mjs` para login/logout (aceitações legítimas, rejeições, ausência de cookie em requisições negadas e bloqueio de cabeçalhos contraditórios).
- **Pendente:** executar o conjunto completo de testes do repositório com `node --experimental-strip-types --test tests/*.mjs` após checkout desta branch. Não afirmar aprovação da integração nem da Netlify sem essa execução.
- **Pendente:** confirmar compilação das Edge Functions e comportamento de login/logout no deploy de branch real usando desktop, Chrome Android, Safari iOS e navegador incorporado.

## Gate obrigatório antes de publicar
1. Preservar SSO no projeto oficial `rodrigo-alves-advocacia` e em seus deploys enquanto se homologa.
2. Manter segredos somente no painel Netlify, escopo Functions. Não gravar senha nem chave no GitHub, logs, respostas ou no chat.
3. Testar no mesmo domínio de prévia: POST válido sem `Origin`, com `Sec-Fetch-Site: same-origin`; POST válido com `Origin`; rejeição de origens externas, nulas ou contraditórias; expiração, cookie `__Host-`, logout e redirecionamento local.
4. Examinar limitação de tentativas do provedor, a abrangência do guard `/*`, proteção de imagens/JS/JSON, URLs antigas de deploy e retorno seguro em erros.
5. Se falhar com `Origin` distinto apesar de navegador legítimo, analisar os cabeçalhos de solicitação **sem gravar senhas ou cookies** e revisar causa real; não desativar verificação de origem sem substituição segura.
6. Não mesclar PRs nem remover SSO ou alterar produção sem aprovação explícita e QA de segurança.

O código não confirma correção em produção; esta é uma alteração pronta para revisão e testes integrados.
