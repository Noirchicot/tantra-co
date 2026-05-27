// About / Qui sommes-nous — collective presentation
function About({ lang, t, onBook }) {
  return (
    <section className="tc-view" style={{ maxWidth: 720, margin: '0 auto', padding: '64px 32px 96px' }}>
      <span className="tc-eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>
        {lang === 'fr' ? 'Qui sommes-nous ?' : 'Who are we?'}
      </span>
      <h1 className="tc-h1" style={{ marginBottom: 32 }}>
        {lang === 'fr'
          ? <span>Un collectif <span className="tc-italic-accent">en chemin.</span></span>
          : <span>A collective <span className="tc-italic-accent">on the path.</span></span>}
      </h1>

      <p className="tc-lead" style={{ marginBottom: 28 }}>
        {lang === 'fr'
          ? <>Tantra &amp; Co. est un collectif d&rsquo;animateurs en formation auprès de <strong style={{ fontWeight: 500, color: 'var(--clay-800)' }}>Skydancing Tantra</strong>, référence internationale du Tantra contemporain.</>
          : <>Tantra &amp; Co. is a collective of facilitators training with <strong style={{ fontWeight: 500, color: 'var(--clay-800)' }}>Skydancing Tantra</strong>, an international reference for contemporary Tantra.</>}
      </p>

      <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--clay-700)', marginBottom: 24 }}>
        {lang === 'fr'
          ? 'Chaque mois à Paris, nous proposons des soirées de découverte pour expérimenter, partager et explorer en douceur les pratiques tantriques dans un cadre sécurisant, respectueux et sans prérequis.'
          : 'Each month in Paris, we host discovery evenings to experiment, share, and gently explore tantric practices in a safe, respectful container — no experience required.'}
      </p>

      <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--clay-700)' }}>
        {lang === 'fr'
          ? <>Nous organisons également ponctuellement des stages et ateliers autour de thématiques complémentaires telles que <em>les constellations systémiques</em>, <em>la Gestalt</em>, <em>le massage cachemirien</em> ou encore <em>la sexologie</em>, avec une même intention&nbsp;: favoriser la présence, la conscience de soi et la qualité de la relation à l&rsquo;autre.</>
          : <>We also occasionally host retreats and workshops on complementary themes such as <em>systemic constellations</em>, <em>Gestalt</em>, <em>Kashmiri massage</em>, and <em>sexology</em> — with one shared intention: to nurture presence, self-awareness, and the quality of relationship with the other.</>}
      </p>
    </section>
  );
}

window.About = About;
