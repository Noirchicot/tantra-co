// Article reading view
function ArticleView({ lang, setView }) {
  return (
    <article className="tc-view" style={{ maxWidth: 720, margin: '0 auto', padding: '64px 32px 96px' }}>
      <button className="tc-btn tc-btn--ghost" onClick={() => setView('articles')} style={{ marginBottom: 32 }}>
        ← {lang === 'fr' ? 'Toutes les lectures' : 'All readings'}
      </button>
      <span className="tc-eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>{lang === 'fr' ? 'Lecture · 6 min · Mai 2026' : 'Reading · 6 min · May 2026'}</span>
      <h1 className="tc-h1" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: 32, fontStyle: 'normal' }}>
        {lang === 'fr' ? 'Sur la lenteur, et ce qu\u2019elle rend possible' : 'On slowness, and what it makes possible'}
      </h1>
      <div style={{ aspectRatio: '16 / 9', background: 'var(--sand-200)', borderRadius: 12, marginBottom: 48 }}>
        <image-slot id="article-hero" shape="rounded" radius="12" placeholder="Photo de couverture · 16:9"></image-slot>
      </div>
      <div style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--clay-700)', maxWidth: 640 }}>
        <p style={{ marginBottom: 24 }}>
          {lang === 'fr'
            ? 'Il y a quelque chose qui se passe, avant la pratique elle-même, dans la manière de franchir le seuil. On arrive avec le bruit du dehors — les courriels, la ville, ce qu\u2019on a couru pour finir avant. Et puis on s\u2019assoit. La pratique commence là.'
            : 'Something happens, before the practice itself, in the way of crossing the threshold. We arrive with the noise of the outside — emails, the city, what we rushed to finish. And then we sit. The practice begins there.'}
        </p>
        <p className="t-quote" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 28, lineHeight: 1.3, color: 'var(--clay-700)', margin: '40px 0', borderLeft: '2px solid var(--terracotta-500)', paddingLeft: 24 }}>
          {lang === 'fr'
            ? '« La lenteur n\u2019est pas un style. C\u2019est ce qui rend possible l\u2019écoute. »'
            : '"Slowness is not a style. It is what makes listening possible."'}
        </p>
        <p style={{ marginBottom: 24 }}>
          {lang === 'fr'
            ? 'Pendant des années, j\u2019ai cru que la qualité d\u2019une soirée se mesurait à ce qui s\u2019y passait. Aujourd\u2019hui je pense plutôt que cela se mesure à la manière dont les gens en repartent — un peu plus lents, un peu plus présents à eux-mêmes.'
            : 'For years I thought the quality of an evening was measured by what happened in it. Today I think it is measured rather by how people leave — a little slower, a little more present to themselves.'}
        </p>
        <p style={{ marginBottom: 24 }}>
          {lang === 'fr'
            ? 'C\u2019est pour cela qu\u2019on commence toujours par dix minutes de silence. Pas parce que c\u2019est une règle. Parce que sans cela, rien de ce qui suit ne peut vraiment être entendu.'
            : 'That is why we always begin with ten minutes of silence. Not because it is a rule. Because without it, nothing that follows can really be heard.'}
        </p>
      </div>
    </article>
  );
}

window.ArticleView = ArticleView;
