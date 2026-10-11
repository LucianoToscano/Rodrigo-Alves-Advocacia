# Rede de Apoio ao Cidadão e Solidariedade — Implementação V3.8

**Projeto:** Rodrigo Alves | Advocacia  
**Data:** 10/10/2026  
**Branch:** `feat/central-apoio-solidariedade-20261010`  
**Status:** implementação proposta em revisão; **não confundir com publicação, homologação, certificação ou parceria institucional**.

## 1. Propósito e governança

Módulo educativo, gratuito e não comercial `site/apoio/index.html`, dedicado a duas jornadas: **Preciso de ajuda** e **Quero ajudar**. O objetivo é auxiliar pessoas em situação de vulnerabilidade na identificação de serviços públicos e orientar quem deseja contribuir com organizações legítimas. O conteúdo não constitui promessa de concessão de benefício nem substitui atendimento social, jurídico ou médico.

**Não captar pacientes ou doadores por meio da solidariedade.** O módulo deve permanecer separado da oferta de serviços advocatícios, sem patrocínios fictícios, depoimentos sensíveis, cobrança, transferência financeira para o escritório ou condicionamento à contratação. Revisão obrigatória de ética/OAB e conteúdo antes de liberar publicamente.

## 2. Funcionalidades presentes no código

- Oito roteiros de situação: alimentação, INSS sem renda, medicamentos/SUS, sustento familiar, situação de rua, direitos e documentação, violência e apoio emocional.
- Botões para seleção com feedback por leitores de tela, acesso sem JavaScript a todos os roteiros e impressão/PDF pelo recurso nativo do navegador.
- Telefones: 190, 192, 180, 100, 188 e referências 121, 135, 136.
- Links diretos ao CRAS, MOPS (busca de equipamentos socioassistenciais por município), Disque Social, Meu INSS, Farmácia Popular, Ouvidoria do SUS, Centro POP, DPU, CVV.
- Diretório editorial inicial com **oito entidades** e filtros locais de nome/região/causa.
- Ajuda não financeira: Hemoce, REDOME e possibilidade de voluntariado conforme os sites oficiais.
- Nenhum formulário, campo sensível, login Gov.br, integração financeira, backend, cookies próprios, rastreamento ou coleta de dados na nova experiência.
- Teaser na página inicial e acesso contextual em `orientacao/index.html`.
- `noindex` preservado nesta fase privada. Nenhuma alteração de `netlify.toml`, Edge Functions, SSO ou senhas.

Arquivos: `site/apoio/index.html`, `site/assets/css/apoio.css`, `site/assets/js/apoio.js`, ajustes em `site/index.html` e `site/orientacao/index.html`, teste `tests/test-apoio.mjs` e contagens de inventário ajustadas nos testes anteriores.

## 3. Diretório: instituições e links iniciais

| Instituição | Categoria | Endereço institucional |
|---|---|---|
| GRAACC | câncer infantil | https://doe.graacc.org.br/ |
| Associação de Amigos do Autista (AMA) | autismo | https://ama.org.br/doacoes/ |
| Hospital Pequeno Príncipe | saúde infantil | https://pequenoprincipe.org.br/doadores/apoie-o-pequeno-principe/ |
| ABRALE | câncer do sangue | https://abrale.org.br/como-ajudar/ |
| Hospital de Amor | oncologia | https://doeamor.hospitaldeamor.com.br/ |
| AACD | reabilitação | https://aacd.org.br/como-ajudar-a-aacd |
| Ação da Cidadania | combate à fome | https://www.acaodacidadania.org.br/ |
| Fundação Abrinq | infância | https://www.fadc.org.br/como-ajudar |

**A presença neste diretório não comprova auditoria independente de prestação de contas, parceria com o escritório ou certificação.** Páginas oficiais conferidas editorialmente por navegação em 10/10/2026. A revisão periódica de links, descrição e identidade da entidade é obrigatória. Não copiar QR Codes, chaves PIX ou contas bancárias. Não redirecionar para intermediários não autorizados.

## 4. Protocolo de curadoria e atualização

1. Identificar a pessoa jurídica responsável e verificar o domínio diretamente no endereço oficial.
2. Confirmar a finalidade anunciada na página oficial e a adequação da categoria.
3. Validar a página de doação e se a entidade atende a causa descrita. Não inferir abrangência nacional como serviço presencial universal.
4. Registrar data, revisor, URL e eventual mudança; revisar pelo menos trimestralmente e quando houver denúncia de link quebrado/golpe.
5. Remover ou ocultar imediatamente links suspeitos, campanhas sem autenticação institucional e dados desatualizados.
6. Inserir apenas entidades com conferência editorial documentada. Evitar conflitos de interesses e alegação de parceria não formalizada.

## 5. O que NÃO foi implementado e depende de nova etapa

- Localização automática da pessoa ou integração por API para buscar instituições em tempo real; o MOPS e as prefeituras fornecem uma alternativa de busca oficial.
- Cadastro público de entidades, painel administrativo autenticado, formulário de indicação e auditoria automatizada de CNPJ.
- Campanhas próprias, recebimento de doações, integração a PIX ou repasses de valores.
- Voluntariado com cadastro/encaminhamento pelo escritório.
- Avaliação individual de direitos sociais ou triagem com dados sensíveis.
- Integração de CRAS e instituições locais por município dentro do site (exige fonte oficial e validação local).
- Disponibilização pública antes de QA visual, jurídico, acessibilidade e validação de Edge Function/SSO.

## 6. Checklist de homologação

- [ ] Executar `node --experimental-strip-types --test tests/*.mjs` (projeto sem build de framework).
- [ ] Validar com navegador real em tela 320/360px, desktop, Safari e Android.
- [ ] Testar interação por teclado, foco, leitor de tela, filtros com acentos, impressão e JS desabilitado.
- [ ] Revisar com profissional responsável as descrições sociais, limites da orientação, telefone e as normas atuais da OAB.
- [ ] Verificar links no dia da liberação, incluindo redirecionamentos e certificado HTTPS.
- [ ] Garantir que Netlify mantenha proteção por senha e não exponha prévias ou permalinks sem guard.
- [ ] Conservar `noindex` durante a fase restrita.
- [ ] Registrar aprovação editorial do advogado e responsável por manutenção.

## 7. Melhorias futuras sugeridas

- **Localizar ajuda por município, sem geolocalização automática:** links oficiais municipais curados, priorizando Natal/RN e cidades do RN.
- **Modo de baixa conectividade:** resumo leve e acessível para impressão e compartilhamento por PDF local.
- **Agenda solidária editorial:** campanhas sazonais de doação de sangue e arrecadação, *somente* após validação formal das instituições.
- **Canais de retorno sobre links quebrados:** mecanismo público que não requeira envio de dados médicos/pessoais, quando houver processamento seguro disponível.
- **Revisão de inclusão:** linguagem simples, acessibilidade assistiva, tradução e recursos de leitura com prévia avaliação de privacidade.

**Princípio editorial:** “Quem precisa encontra apoio. Quem pode ajudar encontra um caminho.”
