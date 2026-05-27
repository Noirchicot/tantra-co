// Bilingual copy. Key → { fr, en }.
window.STRINGS = {
  nav_home:        { fr: 'Accueil',       en: 'Home' },
  nav_seminars:    { fr: 'Séminaires',    en: 'Seminars' },
  nav_articles:    { fr: 'Articles',      en: 'Articles' },
  nav_meditations: { fr: 'Méditations',   en: 'Meditations' },
  nav_about:       { fr: 'À propos',      en: 'About' },

  hero_eyebrow:    { fr: 'Le premier lundi du mois', en: 'The first Monday of each month' },
  hero_title:      { fr: 'Une soirée pour découvrir le Tantra.',
                     en: 'An evening to discover Tantra.' },
  hero_lead:       { fr: 'Deux heures, en petit groupe. De la pratique, des échanges, et du temps pour accueillir ce qui se présente. Ouvert à toutes et tous — aucune expérience requise.',
                     en: 'Two hours, in a small group. Practice, conversation, and time to sit with what arises. Open to anyone — no experience needed.' },
  hero_cta:        { fr: 'Réserver une place', en: 'Reserve a seat' },
  hero_cta2:       { fr: 'En savoir plus',     en: 'Learn more' },

  next_eyebrow:    { fr: 'Prochain séminaire', en: 'Next seminar' },
  next_meta:       { fr: 'Lun. 29 juin · 19h30 → 21h30 · Paris · 12 places',
                     en: 'Mon 29 Jun · 19:30 → 21:30 · Paris · 12 places' },

  events_title:    { fr: 'Séminaires à venir', en: 'Upcoming seminars' },
  events_lead:     { fr: 'Une soirée par mois, en français, dans un lieu calme. Les places sont limitées à douze afin de garder une qualité d\u2019écoute.',
                     en: 'One evening per month, in French, in a quiet space. Places are capped at twelve to keep the listening close.' },
  events_local:    { fr: 'Événements partenaires', en: 'Partner events' },
  events_local_sub:{ fr: 'Une sélection d\u2019événements locaux que nous suivons.',
                     en: 'A curated list of local events we follow.' },

  articles_title:  { fr: 'Lectures', en: 'Readings' },
  articles_lead:   { fr: 'Un article par mois. Du temps long, plutôt qu\u2019un flux.',
                     en: 'One article a month. Slow reading, not a feed.' },

  med_title:       { fr: 'Méditations guidées', en: 'Guided meditations' },
  med_lead:        { fr: 'De courtes pratiques à emporter, enregistrées en français.',
                     en: 'Short practices to take away, recorded in French.' },

  book_title:      { fr: 'Réserver une place', en: 'Reserve a seat' },
  book_sub:        { fr: 'Séminaire de découverte · lun. 29 juin · 19h30 · Paris',
                     en: 'Discovery seminar · Mon 29 Jun · 19:30 · Paris' },
  book_first:      { fr: 'Prénom',          en: 'First name' },
  book_last:       { fr: 'Nom',             en: 'Last name' },
  book_email:      { fr: 'Adresse e-mail',  en: 'Email address' },
  book_phone:      { fr: 'Téléphone (facultatif)', en: 'Phone (optional)' },
  book_note:       { fr: 'Une intention, une question (facultatif)',
                     en: 'An intention, a question (optional)' },
  book_consent:    { fr: 'Je comprends qu\u2019il s\u2019agit d\u2019une pratique contemplative, et que la participation est libre à tout moment.',
                     en: 'I understand this is a contemplative practice and that I am free to leave at any moment.' },
  book_submit:     { fr: 'Confirmer la réservation', en: 'Confirm reservation' },
  book_cancel:     { fr: 'Annuler', en: 'Cancel' },
  book_done_title: { fr: 'C\u2019est noté.', en: 'It\u2019s noted.' },
  book_done_lead:  { fr: 'Tu recevras une confirmation par e-mail, avec l\u2019adresse précise et quelques mots pour préparer ton arrivée.',
                     en: 'You will receive a confirmation by email, with the precise address and a few words to prepare your arrival.' },

  footer_newsletter: { fr: 'Une lettre par mois, à lire en prenant le temps.',
                       en: 'One letter a month, to read slowly.' },
  footer_subscribe:  { fr: 'S\u2019abonner', en: 'Subscribe' },
  footer_rights:     { fr: '© 2026 Tantra & Co. · Tous droits réservés',
                       en: '© 2026 Tantra & Co. · All rights reserved' },
  footer_contact:    { fr: 'Contact', en: 'Contact' },
  footer_legal:      { fr: 'Mentions légales', en: 'Legal' },
};

window.useT = function useT(lang) {
  return (key) => (window.STRINGS[key] && window.STRINGS[key][lang]) || key;
};
