// Footer with newsletter
function Footer({ t, lang }) {
  return (
    <footer className="tc-footer">
      <div className="tc-footer__inner">
        <div>
          <div className="tc-footer__wordmark">Tantra &amp; Co.</div>
          <p>{t('footer_newsletter')}</p>
          <div className="tc-footer__newsletter">
            <input type="email" placeholder={lang === 'fr' ? 'Adresse e-mail' : 'Email address'} />
            <button>{t('footer_subscribe')}</button>
          </div>
        </div>
        <div>
          <h4>{lang === 'fr' ? 'Explorer' : 'Explore'}</h4>
          <ul>
            <li><a href="#">{t('nav_seminars')}</a></li>
            <li><a href="#">{t('nav_articles')}</a></li>
            <li><a href="#">{t('nav_meditations')}</a></li>
            <li><a href="#">{t('nav_about')}</a></li>
          </ul>
        </div>
        <div>
          <h4>{lang === 'fr' ? 'Contact' : 'Contact'}</h4>
          <ul>
            <li><a href="mailto:bonjour@tantraandco.ch">bonjour@tantraandco.ch</a></li>
            <li><a href="#">Lausanne · Suisse</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="tc-footer__bottom">
        <span>{t('footer_rights')}</span>
        <span>
          <a href="#" style={{ marginRight: 24 }}>{t('footer_legal')}</a>
          <a href="#">{lang === 'fr' ? 'Confidentialité' : 'Privacy'}</a>
        </span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
