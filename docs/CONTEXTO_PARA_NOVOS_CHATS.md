# CONTEXTO PARA NOVOS CHATS / HANDOFF

**LEITURA OBRIGATÓRIA ANTES DE CODIFICAR**
1. `docs/RODRIGO_ALVES_ADVOCACIA_MASTER.md`;
2. `docs/REGISTRO_MESTRE_DE_DEMANDAS.md`;
3. `docs/CHECKLIST_GERAL_DO_PROJETO.md`;
4. `docs/DECISOES_DO_PROJETO.md`;
5. `docs/BUGS_E_CORRECOES.md` e `docs/ROADMAP.md`.

**Estado:** site V6.4 em HTML/CSS/JS puro, 37 páginas locais, central antifraude. Consolidação V3.2 corrige a interpretação de UX de prompts e preserva documentação; **não equivale a deploy**. GitHub privado possui README inicial na última consulta; Netlify está com SSO e Forms desativado.

**Regras:** não reconstruir; nunca inventar API; nunca publicar `docs/` nem documentos pessoais; não remover funcionalidades; comparar branch antes do commit; não afirmar implementado por aprovação; validar no navegador e no Netlify, registrar data/versão/evidência; nunca enviar credenciais ao chat.

**Próxima sessão:** abrir GitHub/Netlify, confirmar staging, sincronizar ZIP da pasta raiz em branch revisada, executar QA em preview, atualizar IDs e status. Não habilitar formulário sem teste. Não ativar portal/cobranças sem backend seguro.

**Retificação obrigatória V3.2:** a funcionalidade de UX para prompts longos foi interpretada incorretamente como demanda do site na V3.1. Foi removida. Não reinseri-la. IDs UX-001..UX-004 anulados e não reutilizáveis (DOC-006). SEC-003/004/005/006/007 são estudos, não permissões de produção.

**Nota complementar:** `TASK-003` era uma demanda derivada do equívoco sobre controles de prompts; retirada do backlog ativo e ID reservado no histórico. A acessibilidade geral do website permanece coberta por auditorias de UX/QA, independente dessa interface.


## Estado de continuidade após importação GitHub V3.3
Pacote final Drive V3.3 com 72 arquivos/37 páginas. `site/` completo no GitHub em `chore/recuperacao-v33-20261010`, árvore SHA `9a26ef73caa5ae0ab2e99cea411fb47ba4a2c9e2` conferida local e remotamente. Docs e `institucional-selos/` também recuperados. `main` e PR #1 anteriores preservados. Netlify demo SSO, Forms desabilitado, deploy anterior `6aca2f8346e0a16fb3c6a76d`; V3.3 em hospedagem não homologada. Browser Chromium local bloqueado, portanto QA mobile e cliques requer Work/navegador autorizado. Não trocar fotos nem abrir site público sem aprovação.
