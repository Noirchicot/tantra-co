// Header.jsx — sticky header with logo, nav, language toggle
function Header({ lang, setLang, view, setView, t }) {
  const [compact, setCompact] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'home',        label: t('nav_home') },
    { id: 'seminars',    label: t('nav_seminars') },
    { id: 'articles',    label: t('nav_articles') },
    { id: 'meditations', label: t('nav_meditations') },
    { id: 'about',       label: t('nav_about') },
  ];

  return (
    <header className={`tc-header${compact ? ' compact' : ''}`}>
      <div className="tc-header__inner">
        <a className="tc-logo" href="#" onClick={(e) => { e.preventDefault(); setView('home'); }}>Tantra &amp; Co.</a>
        <nav className="tc-nav">
          {items.map(item => (
            <a key={item.id}
               href="#"
               className={view === item.id ? 'active' : ''}
               onClick={(e) => { e.preventDefault(); setView(item.id); }}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="tc-lang">
          <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
