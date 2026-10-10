# Arquitetura técnica — estado efetivo

| Camada | Tecnologia |
|---|---|
| front-end | HTML5, CSS3, JavaScript ES6 (sem React ou Next) |
| estrutura | `site/index.html`, `site/areas`, `site/blog`, `site/servicos`, `site/ferramentas`, `site/acervo`, `site/seguranca.html` |
| estáticos | `site/assets/css/`, `site/assets/js/`, `site/assets/img/`, `site/data/` |
| deploy | Netlify estático; `netlify.toml` raiz com `publish = "site"` e redirects |
| backend | **Inexistente no pacote auditado** |
| armazenamento | Nenhum banco; cookies/consentimento de navegador; formulários externos condicionais |
| autenticação | **Não há área autenticada própria** |

**Execução local:** `python -m http.server 8000 -d site` (não usar para produção). **Build:** nenhum; publicação é cópia do diretório `site`. **Segredos:** nenhum no cliente; scripts de marketing desativados sem IDs e consentimento.

## Rotas
`/seguranca` é rewrite a `/seguranca.html` pelo Netlify; páginas restantes são HTML estáticos. Ao alterar a raiz, **não mover `docs/` para `site/`**.

## Futuro backend (não implantado)
API privada com autenticação MFA/SSO apropriada, RBAC/ABAC por recurso, registro de auditoria, retenção, criptografia, armazenamento privado e testes IDOR. Separar domínios de clientes/documentos de ativos públicos e prever revisão jurídica e segurança.

**V3.2:** não há dependência `longtext.js/css`; removida por correção de escopo, sem afetar as páginas jurídicas.
