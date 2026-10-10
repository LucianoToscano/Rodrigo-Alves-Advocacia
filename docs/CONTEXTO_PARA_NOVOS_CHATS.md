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


## DESTINO CANÔNICO DO GOOGLE DRIVE APÓS MIGRAÇÃO (10/10/2026)
Pasta principal de propriedade de LucianoToscano: https://drive.google.com/drive/folders/1vcwfP0U-jQR-b2pbXHFgadp6t1wyUOj5
Pasta de documentação: https://drive.google.com/drive/folders/1OyLCeTFBN_q3GM6SfcouyaykI70VoALr
Guia de continuidade já **copiado** como DOCX no novo Drive: https://drive.google.com/file/d/1i1bz0XsZbyCrk1WKbD1Hqn0kd2mpkrRb/view (texto confere referência à V3.7 e PR #7).
Pasta de código: https://drive.google.com/drive/folders/1ypbKe66-xUjO9VjjsY_xxUKJDY7-6IT7
Backup: https://drive.google.com/drive/folders/1bf0nTzEqYOTpjnNQ9w05uq9WYmWB6jAf
GitHub fonte de implementação: https://github.com/LucianoToscano/rodrigo-alves-advocacia (PR #2 → #3 → #6 → #7, todos não mesclados).
**MUDANÇA DE CONEXÃO PENDENTE:** o plugin Drive deste chat devolveu perfil da conta antiga. Após o proprietário desconectá-la, conectar Drive na conta LucianoToscano, conferir get_profile e reler novo guia. Links antigos não são o destino da documentação.
**RISCO DE COMPARTILHAMENTO CRÍTICO:** pasta nova foi observada com `anyone:writer`; solicitar ao proprietário corrigir por UI. Recomendar arquivo principal **Restrito** e uma área pública somente com GUIA COMPARTILHÁVEL read-only, sem backups, Instagram ou clientes. O conector atual não oferece alteração direta de permissão pública da pasta.


## CONFIRMAÇÃO DE CONEXÃO — DRIVE LUCIANOTOSCANO — 10/10/2026
A conexão Google Drive foi testada novamente e retornou o perfil **Luciano Toscano / lucianotoscano@gmail.com**. O novo Arquivo Mestre e a documentação são acessíveis. A permissão geral confirmada é `anyone:commenter` no Arquivo Mestre e nas suas seis subpastas; isso dá **leitura e possibilidade de comentários**, logo a pasta de backups e a pasta do acervo Instagram necessitam restrição de acesso pelo proprietário.
**Documento de entrada atual e revisável:** https://docs.google.com/document/d/1AERhMQ1o0FvcndFFPbEVZGfoAhO0H9rH5VuN8ryhtZg/edit
**Registro de revisões e comentários:** https://docs.google.com/document/d/1aJ1wo0MtSKLI-dvLZhSQdZZ-I0UKfQzCqPVN3mxqJGg/edit
Esses dois documentos nativos foram criados e verificados dentro da nova pasta `02_DOCUMENTACAO_E_PROMPT`. Um comentário de teste foi criado, lido e resolvido. O guia V3.3 copiado em DOCX continua **histórico** e conserva endereços antigos; não usá-lo como destino de futuras gravações. O acesso do GPT de Rodrigo a comentários deve ser testado na conta dele; nenhum segredo ou documento de cliente deve ser registrado nesses arquivos compartilhados.
