// FlyerModal — shows the full vertical flyer in a lightbox-style modal.
function FlyerModal({ open, lang, onClose }) {
  if (!open) return null;
  return (
    <div className="tc-modal tc-modal--flyer" onClick={onClose}>
      <div className="tc-modal__flyer-card" onClick={(e) => e.stopPropagation()}>
        <button className="tc-modal__close" onClick={onClose} aria-label="Close">×</button>
        <img
          src="../../assets/flyer-soiree-decouverte.jpg"
          alt={lang === 'fr' ? 'Flyer — Soirée Découverte Tantra' : 'Flyer — Tantra Discovery Evening'}
        />
        <div className="tc-modal__flyer-actions">
          <a
            className="tc-btn tc-btn--secondary"
            href="../../assets/flyer-soiree-decouverte.jpg"
            download="Tantra-Co-Soiree-Decouverte.jpg"
          >
            {lang === 'fr' ? 'Télécharger le flyer' : 'Download the flyer'}
          </a>
        </div>
      </div>
    </div>
  );
}

window.FlyerModal = FlyerModal;
