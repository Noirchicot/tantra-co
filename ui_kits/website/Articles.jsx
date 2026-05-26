// Articles grid
const ARTICLES = [
  { id: 'a1',
    eyebrow: { fr: 'Lecture · 6 min', en: 'Reading · 6 min' },
    title: { fr: 'Sur la lenteur, et ce qu\u2019elle rend possible',
             en: 'On slowness, and what it makes possible' },
    excerpt: { fr: 'Ce que change le fait de ralentir avant la pratique, et pourquoi cela commence dès le seuil.',
               en: 'What changes when we slow down before the practice — and why it starts at the threshold.' },
    date: { fr: 'Mai 2026', en: 'May 2026' },
    slot: 'art-1' },
  { id: 'a2',
    eyebrow: { fr: 'Lecture · 8 min', en: 'Reading · 8 min' },
    title: { fr: 'Le Tantra n\u2019est pas ce que l\u2019on croit',
             en: 'Tantra is not what most people think it is' },
    excerpt: { fr: 'Une remise au clair, courte et honnête, sur ce qu\u2019est cette tradition et ce qu\u2019elle n\u2019est pas.',
               en: 'A short, honest clarification of what this tradition is and is not.' },
    date: { fr: 'Avril 2026', en: 'April 2026' },
    slot: 'art-2' },
  { id: 'a3',
    eyebrow: { fr: 'Lecture · 5 min', en: 'Reading · 5 min' },
    title: { fr: 'Écouter sans corriger',
             en: 'Listening without correcting' },
    excerpt: { fr: 'Une attention qui ne cherche pas à modifier ce qu\u2019elle rencontre. Notes sur une pratique.',
               en: 'An attention that does not try to change what it meets. Notes on a practice.' },
    date: { fr: 'Mars 2026', en: 'March 2026' },
    slot: 'art-3' },
];

function ArticleCard({ a, lang }) {
  return (
    <article className="tc-article">
      <div className="tc-article__img">
        <image-slot id={a.slot} shape="rounded" radius="10" placeholder="Photo éditoriale · 4:5"></image-slot>
      </div>
      <span className="meta">{a.eyebrow[lang]}</span>
      <h3>{a.title[lang]}</h3>
      <p>{a.excerpt[lang]}</p>
      <span className="date">{a.date[lang]}</span>
    </article>
  );
}

function Articles({ t, lang, compact }) {
  const items = compact ? ARTICLES : ARTICLES.concat(ARTICLES.map(a => ({ ...a, id: a.id + 'b', slot: a.slot + 'b' })));
  return (
    <section className="tc-section tc-view">
      <div className="tc-sec-head">
        <div className="tc-sec-head__copy">
          <span className="tc-eyebrow">{t('articles_title')}</span>
          <h2 className="tc-h2">{lang === 'fr' ? <span>Un article par mois.<br/><span className="tc-italic-accent">Du temps long.</span></span> : <span>One article a month.<br/><span className="tc-italic-accent">Slow reading.</span></span>}</h2>
          <p className="tc-lead">{t('articles_lead')}</p>
        </div>
        {compact && <a className="tc-btn tc-btn--ghost" href="#">{lang === 'fr' ? 'Toutes les lectures →' : 'All readings →'}</a>}
      </div>
      <div className="tc-articles">
        {items.map(a => <ArticleCard key={a.id} a={a} lang={lang} />)}
      </div>
    </section>
  );
}

window.Articles = Articles;
window.ArticleCard = ArticleCard;
