// About — short text page
function About({ lang, t, onBook }) {
  return (
    <section className="tc-view" style={{ maxWidth: 720, margin: '0 auto', padding: '64px 32px 96px' }}>
      <span className="tc-eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>{lang === 'fr' ? 'À propos' : 'About'}</span>
      <h1 className="tc-h1" style={{ marginBottom: 32 }}>
        {lang === 'fr'
          ? <span>Une pratique,<br/><span className="tc-italic-accent">pas un produit.</span></span>
          : <span>A practice,<br/><span className="tc-italic-accent">not a product.</span></span>}
      </h1>
      <p className="tc-lead" style={{ marginBottom: 24 }}>
        {lang === 'fr'
          ? 'Tantra & Co. organise des soirées de découverte mensuelles à Lausanne. On y vient pour pratiquer, échanger, et prendre le temps de découvrir ce qu\u2019est cette tradition — une tradition contemplative, ancienne, souvent mal comprise.'
          : 'Tantra & Co. hosts monthly discovery evenings in Lausanne. People come to practise, exchange, and take the time to discover what this tradition really is — an old contemplative tradition, often misunderstood.'}
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--clay-700)', marginBottom: 24 }}>
        {lang === 'fr'
          ? 'Les soirées sont ouvertes à toutes et tous, sans expérience préalable. Le format est simple : un petit groupe, deux heures, en français. De la pratique guidée, du temps en silence, et un moment d\u2019échange à la fin pour ceux qui le souhaitent.'
          : 'Evenings are open to anyone, no prior experience required. The format is simple: a small group, two hours, in French. Some guided practice, time in silence, and a conversation at the end for those who wish.'}
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--clay-700)', marginBottom: 40 }}>
        {lang === 'fr'
          ? 'Nous sommes encore en début de chemin. Si tu as une question, écris-nous — c\u2019est plus simple que tu ne le crois.'
          : 'We are still at the beginning of this path. If you have a question, write to us — it is simpler than you think.'}
      </p>
      <button className="tc-btn tc-btn--primary" onClick={onBook}>{t('hero_cta')}</button>
    </section>
  );
}

window.About = About;
