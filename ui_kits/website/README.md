# Tantra & Co. — Website UI kit

A high-fidelity prototype of the marketing website. Bilingual (FR primary, EN secondary). Click-through prototype demonstrating the homepage, events index, article view, and booking flow.

## Files

- `index.html` — main entry. Loads React + Babel and composes the app.
- `App.jsx` — top-level routing + state (language, current view, booking modal).
- `Strings.js` — all copy in FR & EN, keyed by `t.key`.
- `Header.jsx` — sticky header with language toggle, compresses on scroll.
- `Hero.jsx` — landing hero with next-seminar callout.
- `EventCard.jsx` / `EventsList.jsx` — date · title · meta row, used on homepage and events page.
- `ArticleCard.jsx` / `Articles.jsx` — editorial article grid.
- `MeditationPlayer.jsx` — sage-surface audio player.
- `BookingForm.jsx` — modal booking flow with confirmation.
- `Footer.jsx` — clay-inverse footer with newsletter signup.

## How to view

Open `index.html`. Click "Réserver" on the homepage to trigger the booking flow. Use the FR/EN toggle to swap languages. Use the top nav to navigate between Accueil, Séminaires, Articles, Méditations.

## What's intentionally fake

- All photos are `<image-slot>` drop targets — drop your own.
- Booking does not POST anywhere; the success state is local.
- The meditation player has no audio file attached.
- Article bodies are placeholder Lorem in their structure.
