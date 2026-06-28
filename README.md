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
