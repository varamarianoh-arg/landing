const FoxieHero = () => (
  <section className="fb-hero">
    <div className="fb-wrap fb-hero-grid">
      <div className="fb-hero-copy">
        <p className="fb-mono fb-eyebrow">Chatbot para laboratorios de análisis clínicos</p>
        <h1>El paciente pregunta, FoxieBot contesta.</h1>
        <p className="fb-tagline">Menos teléfono, más laboratorio.</p>
        <p className="fb-lead">
          FoxieBot atiende a los pacientes afuera: turnos de extracción, indicaciones de ayuno, entrega de resultados y
          las preguntas que se repiten todos los días. Cuando una consulta necesita criterio profesional, la pasa a tu
          equipo con la conversación completa.
        </p>
        <div className="fb-cta-row">
          <a className="fb-btn fb-btn-primary" href="#contacto">
            Agendar demo gratuita
          </a>
          <a className="fb-btn fb-btn-ghost" href="#panel">
            Ver qué resolvió anoche
          </a>
        </div>
        <p className="fb-proof">
          Se entrena con los datos de tu laboratorio: sedes, horarios y preparación por determinación.
        </p>
      </div>

      <div className="fb-chat" role="group" aria-label="Ejemplo de conversación con FoxieBot">
        <div className="fb-chat-head">
          <span className="fb-avatar" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.2 3.6a.5.5 0 0 1-.8-.4V16h-.5A2.5 2.5 0 0 1 4 13.5v-8Z"
                fill="#fff"
              />
              <circle cx="9" cy="9.5" r="1.1" fill="#8E5BD9" />
              <circle cx="12" cy="9.5" r="1.1" fill="#8E5BD9" />
              <circle cx="15" cy="9.5" r="1.1" fill="#8E5BD9" />
            </svg>
          </span>
          <div>
            <strong>FoxieBot</strong>
            <span className="fb-status">En línea · responde en segundos</span>
          </div>
          <span className="fb-chan">WhatsApp</span>
        </div>

        <div className="fb-chat-body">
          <div className="fb-row pat">
            <div className="fb-msg">Hola, ¿tengo que ir en ayunas si me pidieron hemograma y glucemia?</div>
            <span className="fb-time">21:47</span>
          </div>
          <div className="fb-row bot">
            <div className="fb-msg">
              Hola, Marta. Para la glucemia sí: 8 horas de ayuno, solo agua. El hemograma no lo requiere. ¿Querés que te
              reserve un turno de extracción?
            </div>
            <span className="fb-time">21:47</span>
          </div>
          <div className="fb-row pat">
            <div className="fb-msg">Sí, mañana temprano en Esquel.</div>
            <span className="fb-time">21:48</span>
          </div>
          <div className="fb-row bot">
            <div className="fb-msg">
              Tengo estos horarios para mañana en Sede Esquel:
              <div className="fb-slots" aria-label="Horarios disponibles">
                <span className="fb-slot">07:30</span>
                <span className="fb-slot on">08:00</span>
                <span className="fb-slot">08:15</span>
              </div>
            </div>
            <span className="fb-time">21:48</span>
          </div>
          <div className="fb-row bot">
            <div className="fb-ticket">
              <div className="fb-ticket-head fb-mono">Turno confirmado</div>
              <dl>
                <dt>Cuándo</dt>
                <dd>Martes 06/10 · 08:00</dd>
                <dt>Dónde</dt>
                <dd>Sede Esquel</dd>
                <dt>Llevá</dt>
                <dd>Orden médica y DNI</dd>
              </dl>
            </div>
            <span className="fb-time">21:49 · te aviso de nuevo mañana a las 20:00</span>
          </div>
          <div className="fb-row bot" aria-hidden="true">
            <span className="fb-typing">
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>

        <div className="fb-chat-input" aria-hidden="true">
          <span>Escribí tu consulta…</span>
          <span className="fb-send">↑</span>
        </div>
      </div>
    </div>
  </section>
);

export default FoxieHero;
