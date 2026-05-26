// Hero.jsx + NextCallout — landing hero with image-slot for photo
function Hero({ t, onBook }) {
  return (
    <React.Fragment>
      <section className="tc-hero tc-view">
        <div className="tc-hero__copy">
          <span className="tc-eyebrow">{t('hero_eyebrow')}</span>
          <h1 className="tc-h1">{t('hero_title')}</h1>
          <p className="tc-lead">{t('hero_lead')}</p>
          <div className="tc-hero__cta">
            <button className="tc-btn tc-btn--primary" onClick={onBook}>{t('hero_cta')}</button>
            <button className="tc-btn tc-btn--ghost">{t('hero_cta2')} →</button>
          </div>
        </div>
        <div className="tc-hero__visual">
          <image-slot id="hero-photo" shape="rounded" radius="14" placeholder="Photo d'ambiance — main, lumière, intérieur calme"></image-slot>
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
