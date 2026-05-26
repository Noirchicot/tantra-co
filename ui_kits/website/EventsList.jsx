// Events list + event row
const SEMINARS = [
  { id: 1, d: '02', m: { fr: 'Juin', en: 'Jun' }, title: { fr: 'Séminaire de découverte — juin', en: 'Discovery seminar — June' },
    meta: { fr: 'Lun. · 19h30 → 21h30 · Lausanne', en: 'Mon · 19:30 → 21:30 · Lausanne' }, places: 'few', placesLabel: { fr: '3 places', en: '3 seats' } },
  { id: 2, d: '07', m: { fr: 'Juil.', en: 'Jul' }, title: { fr: 'Séminaire de découverte — juillet', en: 'Discovery seminar — July' },
    meta: { fr: 'Lun. · 19h30 → 21h30 · Lausanne', en: 'Mon · 19:30 → 21:30 · Lausanne' }, places: 'open', placesLabel: { fr: '12 places', en: '12 seats' } },
  { id: 3, d: '04', m: { fr: 'Août', en: 'Aug' }, title: { fr: 'Séminaire de découverte — août', en: 'Discovery seminar — August' },
    meta: { fr: 'Lun. · 19h30 → 21h30 · Lausanne', en: 'Mon · 19:30 → 21:30 · Lausanne' }, places: 'open', placesLabel: { fr: '12 places', en: '12 seats' } },
  { id: 4, d: '01', m: { fr: 'Sept.', en: 'Sep' }, title: { fr: 'Séminaire de découverte — septembre', en: 'Discovery seminar — September' },
    meta: { fr: 'Lun. · 19h30 → 21h30 · Lausanne', en: 'Mon · 19:30 → 21:30 · Lausanne' }, places: 'full', placesLabel: { fr: 'Complet', en: 'Full' } },
];

const PARTNER_EVENTS = [
  { id: 'p1', d: '15', m: { fr: 'Juin', en: 'Jun' }, title: { fr: 'Cercle d\u2019écoute · Vevey', en: 'Listening circle · Vevey' },
    meta: { fr: 'Sam. · 14h → 17h · partenaire : Maison du calme', en: 'Sat · 14:00 → 17:00 · partner: Maison du calme' } },
  { id: 'p2', d: '22', m: { fr: 'Juin', en: 'Jun' }, title: { fr: 'Atelier respiration · Genève', en: 'Breath workshop · Geneva' },
    meta: { fr: 'Sam. · 10h → 13h · partenaire : Souffle GE', en: 'Sat · 10:00 → 13:00 · partner: Souffle GE' } },
];

function EventRow({ e, lang, onBook, isPartner }) {
  return (
    <div className="tc-event">
      <div className="tc-event__date">
        <span className="d">{e.d}</span>
        <span className="m">{e.m[lang]}</span>
      </div>
      <div className="tc-event__body">
        <h3>{e.title[lang]}</h3>
        <div className="meta">{e.meta[lang]}</div>
      </div>
      {!isPartner && (
        <span className={`tc-event__places ${e.places}`}>{e.placesLabel[lang]}</span>
      )}
      {!isPartner ? (
        <button className="tc-btn tc-btn--secondary" disabled={e.places === 'full'} onClick={onBook}>
          {e.places === 'full' ? (lang === 'fr' ? 'Liste d\u2019attente' : 'Waitlist') : (lang === 'fr' ? 'Réserver' : 'Reserve')}
        </button>
      ) : (
        <a className="tc-btn tc-btn--ghost" href="#">{lang === 'fr' ? 'Détails →' : 'Details →'}</a>
      )}
    </div>
  );
}

function EventsList({ t, lang, onBook, compact }) {
  const events = compact ? SEMINARS.slice(0, 3) : SEMINARS;
  return (
    <section className="tc-section tc-view">
      <div className="tc-sec-head">
        <div className="tc-sec-head__copy">
          <span className="tc-eyebrow">{t('events_title')}</span>
          <h2 className="tc-h2">{lang === 'fr' ? <span>Une soirée par mois,<br/><span className="tc-italic-accent">en petit comité.</span></span> : <span>One evening a month,<br/><span className="tc-italic-accent">in a small group.</span></span>}</h2>
          <p className="tc-lead">{t('events_lead')}</p>
        </div>
        {compact && <a className="tc-btn tc-btn--ghost" href="#">{lang === 'fr' ? 'Voir tout →' : 'See all →'}</a>}
      </div>
      <div className="tc-events">
        {events.map(e => <EventRow key={e.id} e={e} lang={lang} onBook={onBook} />)}
      </div>

      {!compact && (
        <div style={{ marginTop: 80 }}>
          <div className="tc-sec-head">
            <div className="tc-sec-head__copy">
              <span className="tc-eyebrow">{t('events_local')}</span>
              <h2 className="tc-h2">{t('events_local_sub')}</h2>
            </div>
          </div>
          <div className="tc-events">
            {PARTNER_EVENTS.map(e => <EventRow key={e.id} e={e} lang={lang} onBook={onBook} isPartner />)}
          </div>
        </div>
      )}
    </section>
  );
}

window.EventsList = EventsList;
window.EventRow = EventRow;
