import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = resolve(dirname(fileURLToPath(import.meta.url)), '../site');
const read = (relative) => readFileSync(join(site, relative), 'utf8');

test('FAQ pública e FAQPage do auxílio-acidente dão a mesma resposta: trabalho não impede o benefício', () => {
  const html = read('areas/auxilio-acidente.html');
  const structured = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(structured, 'JSON-LD não encontrado');
  const data = JSON.parse(structured[1]);
  const faq = data['@graph'].find(item => item['@type'] === 'FAQPage');
  assert.ok(faq, 'FAQPage ausente');
  const question = 'Voltar ao trabalho impede auxílio-acidente?';
  const answer = faq.mainEntity.find(item => item.name === question)?.acceptedAnswer?.text;
  assert.ok(answer, 'Pergunta ausente do JSON-LD');
  const visible = html.match(/<summary>Voltar ao trabalho impede auxílio-acidente\?<\/summary><p>([^<]+)<\/p>/)?.[1];
  assert.ok(visible, 'Resposta visível não encontrada');
  assert.equal(answer, visible, 'FAQ exibida difere do JSON-LD');
  assert.match(answer, /^Não\./);
  assert.match(answer, /continuar? trabalhando|continua trabalhando/);
});

test('acervo identifica corretamente anos de publicação dos 12 cards', () => {
  const html = read('acervo/index.html');
  const dates = [...html.matchAll(/class="ra-v5-post-meta">[^<]*<span>·<\/span> (\d{4})-\d{2}-\d{2}/g)].map(match => match[1]);
  assert.equal(dates.length, 12, 'quantidade de datas não confere com os cards do acervo');
  assert.deepEqual([...new Set(dates)].sort(), ['2025', '2026']);
  assert.equal(dates.filter(year => year === '2025').length, 8);
  assert.equal(dates.filter(year => year === '2026').length, 4);
  const intro = html.match(/class="ra-v5-verify ra-demo-acervo-summary">([^<]+)<\/p>/)?.[1];
  assert.ok(intro);
  assert.match(intro, /2025 e 2026/);
  assert.match(intro, /pode ter sido superado/);
});

test('correções editoriais não removem proteção por senha ou bloqueio de indexação', () => {
  for (const relative of ['areas/auxilio-acidente.html', 'acervo/index.html']) {
    assert.match(read(relative), /name="robots"/);
    assert.match(read(relative), /noindex,nofollow,noarchive/);
  }
  const toml = readFileSync(resolve(site, '../netlify.toml'), 'utf8');
  assert.match(toml, /function\s*=\s*"portal-guard"/);
  assert.match(toml, /path\s*=\s*"\/\*"/);
});

test('todo FAQPage estruturado corresponde a perguntas e respostas visíveis na mesma página', () => {
  const allHTML = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? allHTML(join(dir, entry.name)) : entry.name.endsWith('.html') ? [join(dir, entry.name)] : []);
  const normalize = text => text.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ').trim();
  let checked = 0;
  for (const file of allHTML(site)) {
    const html = readFileSync(file, 'utf8');
    const visible = new Map([...html.matchAll(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>\s*<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map(m => [normalize(m[1]), normalize(m[2])]));
    for (const tag of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const schema = JSON.parse(tag[1]);
      for (const element of schema['@graph'] || []) {
        if (element['@type'] !== 'FAQPage') continue;
        for (const question of element.mainEntity || []) {
          const expected = normalize(question.acceptedAnswer?.text || '');
          const actual = visible.get(question.name);
          assert.ok(actual, `FAQ estruturada sem conteúdo visível: ${file} - ${question.name}`);
          assert.equal(expected, actual, `FAQ estruturada diverge do conteúdo visível: ${file} - ${question.name}`);
          checked++;
        }
      }
    }
  }
  assert.equal(checked, 44, 'mudanças no número de questões FAQ devem ser revisadas');
});
