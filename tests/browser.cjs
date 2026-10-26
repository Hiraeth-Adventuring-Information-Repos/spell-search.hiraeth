const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..');
const APP = 'https://spell-search.hiraeth.wiki';
const PARENT = 'https://www.hiraeth.wiki/__spell-search-check__';
const live = process.env.SPELL_SEARCH_LIVE === '1';
const output = process.env.SPELL_SEARCH_TEST_OUTPUT || '/tmp/spell-search-browser-checks';
const BASE = '{type:page} {in_book:8} [Ritual]';
fs.mkdirSync(output, {recursive:true});

(async () => {
  const browser = await chromium.launch({headless:true});
  const results = [];
  try {
    for (const width of [1440,390]) {
      const context = await browser.newContext({viewport:{width,height:1000}});
      const errors = [];
      context.on('page', (page) => page.on('pageerror', (error) => errors.push(error.message)));
      if (!live) {
        await context.route(APP+'/**', async (route) => {
          const file = path.join(ROOT,new URL(route.request().url()).pathname.slice(1) || 'index.html');
          const ext = path.extname(file);
          await route.fulfill({body:fs.readFileSync(file),contentType:{'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'}[ext] || 'text/plain'});
        });
      }
      await context.route(PARENT+'**', async (route) => {
        const term = new URL(route.request().url()).searchParams.get('term');
        const src = APP+'/?'+new URLSearchParams(term ? {term} : {});
        await route.fulfill({contentType:'text/html',body:`<!doctype html><html><body style="margin:0"><iframe title="Spell Search" src="${src.replaceAll('&','&amp;').replaceAll('"','&quot;')}" style="width:100%;height:980px;border:0"></iframe></body></html>`});
      });
      await context.route('https://www.hiraeth.wiki/search?**', (route) => route.fulfill({contentType:'text/html',body:'Search submitted'}));
      const page = await context.newPage();
      async function load(term) {
        await page.goto(PARENT+(term ? '?'+new URLSearchParams({term}) : ''));
        const frame = page.frameLocator('iframe');
        await frame.locator('#quick-presets button').first().waitFor();
        return frame;
      }
      let frame = await load();
      assert.equal(await frame.locator('#bookstack-term').inputValue(), BASE);
      assert.equal(await frame.locator('input[data-tag="Spell Level"]').count(),10);
      assert.equal(await frame.locator('input[data-tag="Spell School"]').count(),9);
      for (const [label,expected] of [['Rituals','[Ritual=Yes]'],['Concentration','[Concentration=Yes]'],['Higher-level casting','[Higher-Level Casting=Yes]'],['Bonus action','[Casting Timelike%bonus action%]']]) {
        await frame.getByRole('button',{name:new RegExp('^Apply '+label+' preset')}).click();
        assert.equal(await frame.locator('#bookstack-term').inputValue(),BASE+' '+expected);
      }
      await frame.getByRole('button',{name:'Clear',exact:true}).click();
      await frame.locator('[data-expand-toggle]').click();
      await frame.locator('input[data-tag="Components"][value="Verbal"]').check();
      await frame.locator('input[data-tag="Ritual"][value="No"]').check();
      const query = await frame.locator('#bookstack-term').inputValue();
      assert.ok(query.includes('[Components=Verbal]'));
      assert.ok(query.includes('[Ritual=No]'));
      const overflow = await frame.locator('html').evaluate((html) => html.scrollWidth > innerWidth);
      assert.equal(overflow,false,`horizontal overflow at ${width}`);
      await page.screenshot({path:path.join(output,`${live?'live':'local'}-${width}.png`),fullPage:true});
      await frame.getByRole('button',{name:'Search spells',exact:true}).click();
      await page.waitForURL('https://www.hiraeth.wiki/search?**');
      const submitted = new URL(page.url());
      assert.deepEqual([...submitted.searchParams.keys()],['term']);
      assert.equal(submitted.searchParams.get('term'),query);

      frame = await load('{type:page} [Spell Level=3rd-Level] [Spell School=evocation] [component=verbal] [action=reaction] fire [Unrecognized=Keep]');
      assert.equal(await frame.locator('input[data-tag="Spell Level"][value="3rd Level"]').isChecked(),true);
      assert.equal(await frame.locator('input[data-tag="Spell School"][value="Evocation"]').isChecked(),true);
      assert.equal(await frame.locator('input[data-tag="Components"][value="Verbal"]').isChecked(),true);
      assert.equal(await frame.locator('input[data-tag="Casting Time"][value="%reaction%"]:checked').count(),1);
      assert.equal(await frame.locator('#free-text').inputValue(),'fire [Unrecognized=Keep]');
      assert.ok((await frame.locator('#bookstack-term').inputValue()).includes('[Unrecognized=Keep]'));
      frame = await load(BASE+' [Range=Self (30-foot cone)] [Ritual=No]');
      assert.equal(await frame.locator('input[data-tag="Range"][value="Self%"]:checked').count(),1);
      assert.equal(await frame.locator('input[data-tag="Ritual"][value="No"]').isChecked(),true);
      await page.goto(APP+'/');
      assert.equal(await page.getByRole('heading',{name:'Not found',exact:true}).isVisible(),true);
      assert.deepEqual(errors,[]);
      results.push({width,passed:true,mode:live?'live':'local'});
      await context.close();
    }
    fs.writeFileSync(path.join(output,`${live?'live':'local'}-results.json`),JSON.stringify(results,null,2));
    console.log(JSON.stringify(results,null,2));
  } finally {await browser.close();}
})().catch((error) => {console.error(error);process.exitCode=1;});
