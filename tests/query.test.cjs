const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const context = {};
vm.runInNewContext(source.split('const form =')[0] + ';globalThis.api={filterGroups,quickPresets,BASE_QUERY,tagTerm,parseTagTerm,optionDetails};', context);
const api = context.api;
const plain = (value) => JSON.parse(JSON.stringify(value));

test('spell results are scoped to the classified spell catalog', () => {
  assert.equal(api.BASE_QUERY, '{type:page} {in_book:8} [Ritual]');
});

test('exact values and grouped casting-time queries use different operators', () => {
  assert.equal(api.tagTerm('Components', 'Verbal'), '[Components=Verbal]');
  assert.equal(api.tagTerm('Casting Time', '1 reaction%', 'like'), '[Casting Timelike1 reaction%]');
  assert.deepEqual(plain(api.parseTagTerm('[Casting Timelike1 reaction%]')), {tag:'Casting Time',value:'1 reaction%',operator:'like'});
  assert.deepEqual(plain(api.parseTagTerm('[Source=Book like this]')), {tag:'Source',value:'Book like this',operator:'='});
  assert.equal(api.parseTagTerm('[Ritual]'), null);
  assert.throws(() => api.tagTerm('Source', 'Book', 'unsupported'));
});

test('canonical core options replace the retired names and spellings', () => {
  const group = (tag) => api.filterGroups.find((group) => group.tag === tag);
  assert.equal(group('Spell Level').values.length, 10);
  assert.equal(group('Spell School').values.length, 9);
  assert.deepEqual(plain(group('Components').values), ['Verbal','Somatic','Material']);
  assert.ok(!group('component'));
  assert.ok(!group('action'));
  for (const tag of ['Ritual','Concentration','Higher-Level Casting']) {
    assert.deepEqual(plain(group(tag).values), ['Yes','No']);
    assert.equal(group(tag).selection, 'multi');
  }
  assert.ok(!api.filterGroups.some((group) => group.tag === 'Rules Version'));
});

test('every preset corresponds to a selectable filter with the same operator', () => {
  for (const preset of api.quickPresets) {
    for (const [tag, value, operator = '='] of preset.tags) {
      const group = api.filterGroups.find((group) => group.tag === tag);
      assert.ok(group, `${preset.label}: ${tag}`);
      assert.ok(group.values.map(api.optionDetails).some((option) => option.value === value && option.operator === operator), preset.label);
    }
  }
});

test('filter options have unique queries within each group', () => {
  for (const group of api.filterGroups) {
    const terms = group.values.map(api.optionDetails).map((option) => api.tagTerm(group.tag, option.value, option.operator));
    assert.equal(new Set(terms).size, terms.length, group.title);
  }
});
