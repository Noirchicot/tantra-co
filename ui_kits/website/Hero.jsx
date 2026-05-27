// Hero.jsx — banner-image hero. Title/tagline are embedded in the image itself.
function Hero({ t, lang, onBook, setView, onFlyer }) {
  return (
    <React.Fragment>
      <section className="tc-hero tc-hero--banner tc-view">
        <div className="tc-hero__banner">
          <img
            src="../../assets/hero-soiree-decouverte.jpg"
            alt="Soirée Découverte Tantra — aller vers mon authenticité & ma vitalité"
          />
        </div>
        <p className="tc-hero__subtitle">
          {lang === 'fr'
            ? <span>Une soirée mensuelle pour ralentir, ressentir et se reconnecter.<br/>Le premier lundi du mois — ouvert à toutes et tous, aucune expérience requise.</span>
            : <span>A monthly evening to slow down, feel, and reconnect.<br/>The first Monday of the month — open to anyone, no experience required.</span>}
        </p>
        <div className="tc-hero__cta">
          <button className="tc-btn tc-btn--primary" onClick={onBook}>{t('hero_cta')}</button>
          <button className="tc-btn tc-btn--secondary" onClick={() => setView('seminar-detail')}>
            {t('hero_cta2')} →
          </button>
          <button className="tc-btn tc-btn--ghost" onClick={onFlyer}>
            {lang === 'fr' ? 'Voir le flyer' : 'See the flyer'}
          </button>
        </div>
      </section>
      <NextCallout t={t} onBook={onBook} />
    </React.Fragment>
  );
}

function NextCallout({ t, onBook }) {
  return (
    <div className="tc-callout">
      <div className="tc-callout__inner">
        <div className="tc-callout__date">
          <span className="d">02</span>
          <span className="m">Juin</span>
        </div>
        <div className="tc-callout__body">
          <h3>{t('next_eyebrow')}</h3>
          <div className="meta">{t('next_meta')}</div>
        </div>
        <button className="tc-btn tc-btn--primary" onClick={onBook}>{t('hero_cta')}</button>
      </div>
    </div>
  );
}

window.Hero = Hero;
window.NextCallout = NextCallout;
