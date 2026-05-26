// Booking modal — embeds the Tally form (form ID: dWkeKq).
// Tally handles fields, validation, submission, confirmation, the 12-seat cap,
// and notification emails to 10tra.and.co@gmail.com.
function BookingModal({ open, lang, t, onClose }) {
  if (!open) return null;

  const src = `https://tally.so/embed/dWkeKq?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <div className="tc-modal" onClick={onClose}>
      <div className="tc-modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="tc-modal__close" onClick={onClose} aria-label="Close">×</button>
        <iframe
          src={src}
          title={t('book_title')}
          width="100%"
          height="640"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ border: 0, display: 'block' }}
        />
      </div>
    </div>
  );
}

window.BookingModal = BookingModal;
