import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const readSite = (path) => readFileSync(new URL('../site/' + path, import.meta.url), 'utf8');

test('FAQ visível do auxílio-acidente esclarece que trabalhar não impede por si só', () => {
  const html = readSite('areas/auxilio-acidente.html');
  const faq = html.match(/<summary>Voltar ao trabalho impede auxílio-acidente\?<\/summary><p>([^<]+)<\/p>/);
  assert.ok(faq, 'FAQ deve existir e ter resposta textual');
  assert.match(faq[1], /^Não\./);
  assert.match(faq[1], /requisitos legais/);
});

test('FAQ estruturada do auxílio-acidente é consistente com a resposta visível', () => {
  const html = readSite('areas/auxilio-acidente.html');
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]));
  const faqPage = jsonLd.flatMap((obj) => obj['@graph'] ?? [obj]).find((node) => node['@type'] === 'FAQPage');
  assert.ok(faqPage, 'Schema FAQPage não encontrado');
  const question = faqPage.mainEntity.find((item) => item.name === 'Voltar ao trabalho impede auxílio-acidente?');
  assert.ok(question, 'Pergunta da FAQ estruturada não encontrada');
  assert.match(question.acceptedAnswer.text, /^Não\./);
});

test('acervo distingue publicações de 2025 e 2026', () => {
  const html = readSite('acervo/index.html');
  assert.match(html, /As publicações reunidas abaixo são de 2025 e 2026/);
  assert.match(html, /2025-\d\d-\d\d/);
  assert.match(html, /2026-\d\d-\d\d/);
  assert.doesNotMatch(html, /As publicações reunidas abaixo são de 2025 e exibem/);
});

test('a página de privacidade traz data editorial consistente', () => {
  const html = readSite('privacidade.html');
  assert.match(html, /Privacidade e transparência · Atualização editorial: 02\/11\/2026/);
  assert.match(html, /Esta política foi atualizada editorialmente em 02\/11\/2026/);
});
