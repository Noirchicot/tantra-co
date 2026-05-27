// Events list + event row
const SEMINARS = [
  { id: 1, d: '29', m: { fr: 'Juin', en: 'Jun' },
    title: { fr: 'Séminaire de découverte — juin', en: 'Discovery seminar — June' },
    meta: { fr: 'Lun. · 19h30 → 21h30 · Paris', en: 'Mon · 19:30 → 21:30 · Paris' },
    places: 'open', placesLabel: { fr: '12 places', en: '12 seats' } },
  { id: 2, d: '28', m: { fr: 'Sept.', en: 'Sep' },
    title: { fr: 'Séminaire de découverte — septembre', en: 'Discovery seminar — September' },
    meta: { fr: 'Lun. · 19h30 → 21h30 · Paris', en: 'Mon · 19:30 → 21:30 · Paris' },
    places: 'open', placesLabel: { fr: '12 places', en: '12 seats' } },
  { id: 3, d: '26', m: { fr: 'Oct.', en: 'Oct' },
    title: { fr: 'Séminaire de découverte — octobre', en: 'Discovery seminar — October' },
    meta: { fr: 'Lun. · 19h30 → 21h30 · Paris', en: 'Mon · 19:30 → 21:30 · Paris' },
    places: 'open', placesLabel: { fr: '12 places', en: '12 seats' } },
];

const SUMMER_BREAK = {
  fr: { eyebrow: 'Juillet · Août', label: 'Pause estivale — pas de séminaires pendant l\u2019été.' },
  en: { eyebrow: 'July · August', label: 'Summer break — no seminars during the summer.' },
};

const PARTNER_EVENTS = [
  { id: 'p1', d: '15', m: { fr: 'Juin', en: 'Jun' }, title: { fr: 'Cercle d\u2019écoute · Paris', en: 'Listening circle · Paris' },
    meta: { fr: 'Sam. · 14h → 17h · partenaire : Maison du calme', en: 'Sat · 14:00 → 17:00 · partner: Maison du calme' } },
  { id: 'p2', d: '22', m: { fr: 'Juin', en: 'Jun' }, title: { fr: 'Atelier respiration · Paris', en: 'Breath workshop · Paris' },
    meta: { fr: 'Sam. · 10h → 13h · partenaire : Souffle PA', en: 'Sat · 10:00 → 13:00 · partner: Souffle PA' } },
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

function SummerBreakRow({ lang }) {
  const s = SUMMER_BREAK[lang];
  return (
    <div className="tc-event tc-event--break">
      <div className="tc-event__date tc-event__date--muted">
        <span className="m">{s.eyebrow}</span>
      </div>
      <div className="tc-event__body">
        <div className="tc-event__break-label">{s.label}</div>
      </div>
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
        {events.map((e, i) => (
          <React.Fragment key={e.id}>
            <EventRow e={e} lang={lang} onBook={onBook} />
            {i === 0 && <SummerBreakRow lang={lang} />}
          </React.Fragment>
        ))}
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
