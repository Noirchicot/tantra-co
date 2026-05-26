---
name: tantra-and-co-design
description: Use this skill to generate well-branded interfaces and assets for Tantra & Co., either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a contemplative-practice brand with monthly seminars, articles, and meditations in French and English.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Files of interest:
- `README.md` — brand context, voice, visual foundations, iconography
- `colors_and_type.css` — copy this into any HTML you generate; it sets the type and colour tokens
- `assets/` — logos and brand marks
- `ui_kits/website/` — reusable JSX components for the marketing site (Header, Footer, EventCard, ArticleCard, BookingForm, MeditationPlayer, LanguageToggle, etc.) — copy these as starting points
- `slides/` — seminar slide templates

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. Import `colors_and_type.css` at the top of any HTML you write so the tokens are available. Use `<image-slot>` for any imagery the user should fill in themselves — do not generate AI imagery.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

**Key brand rules — do not violate without asking:**
- Tantra is treated as a contemplative practice, not sensual marketing. Tone is warm, grounded, plain.
- No emoji anywhere.
- The page background is cream (`#FAF5EB`), never pure white.
- Text is clay (`#2B1F18`), never pure black.
- French is the primary language; English secondary. Write copy in both when possible.
- "Tu" in French (intimate), "you" in English. No vouvoiement except on legal pages.
- No bluish-purple gradients, no rounded cards with coloured left borders, no AI-illustrated lotus flowers or mandalas.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some clarifying questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
