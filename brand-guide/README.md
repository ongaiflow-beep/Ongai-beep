# OngaiFlow — Visual Guidebook

A minimalist, **zero-dependency** brand-guide deck for the OngaiFlow agency,
built to the OngaiFlow Figma. It's a reusable template: nine 16:9 pages that
hold the identity together — logo, construction, clear space, colour and type —
in one quiet, technical visual language.

Everything is plain HTML + one CSS file + a sprinkle of progressive-enhancement
JS. No build step, no framework, no install.

## How to view

**Quickest:** open `index.html` in any browser.

```
# optional: serve locally so links/fonts behave like production
python3 -m http.server 8000   # then visit http://localhost:8000/brand-guide/
```

- **Scroll**, or use **↑ / ↓** (also PageUp/Down, Home/End) to move between pages.
- The deck snaps one page at a time; the dot rail on the right shows where you are.
- It works with JavaScript disabled — scroll and the anchor links still do everything.

## Export a PDF

Press **P** (or ⌘/Ctrl-P) → *Save as PDF*. The print stylesheet lays out
**one landscape page per slide**, colours included, so you get a real,
shareable guidebook. Set margins to *None* and enable *Background graphics*.

## The system (derived 1:1 from the Figma)

| Token | Value | Role |
|-------|-------|------|
| Lime  | `#DAED00` | Signal — one deliberate accent per surface |
| Ink   | `#141105` | Type, the mark, dark fields |
| Paper | `#FFFFFF` | Default ground |
| Type  | Inter (Light 300 / Bold 700) | Everything |

The signature is the **draughtsman's language** carried on every page: a hairline
construction grid, `X`-unit measurements, corner registration ticks, and the
running `section ··· Ongaiflow visual guidebook` header.

## Pages

| # | Page | Notes |
|---|------|-------|
| 01 | Cover | Ink field, lime logomark + `ongaiflow` lockup |
| 02 | Contents | — |
| 03 | Logo · The Mark | The ring on paper / ink / lime |
| 04 | **Construction** | Faithful reproduction of the Figma construction slide |
| 05 | Clear Space & Minimum Size | Clear space = `X`; min 10 mm / 24 px |
| 06 | **Colour** | Faithful reproduction of the Figma colour slide |
| 07 | Typography | Inter specimen + type scale |
| 08 | Misuse | Six don'ts |
| 09 | Contact | Sign-off — ongaiflow@gmail.com |

Slides **04** and **06** reproduce the two designed Figma frames; the rest extend
the same language into a complete guide.

## Make it yours

Everything lives in two files:

- **`css/guide.css`** — all design tokens are CSS custom properties under `:root`
  (`--lime`, `--ink`, `--paper`, margins, hairline tints). Change them once and the
  whole deck follows.
- **`index.html`** — copy a `<section class="slide">` block to add a page (and a dot
  to the `.rail`), or edit copy in place.

**Swapping the logo:** the mark is an inline SVG ring repeated where it's used —

```html
<span class="mark"><svg viewBox="0 0 100 100"><path fill-rule="evenodd"
  d="M50 10a40 40 0 1 0 0 80 40 40 0 1 0 0-80Zm0 20a20 20 0 1 1 0 40 20 20 0 1 1 0-40Z"/></svg></span>
```

Drop your own `<svg>` (fill `currentColor`, square viewBox) in its place and it
inherits colour and sizing automatically.

**Fonts:** Inter loads from Google Fonts with a system-sans fallback, so the deck
still reads correctly offline — just not in Inter.

## Structure

```
brand-guide/
├── index.html        # the deck — all nine pages
├── css/guide.css     # tokens + layout + per-page styles
├── js/guide.js       # keyboard nav + dot rail (progressive enhancement)
└── README.md
```
