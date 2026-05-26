// Meditations (sage surface)
const MEDITATIONS = [
  { id: 'm1', title: { fr: 'Présence à l\u2019arrivée', en: 'Presence on arrival' }, dur: '12:00' },
  { id: 'm2', title: { fr: 'Respiration longue', en: 'Long breath' }, dur: '08:30' },
  { id: 'm3', title: { fr: 'Écouter le seuil', en: 'Listening at the threshold' }, dur: '15:20' },
  { id: 'm4', title: { fr: 'Reposer l\u2019attention', en: 'Resting attention' }, dur: '06:45' },
];

function MeditationPlayer({ m, lang, playing, onPlay }) {
  return (
    <div className="tc-med">
      <button className="play" onClick={onPlay}>{playing ? '❚❚' : '▶'}</button>
      <div className="info">
        <div className="eyebrow">{lang === 'fr' ? 'Méditation guidée' : 'Guided meditation'}</div>
        <h4>{m.title[lang]}</h4>
      </div>
      <span className="duration">{m.dur}</span>
      <a className="download" href="#" onClick={(e) => e.preventDefault()}>{lang === 'fr' ? 'Télécharger' : 'Download'}</a>
    </div>
  );
}

function Meditations({ t, lang }) {
  const [playingId, setPlayingId] = React.useState(null);
  return (
    <section className="tc-section tc-view">
      <div className="tc-sec-head">
        <div className="tc-sec-head__copy">
          <span className="tc-eyebrow">{t('med_title')}</span>
          <h2 className="tc-h2">{lang === 'fr' ? <span>De courtes pratiques,<br/><span className="tc-italic-accent">à emporter.</span></span> : <span>Short practices,<br/><span className="tc-italic-accent">to take away.</span></span>}</h2>
          <p className="tc-lead">{t('med_lead')}</p>
        </div>
      </div>
      <div className="tc-meditations">
        {MEDITATIONS.map(m => (
          <MeditationPlayer key={m.id} m={m} lang={lang}
            playing={playingId === m.id}
            onPlay={() => setPlayingId(playingId === m.id ? null : m.id)} />
        ))}
      </div>
    </section>
  );
}

window.Meditations = Meditations;
window.MeditationPlayer = MeditationPlayer;
