# Migração documental — Rodrigo Alves | Advocacia — 10/10/2026

## NOVO DESTINO PRINCIPAL
https://drive.google.com/drive/folders/1vcwfP0U-jQR-b2pbXHFgadp6t1wyUOj5
**Dono conferido pela API Google Drive:** LucianoToscano.

| Área | Pasta atual no LucianoToscano | Entradas diretas verificadas |
| --- | --- | ---: |
| 01 — Site e código | https://drive.google.com/drive/folders/1ypbKe66-xUjO9VjjsY_xxUKJDY7-6IT7 | 14 |
| 02 — Documentação e prompt | https://drive.google.com/drive/folders/1OyLCeTFBN_q3GM6SfcouyaykI70VoALr | 39 |
| 03 — Acervo Instagram privado | https://drive.google.com/drive/folders/1FguWD0IwKK39nUyA_lB-PQqJQDNnTpDE | 3 |
| 04 — Backups / histórico | https://drive.google.com/drive/folders/1bf0nTzEqYOTpjnNQ9w05uq9WYmWB6jAf | 3 |
| 05 — Projeto institucional selos | https://drive.google.com/drive/folders/11IjPoJ-Sp56W_a1snSkycTtv5kDcOxNz | 2 |
| 06 — Imagens e logos extras | https://drive.google.com/drive/folders/1SNPGyp0i1hBABnLdcLHpMK9xULkD5P1A | 49 |

**Guia existente no destino atual:** https://drive.google.com/file/d/1i1bz0XsZbyCrk1WKbD1Hqn0kd2mpkrRb/view (arquivo .docx copiado, V3.7 confirmada no texto).
**Base ZIP final V3.3 localizada:** https://drive.google.com/file/d/1ecAr2Bdxz62CBCTjutzk2nilA2o9EZQg/view (tamanho 1.190.915 bytes, necessário conferir SHA256 e compatibilidade).
**Arquivos de V3.7 em código:** os arquivos de transferência por partes e o ZIP V3.3 copiado estão na área 01, mas o pacote ZIP completo V3.7 não foi encontrado na lista da nova pasta; fonte íntegra de alterações mais recente é a branch GitHub `feat/v37-checklists-acessibilidade` / PR #7, não afirmar ZIP final migrado sem evidência.

## ALERTA DE SEGURANÇA IMEDIATO
Foi observado na pasta **raiz** do novo Arquivo Mestre permissão Google Drive `anyone:writer` (qualquer pessoa com link pode editar). **Não manter esse acesso** para um acervo com ZIPs, mídias privadas e documentação jurídica. A captura também mostra Editor para público. Ajustar na conta LucianoToscano:
1. Drive → raiz do Arquivo Mestre → Compartilhar → Acesso geral → **Restrito** (recomendado) → Concluído.
2. Se um GPT externo exigir link sem conector, criar **Pasta de guia público**, distinta do arquivo mestre, **sem** mídia/acervo/backup/segredo, e escolher **Qualquer pessoa com link → Leitor**, não Editor.
3. Não presumir que qualquer GPT navega links Drive públicos; conectar Google Drive diretamente com permissão apropriada quando possível, ou disponibilizar arquivo de texto seguro ao GPT.
4. Rever permissões de subpastas e arquivos individualmente, inclusive se foram herdadas, e impedir edições não autorizadas.

## CONEXÃO DO CHATGPT
No momento desta conferência a chamada `get_profile` do conector Google Drive identificou a **conta antiga Suetonio Lira**, mesmo podendo ler a pasta nova. O proprietário deve conectar a conta Google Drive **LucianoToscano** no ChatGPT (Configurações → Plugins / aplicativo Google Drive → Gerenciar conexão). A desconexão da conta antiga sem reconexão poderá impedir alterações nos documentos de origem e cópias. **O modelo não consegue trocar credenciais OAuth por conta própria.**

## FONTES DE VERDADE E CONTINUIDADE
GitHub: https://github.com/LucianoToscano/rodrigo-alves-advocacia ; ordem de PRs: #2 V3.3 → #3 V3.5 → #6 V3.6 → #7 V3.7, abertos em revisão, não mesclados. Site Netlify oficial permanece sob SSO; não tocar até autenticação homologada. Histórico em Drive antigo é somente referência transitória e nunca destino para futuros uploads. Documentos novos devem apontar para o Drive LucianoToscano.

## ITENS A VALIDAR
- Proprietário corrigiu compartilhamento? Verificar `anyone:reader` em somente guia público e `restricted` no acervo interno.
- Reconexão do Drive testada? Confirmar `get_profile` na LucianoToscano.
- Conteúdo e hashes de arquivos transferidos, inclusive ZIPs grandes, confirmados?
- Guia de continuidade em DOCX novo atualizado com novas URLs? Atualizar em conta correta após reconectar. Não editar DOCX em Drive da conta antiga.
- GPT externo consegue ler especificamente o guia permitido, sem conseguir editar ou ver backups?

**Estado:** novo acervo presente e inventariado; **migração de acesso/autorização ainda não concluída**. Não usar permissões públicas de editor como solução para acesso de GPT.
