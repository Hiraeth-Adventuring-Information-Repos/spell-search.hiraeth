# HAG Spell Search

Static iframe-friendly BookStack search builder for the Hiraeth spell compendium.

## Files

- `index.html` is the standalone page.
- `styles.css` contains all visual styling.
- `app.js` contains all filter data and URL-building behavior.
- `bookstack-iframe-snippet.html` is the BookStack page body snippet.

## Hosting

Host this folder as a static site at:

```text
https://spell-search.hiraeth.wiki/
```

No secrets are required. The app only builds URLs for:

```text
https://www.hiraeth.wiki/search?term=...
```

## BookStack Embed

Paste the contents of `bookstack-iframe-snippet.html` into the BookStack `search` page.

If BookStack strips the iframe tag, iframe HTML needs to be allowed in the BookStack editor/config for that page. Keep the existing static fallback page until the iframe survives a save/readback check.

The embed supports light and dark color schemes. By default it follows the browser/embedding context; add `?theme=light` or `?theme=dark` to the iframe `src` only if BookStack needs a forced mode.

## Spell tag schema

The filters match the October 26, 2026 spell-tag cleanup. The base query limits
results to pages in spell book `8` with the required `Ritual` classification tag
(`Yes` or `No`), so creature appendices and rename notices are excluded.

- Spell levels use `Cantrip`, then `1st Level` through `9th Level`.
- Components use `Components=Verbal`, `Somatic`, and `Material`.
- Ritual, Concentration, and Higher-Level Casting each offer `Yes` and `No`.
- Casting-time and range groups use BookStack's `like` operator to include
  reaction triggers, alternative bonus-action castings, and area-qualified ranges.
  The operator directly precedes the value: `[Casting Timelike%reaction%]`.
- Duration options use the exact tag values, including qualifiers such as
  `Up to 1 minute`. Concentration has its own filter.
- Class/list and Source options retain the existing wiki labels. Source spelling
  and punctuation variants remain separate choices.
- Saved searches restore retired level spellings and component/action tag names.
  Unsupported saved filters remain in the query rather than being discarded.

The app uses the [BookStack search syntax](https://www.bookstackapp.com/docs/user/searching/).
Filter data is static: refresh the vocabulary when the catalog gains new values.
The latest refresh was verified against 1,910 classified spell entries.

## Verification

Run the dependency-free query/configuration checks with:

```sh
node tests/query.test.cjs
```

With Playwright and Chromium available, run the embedded desktop/mobile checks:

```sh
node tests/browser.cjs
```

Set `SPELL_SEARCH_LIVE=1` to test deployed assets instead of local files.
`SPELL_SEARCH_TEST_OUTPUT` selects the screenshot/result directory. Tests supply
an approved wiki parent page, verify the existing direct-access restriction,
and intercept form submissions; they do not edit the wiki or need credentials.
