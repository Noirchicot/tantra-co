# Tantra & Co. — Design System

A warm, contemplative brand system for **Tantra & Co.**, an organisation hosting **monthly discovery seminars** (Monday evenings), curating **local Tantra events**, and publishing **articles + guided meditations** on a monthly cadence. Bilingual surface in **French and English**.

> **Note** — This is a fresh brand. No existing materials, codebase, Figma, or visuals were attached. The entire system below was designed from the description provided. Every asset is a starting proposal, not a recreation — expect to iterate on logo, voice, palette, and layout choices.

---

## Context

- **Subject matter:** Tantra as a contemplative tradition — practice, presence, embodiment. **Not** sensual/erotic marketing; not new-age cliché. Grounded, body-respecting, inclusive.
- **Cadence:** monthly discovery seminars (Lundi soir / Monday evenings) + monthly articles + monthly meditations + ongoing curation of partner events.
- **Audiences:** francophone primary, anglophone secondary; adults exploring contemplative practice, often new to it.
- **Surfaces designed here:** marketing website (FR/EN), seminar slide template. No app at this stage — flag if one is needed later.

### Sources

None provided. Brand designed from scratch based on the description in the project setup. **If you have a logo, photos, past flyers, or a Figma file**, send them next and I will rework the system around them.

---

## Index

```
README.md                  ← you are here
SKILL.md                   ← agent-facing skill manifest
colors_and_type.css        ← tokens + semantic type styles

assets/                    ← logos, marks, texture placeholders
preview/                   ← Design-System-tab card HTML files
ui_kits/website/           ← marketing website UI kit (FR/EN)
slides/                    ← seminar slide template
```

UI kits:
- `ui_kits/website/` — homepage, events index, article view, booking flow, with reusable components (Header, Footer, EventCard, ArticleCard, BookingForm, MeditationPlayer, LanguageToggle).

Slides:
- `slides/` — title, section, content, big quote, and closing layouts for seminar use.

---

## Content fundamentals

**Voice — short version:** *warm, grounded, plain, a little poetic. Speaks to one person. Never sells; invites.*

### Tone
- **Warm without performing.** Like a yoga teacher who's been doing this for fifteen years and doesn't need to convince anyone.
- **Plain over fancy.** Avoid jargon, avoid mystifying language, avoid "sacred ✨ feminine ✨"-style copy. Tantra is a 1000-year-old contemplative practice — describe it like that, not like a wellness product.
- **Inviting, never pressuring.** No urgency tactics, no "limited spots!" badges, no countdown timers. "If it feels right" beats "Don't miss out".
- **Body-respectful.** This is a contemplative tradition. Stay clear of language that could read as suggestive.

### Person & address
- **Tu in French, you in English.** Intimate but respectful. (Vouvoiement only on formal legal pages.)
- **Nous / we** for the organisation, sparingly. Most copy is in second person addressed to the reader.
- **Avoid "I"** — the brand isn't one person, even when written by the founder.

### Casing
- **Sentence case** for everything UI (buttons, headings, menus). No Title Case Headlines.
- French nouns follow French capitalisation rules — *séminaire de découverte*, not *Séminaire De Découverte*.
- Brand name written **Tantra & Co.** — ampersand, period, no space variants.

### Punctuation
- **Em dash (—)** used freely for asides. **Ellipsis (…)** the unicode character, not three dots.
- **French quotes:** « guillemets français » with non-breaking spaces. **English:** "curly quotes".
- Headlines don't end in periods. Body sentences do.

### Emoji & symbols
- **No emoji.** Not in copy, not in UI, not in event listings. They cheapen the register.
- **Unicode marks** sparingly: · (middle dot) as a separator, — (em dash), … (ellipsis), ☾ (very occasional, only for moon-cycle references in editorial), ◦ (open bullet).

### Words to use / words to avoid

**Use:** practice, presence, embodiment, attention, breath, invitation, seminar, gathering, circle, threshold, listening, slowness, beginner, evening.

**Avoid:** journey (overused), sacred (overused), divine, vibes, energy work (too vague), transcend, awaken, unlock, manifest, healing (unless specific), guru, master, sexy, sensual (loaded in this context).

### Sample copy

> **Heading (EN):** A monthly evening to discover Tantra
> **Heading (FR):** Une soirée mensuelle pour découvrir le Tantra
>
> **Sub (EN):** Two hours, the first Monday of each month. Practice, conversation, and time to sit with what arises. Open to anyone — no experience needed.
> **Sub (FR):** Deux heures, le premier lundi de chaque mois. De la pratique, des échanges, et du temps pour accueillir ce qui se présente. Ouvert à toutes et tous — aucune expérience requise.

> **Event card meta (EN):** Mon 2 Jun · 19:30 · Lausanne · 12 places
> **Event card meta (FR):** Lun. 2 juin · 19h30 · Lausanne · 12 places

> **Button (EN):** Reserve a seat
> **Button (FR):** Réserver une place

---

## Visual foundations

### Mood
Warm, earthen, slightly editorial. Reads more like an independent magazine or a small ceramics studio than a wellness app. Generous white space (cream space, actually). Quiet pages. Long reading widths. Imagery suggests material — clay, linen, candle, late afternoon light — rather than depicting people in poses.

### Colour
- **Terracotta** (`#B5563A`) is the brand primary — used on headlines occasionally, on the wordmark, on the primary CTA, on link hover states.
- **Ochre** (`#C68B3D`) is the highlight — date chips, tag pills, editorial accents.
- **Cream / sand** are the working surfaces. The page is **never pure white**. Default page background is `#FAF5EB` (cream-50).
- **Clay** (`#2B1F18`) is the text colour — never pure black.
- **Sage** (`#7A8A6D`) is a restful secondary, used **only** for meditation-related UI (player chrome, library category) to give that surface a different temperature.
- **No bluish-purple gradients. No emoji cards.** Ever.

### Type
- **Display:** Newsreader (Google Fonts). Optical-size variable; we tune `opsz` to match size. Slight editorial tension. Italic is used liberally for pull-quotes and section accents.
- **Body:** Manrope. Humanist, warm proportions, holds up at small sizes.
- **No third typeface.** Resist the urge to add a "handwritten" script.

### Spacing & layout
- **8px base** for components, **multiples of 24/32/48/64** for section rhythm.
- **Editorial column** — body text caps at ~640px. Wide hero sections, narrow reading sections.
- **Asymmetric layouts** preferred over centred grids. Headings often hang into the gutter.
- **Fixed elements:** site header is sticky but compresses on scroll. No floating chat bubbles, no cookie popups designed in (legal layer only).

### Backgrounds
- **Solid cream by default.** No tiled patterns, no SVG noise.
- **Section backgrounds** alternate between `cream-50` (page), `cream-100` (warmer card surface), and rare `clay-800` (dark inversion — used once per page max, e.g., the footer).
- **Photography** when present is full-bleed but cropped wide (16:9 or 21:9), warm-toned, low contrast, never staged-yoga stock. Black-and-white film is acceptable. Avoid faces in close-up; favour hands, light, objects, rooms.

### Imagery treatment
- **Warm cast.** All photography passes through a warm grade — temperature ~5200K, saturation pulled down ~15%, contrast soft. Grain is welcome.
- **Aspect ratios:** 3:2 or 4:5 for editorial blocks, 16:9 for hero, 1:1 for event cards.
- **No people-doing-yoga stock.** No lotus-flower clipart. No mandalas. No silhouettes against sunsets.

### Borders & corners
- **Radius is small.** Cards: 8–14px. Buttons: 8px. Pills: 999px (only for tags/chips). No rounded everything — most surfaces are sharp-edged or barely-softened rectangles.
- **Borders are warm and subtle:** `rgba(43, 31, 24, 0.08)` on light surfaces. Hairlines, not heavy strokes.

### Shadow & elevation
- Shadows are **rare** — most surfaces sit flat on the page, separated by colour shift or hairline. When used, shadows are **warm** (clay-tinted rgba), diffuse, never blue.
- Elevated card on hover: `--shadow-2`. Modal: `--shadow-3`. That's the entire system.

### Motion
- **Slow and soft.** Default duration `240ms`, ease `cubic-bezier(0.4, 0, 0.2, 1)`.
- **No bounces.** No springy overshoot. The brand is contemplative; motion follows.
- **Fades dominate** over slides. Hovers fade colour or shift opacity. Page transitions cross-fade.
- **Reduced motion:** respect `prefers-reduced-motion` everywhere — disable any non-essential transitions.

### Interaction states
- **Hover:** primary CTAs darken (terracotta-500 → terracotta-600). Links shift to terracotta-600 with underline thickening. Cards lift 1–2px and gain `--shadow-2`. **No scale-up.**
- **Press:** primary CTA goes one further step darker (terracotta-700). Cards return to flat with `--shadow-1`. **Slight inset, no shrink.**
- **Focus:** terracotta-400 outline at 2px offset 2px. Always visible — keyboard users matter.
- **Disabled:** 40% opacity, cursor `not-allowed`, no other change.

### Transparency & blur
- **Almost never.** No glassmorphism. The only exception: a 92%-opaque cream backdrop on the sticky header once it has compressed. No backdrop-filter blur unless under a hero photo (and even then, sparingly).

### Cards
- **Card = warm surface + hairline border + maybe a small shadow on hover.**
- Background `--cream-100`, 1px border `--border-subtle`, radius `--radius-lg` (14px), padding `--space-5` (24px), title `t-h3`, meta `t-meta` underneath.
- **No coloured left-borders.** No emoji indicators. No drop-cap initials except on long editorial.

### Forms
- Inputs: cream-50 fill, 1px clay border at 14% opacity, 8px radius, 12px vertical padding.
- Label sits above, in `t-small`, clay-500.
- Error: terracotta-600 border + helper text. Never red.

### Layout rules
- Maximum content width: **1200px**. Editorial reading column: **640px**.
- Gutter: **24px mobile, 48px tablet, 80px desktop**.
- Header: 64px tall (compresses to 56px on scroll).
- Always 1 column on mobile; 12-col grid on desktop, but most layouts use 2–3 of those columns.

---

## Iconography

**Approach:** minimal, line-based, **never decorative**. Icons exist to clarify, not to dress up.

- **Source:** [Lucide](https://lucide.dev) icons, linked from CDN. Stroke weight 1.5px, rounded line caps. They match the brand's editorial-but-warm tone better than Heroicons (too tech) or Phosphor (too playful).
- **Loading:** `<script src="https://unpkg.com/lucide@latest"></script>` then `<i data-lucide="calendar"></i>` + `lucide.createIcons()`. Or copy the specific SVGs you need from [lucide.dev](https://lucide.dev/icons) into `assets/icons/`.
- **Common icons used:** `calendar`, `map-pin`, `clock`, `arrow-right`, `arrow-up-right`, `chevron-down`, `menu`, `x`, `play`, `pause`, `headphones`, `book-open`, `mail`, `globe`.
- **Colour:** inherits `currentColor`. Default `--fg-2` (clay-500). On terracotta surfaces: `--cream-50`.
- **Size:** 16px in body text, 20px in buttons, 24px in nav, 32px in section accents. Never larger than 48px — if you want a big graphic, use photography or a mark, not a giant icon.
- **No icon fonts beyond Lucide.** No Font Awesome.
- **No emoji as icons.** No unicode symbols as icons (except the curated few in *Content fundamentals*).

### Logo & brand mark

- **Wordmark:** "Tantra & Co." set in **Newsreader Italic**, weight 400, optical size 36. The ampersand carries the brand's character — keep it visible.
- **Stacked mark:** the wordmark, with "Séminaires & rencontres" / "Seminars & gatherings" set below in Manrope 13 letter-spaced 0.18em uppercase.
- **No symbol mark yet.** Resist designing one until the brand has run for 6 months. A wordmark is enough.
- **Logo files:** `assets/logo-wordmark.svg`, `assets/logo-stacked.svg`. Both also exist as PNG at 2x for use cases where SVG fails.
- **Clear space:** 1× the cap height of the "T" around the wordmark on all sides.
- **Minimum size:** 96px wide on screen, 24mm wide in print.
- **Colour use:** terracotta-500 on cream surfaces; cream-50 on clay-800 surfaces. **Never** the logo in pure black or pure white.

---

## Caveats & substitutions

- **Fonts are Google Fonts substitutes** for what would normally be licensed typefaces. Newsreader and Manrope are excellent free options but if you have a license for, say, **Söhne** or **GT Sectra**, swap them in — the system is structured to make that one variable change.
- **Imagery is placeholder.** All photographs in mocks are `<image-slot>` drag-and-drop targets or labelled placeholders. Drop your own photography in once shot.
- **Logo is wordmark only.** No symbol/monogram yet.
- **Icons are Lucide via CDN** for the prototype phase. For production, copy the specific SVGs in-tree.
- **No copy translations have been reviewed by a native speaker** for the French strings. Have them proofed.
