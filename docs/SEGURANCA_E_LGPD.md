# Segurança e LGPD — estado e controles

## Já presente na base estática
- Headers em `site/_headers`: HSTS, nosniff, frame deny, referrer policy, permissions policy, CSP básica (upgrade-insecure-requests). Validar eficácia no deploy real.
- Não há recebimento ativo de anexos; contato inicial bloqueado até homologação Netlify Forms.
- Comparador de canais roda no browser; não informa o titular real; dados de canal visíveis são públicos.
- Links oficiais de denúncias, ConfirmADV, CNA e VALIDAR; não simular APIs.

## Antes de produção P0
- Confirmar política de privacidade com tratamento efetivo, controlador, canal de direitos, retenção e incidentes.
- HTTPS/TLS, MFA GitHub/Netlify, controle de acesso, backup e recuperação, auditoria CSP e controle de scripts.
- Habilitar formulários somente com teste de dados sintéticos e proteção antispam; escolher destinatário e notificação.
- Verificar consentimento e exclusão de cookies opcionais, não só ocultar scripts.

## Backend futuro obrigatório para funções sensíveis
Formulário antifraude com anexos, administração de contatos, consulta de cobranças, documentos e Área do Cliente requerem servidor autenticado, autorização por recurso, MFA, antimalware, quotas, retenção, logs protegidos, criptografia, recuperação, DPIA/LGPD quando cabível, testes penetração e aceitação formal. Não armazenar em `site/` ou Netlify Forms sem desenho apropriado.

## Plano de incidentes (pendente de responsáveis)
Preservar evidências privadas, suspender números comprometidos por canal independente, orientar clientes, acionar autoridades e banco em caso de Pix, avaliar comunicação à ANPD conforme risco. Responsável pelo incidente e substituto: **A DESIGNAR**.

## Gate para SEC-003/004/005/006/007 (V3.2)
A coleta de denúncias com anexos, autenticação de cobranças/documentos, área de clientes e painel de administração **não estão operacionais**. Exigir análise de risco e LGPD, autenticação MFA e autorização por objeto, política de retenção, escaneamento de anexos, proteção de dados sensíveis, monitoração de incidentes e homologação com dados fictícios antes da implantação.
