// Booking modal + confirmation
function BookingModal({ open, lang, t, onClose }) {
  const [done, setDone] = React.useState(false);
  React.useEffect(() => { if (open) setDone(false); }, [open]);

  if (!open) return null;

  const submit = (e) => { e.preventDefault(); setDone(true); };

  return (
    <div className="tc-modal" onClick={onClose}>
      <div className="tc-modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="tc-modal__close" onClick={onClose} aria-label="Close">×</button>

        {done ? (
          <div className="tc-confirm">
            <div className="tc-confirm__icon">✓</div>
            <h2>{t('book_done_title')}</h2>
            <p>{t('book_done_lead')}</p>
            <div className="tc-modal__actions" style={{ marginTop: 24 }}>
              <button className="tc-btn tc-btn--primary" onClick={onClose}>
                {lang === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="tc-modal__head">
              <h2>{t('book_title')}</h2>
              <div className="sub">{t('book_sub')}</div>
            </div>
            <form className="tc-form" onSubmit={submit}>
              <div className="tc-form__row">
                <div className="tc-field">
                  <label>{t('book_first')}</label>
                  <input type="text" required />
                </div>
                <div className="tc-field">
                  <label>{t('book_last')}</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="tc-field">
                <label>{t('book_email')}</label>
                <input type="email" placeholder="marie@example.com" required />
              </div>
              <div className="tc-field">
                <label>{t('book_phone')}</label>
                <input type="tel" placeholder="+41…" />
              </div>
              <div className="tc-field">
                <label>{t('book_note')}</label>
                <textarea rows="3" placeholder={lang === 'fr' ? 'Quelques mots, si tu le souhaites…' : 'A few words, if you wish…'}></textarea>
              </div>
              <label className="tc-checkbox">
                <input type="checkbox" required />
                <span>{t('book_consent')}</span>
              </label>
              <div className="tc-modal__actions">
                <button type="button" className="tc-btn tc-btn--secondary" onClick={onClose}>{t('book_cancel')}</button>
                <button type="submit" className="tc-btn tc-btn--primary">{t('book_submit')}</button>
              </div>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

window.BookingModal = BookingModal;
