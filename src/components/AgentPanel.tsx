type Handler = "ia" | "ag";

const conversations: { time: string; title: string; detail: string; by: Handler }[] = [
  { time: "21:47", title: "Ayuno para hemograma y glucemia", detail: "Turno reservado en Sede Esquel", by: "ia" },
  { time: "22:15", title: "¿Atienden sábados en Trevelin?", detail: "Horario de la sede informado", by: "ia" },
  { time: "23:02", title: "Cambio de turno de extracción", detail: "Reprogramado para el jueves 08/10", by: "ia" },
  { time: "00:40", title: "Preparación para curva de tolerancia a la glucosa", detail: "Indicaciones enviadas", by: "ia" },
  { time: "05:58", title: "Pedido de resultados", detail: "Enviados tras validar DNI y fecha de nacimiento", by: "ia" },
  {
    time: "06:31",
    title: "Consulta por un valor de TSH de 2.41 µUI/mL",
    detail: "Interpretar un resultado requiere a una bioquímica",
    by: "ag",
  },
  {
    time: "06:44",
    title: "Cobertura de la obra social para un estudio",
    detail: "Pasa a administración con la orden adjunta",
    by: "ag",
  },
];

const AgentPanel = () => (
  <section className="fb-block" id="panel">
    <div className="fb-wrap">
      <div className="fb-sec-head">
        <p className="fb-mono fb-eyebrow">Panel de agentes</p>
        <h2>Lo que FoxieBot resolvió anoche.</h2>
        <p>
          Cada conversación queda en el panel con su resultado. Lo que la IA resuelve no llega a tu equipo; lo que
          necesita criterio profesional pasa a un agente con el contexto completo.
        </p>
      </div>

      <div className="fb-panel">
        <div className="fb-card">
          <div className="fb-card-head">
            <span className="fb-mono">Anoche · 21:00 a 07:00</span>
            <div className="fb-filters" aria-label="Filtros del panel">
              <span className="fb-fchip on">
                Todas <b>27</b>
              </span>
              <span className="fb-fchip">
                IA <b>24</b>
              </span>
              <span className="fb-fchip">
                Agentes <b>3</b>
              </span>
            </div>
          </div>
          <ol className="fb-log">
            {conversations.map((c) => (
              <li key={c.time}>
                <time>{c.time}</time>
                <span className="fb-what">
                  {c.title}
                  <small>{c.detail}</small>
                </span>
                <span className={`fb-pill ${c.by}`}>{c.by === "ia" ? "Resuelta por IA" : "Pasó a agente"}</span>
              </li>
            ))}
          </ol>
          <div className="fb-card-foot fb-mono">Datos de ejemplo</div>
        </div>

        <div className="fb-aside">
          <p className="fb-mono">Dashboard rápido del día</p>
          <div className="fb-metric">
            <span>Chats del día</span>
            <strong>27</strong>
          </div>
          <div className="fb-metric">
            <span>Respuesta promedio</span>
            <strong>6 s</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgentPanel;
