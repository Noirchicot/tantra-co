// SeminarDetail — dedicated page for the discovery seminar.
function SeminarDetail({ lang, t, onBook, onFlyer, setView }) {
  const programItems = lang === 'fr' ? [
    'Méditations guidées & pratiques de présence',
    'Exercices de respiration et d\u2019énergie',
    'Explorations corporelles douces (seul·e et à deux, toujours dans le respect de vos limites)',
    'Temps de partage et d\u2019intégration',
  ] : [
    'Guided meditations & presence practices',
    'Breath and energy exercises',
    'Gentle body explorations (alone and in pairs, always within your own limits)',
    'Time to share and integrate',
  ];

  const whyItems = lang === 'fr' ? [
    'Retrouver votre vitalité naturelle',
    'Vous reconnecter à votre authenticité',
    'Développer une qualité de présence à vous-même et aux autres',
    'Explorer votre sensibilité et votre énergie de vie',
  ] : [
    'Reconnect with your natural vitality',
    'Reconnect with your authenticity',
    'Develop a quality of presence to yourself and to others',
    'Explore your sensitivity and your life energy',
  ];

  return (
    <article className="tc-seminar tc-view">
      <button className="tc-btn tc-btn--ghost tc-seminar__back" onClick={() => setView('home')}>
        ← {lang === 'fr' ? 'Retour à l\u2019accueil' : 'Back to home'}
      </button>

      <header className="tc-seminar__banner">
        <img
          src="../../assets/hero-soiree-decouverte.jpg"
          alt="Soirée Découverte Tantra"
        />
      </header>

      <div className="tc-seminar__title-block">
        <span className="tc-eyebrow tc-seminar__kicker">
          {lang === 'fr' ? 'Soirée · Atelier · Découverte Tantra' : 'Evening · Workshop · Discovery Tantra'}
        </span>
        <h1 className="tc-seminar__title">
          {lang === 'fr'
            ? <>Aller vers mon <span className="tc-italic-accent">authenticité</span> &amp; ma <span className="tc-italic-accent">vitalité</span></>
            : <>Toward my <span className="tc-italic-accent">authenticity</span> &amp; my <span className="tc-italic-accent">vitality</span></>}
        </h1>
      </div>

      <section className="tc-seminar__intro">
        <p className="tc-seminar__lede">
          {lang === 'fr'
            ? <>Et si vous vous offriez un espace pour <em>ralentir…</em> <em>ressentir…</em> et vous reconnecter à votre essence&nbsp;?</>
            : <>What if you gave yourself a space to <em>slow down…</em> <em>feel…</em> and reconnect to your essence?</>}
        </p>
        <p className="tc-seminar__paragraph">
          {lang === 'fr'
            ? 'Nous vous invitons à des soirées immersives et bienveillantes pour explorer en douceur l\u2019univers du Tantra, un chemin de présence, de conscience et de connexion à soi.'
            : 'We invite you to immersive, caring evenings to gently explore the world of Tantra — a path of presence, awareness, and connection to oneself.'}
        </p>
      </section>

      <section className="tc-seminar__section">
        <span className="tc-eyebrow">{lang === 'fr' ? 'Au programme' : 'Programme'}</span>
        <ul className="tc-seminar__list">
          {programItems.map((it, i) => (
            <li key={i}>
              <span className="tc-seminar__list-num">0{i + 1}</span>
              <span className="tc-seminar__list-text">{it}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="tc-seminar__section">
        <span className="tc-eyebrow">{lang === 'fr' ? 'Pour quoi ?' : 'What for?'}</span>
        <ul className="tc-seminar__list">
          {whyItems.map((it, i) => (
            <li key={i}>
              <span className="tc-seminar__list-num">0{i + 1}</span>
              <span className="tc-seminar__list-text">{it}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="tc-seminar__notes">
        <p className="tc-seminar__note tc-seminar__note--italic">
          {lang === 'fr'
            ? 'Aucun prérequis nécessaire — juste l\u2019envie de découvrir et d\u2019être à l\u2019écoute de vous-même.'
            : 'No experience required — just the willingness to discover and to listen to yourself.'}
        </p>
        <p className="tc-seminar__note tc-seminar__note--frame">
          {lang === 'fr'
            ? 'Un cadre sécurisant, respectueux et sans nudité.'
            : 'A safe, respectful container — no nudity.'}
        </p>
      </div>

      <section className="tc-seminar__practical">
        <div className="tc-seminar__practical-item">
          <span className="tc-eyebrow">{lang === 'fr' ? 'Lieu' : 'Where'}</span>
          <div className="tc-seminar__practical-value">{lang === 'fr' ? 'Paris · à préciser' : 'Paris · to be confirmed'}</div>
        </div>
        <div className="tc-seminar__practical-item">
          <span className="tc-eyebrow">{lang === 'fr' ? 'Date & heure' : 'Date & time'}</span>
          <div className="tc-seminar__practical-value">{lang === 'fr' ? 'Lun. 29 juin · 19h30 → 21h30' : 'Mon 29 Jun · 19:30 → 21:30'}</div>
        </div>
        <div className="tc-seminar__practical-item">
          <span className="tc-eyebrow">{lang === 'fr' ? 'Tarif' : 'Price'}</span>
          <div className="tc-seminar__practical-value">{lang === 'fr' ? 'À préciser' : 'To be confirmed'}</div>
        </div>
        <div className="tc-seminar__practical-item">
          <span className="tc-eyebrow">{lang === 'fr' ? 'Places' : 'Seats'}</span>
          <div className="tc-seminar__practical-value">{lang === 'fr' ? '12 places · 3 restantes' : '12 seats · 3 left'}</div>
        </div>
      </section>

      <section className="tc-seminar__cta">
        <p className="tc-seminar__cta-line">
          {lang === 'fr' ? 'Osez un pas vers vous-même…' : 'Take a step towards yourself…'}
        </p>
        <div className="tc-seminar__cta-buttons">
          <button className="tc-btn tc-btn--primary" onClick={onBook}>{t('hero_cta')}</button>
          <button className="tc-btn tc-btn--ghost" onClick={onFlyer}>
            {lang === 'fr' ? 'Voir le flyer complet' : 'See the full flyer'}
          </button>
        </div>
      </section>
    </article>
  );
}

window.SeminarDetail = SeminarDetail;
