const FoxieNav = () => (
  <header className="fb-wrap fb-nav">
    <a className="fb-brand" href="#top" aria-label="FoxieBot by Cénit">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M5 52.2 C10 51.7 14.5 21 23 13.4 L25.4 16.2 C17.5 22.4 10 53.3 5 53.8 Z" fill="#3F2A1B" />
        <path d="M34.6 12.6 C43 16.4 50 29 58 39.2 L57.2 41.2 C49 32 42 19 33.8 15.4 Z" fill="#3F2A1B" />
        <circle cx="30" cy="13" r="5.4" fill="#8E5BD9" />
      </svg>
      <span className="fb-brand-name">FoxieBot</span>
      <span className="fb-brand-by">by Cénit</span>
    </a>
    <nav className="fb-nav-links" aria-label="Principal">
      <a href="#panel">Panel de agentes</a>
      <a href="#capacidades">Capacidades</a>
      <a href="#conocimiento">Base de conocimiento</a>
    </nav>
    <a className="fb-nav-cta" href="#contacto">
      Agendar demo
    </a>
  </header>
);

export default FoxieNav;
