// App — top-level state, view router
function App() {
  const [lang, setLang] = React.useState('fr');
  const [view, setView] = React.useState('home');
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const [flyerOpen, setFlyerOpen] = React.useState(false);
  const t = useT(lang);

  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [view]);

  const onBook = () => setBookingOpen(true);
  const onFlyer = () => setFlyerOpen(true);

  return (
    <React.Fragment>
      <Header lang={lang} setLang={setLang} view={view} setView={setView} t={t} />
      <main>
        {view === 'home' && (
          <React.Fragment>
            <Hero t={t} lang={lang} onBook={onBook} setView={setView} onFlyer={onFlyer} />
            <EventsList t={t} lang={lang} onBook={onBook} compact />
            <Articles t={t} lang={lang} compact />
            <Meditations t={t} lang={lang} />
          </React.Fragment>
        )}
        {view === 'seminars' && <EventsList t={t} lang={lang} onBook={onBook} />}
        {view === 'seminar-detail' && <SeminarDetail lang={lang} t={t} onBook={onBook} onFlyer={onFlyer} setView={setView} />}
        {view === 'articles' && <Articles t={t} lang={lang} />}
        {view === 'meditations' && <Meditations t={t} lang={lang} />}
        {view === 'about' && <About lang={lang} t={t} onBook={onBook} />}
        {view === 'article-single' && <ArticleView lang={lang} setView={setView} />}
      </main>
      <Footer t={t} lang={lang} />
      <BookingModal open={bookingOpen} lang={lang} t={t} onClose={() => setBookingOpen(false)} />
      <FlyerModal open={flyerOpen} lang={lang} onClose={() => setFlyerOpen(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
