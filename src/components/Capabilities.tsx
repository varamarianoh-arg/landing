const capabilities = [
  {
    tag: "24/7",
    title: "Atención instantánea",
    desc: "Responde consultas de pacientes a cualquier hora, sin tiempos de espera ni cola en el mostrador.",
  },
  {
    tag: "BASE",
    title: "Base de conocimiento editable",
    desc: "Tus sedes, horarios, medios de pago y reglas por obra social, ordenados en un mapa que tu equipo puede cambiar.",
  },
  {
    tag: "PRUEBA",
    title: "Probalo antes de publicar",
    desc: "Escribí lo que diría un paciente y mirá qué responde FoxieBot, antes de que lo vea alguien.",
  },
  {
    tag: "AGENTES",
    title: "Traspaso a una persona",
    desc: "Cuando la consulta pide criterio profesional, la deriva a tu equipo con la conversación completa.",
  },
  {
    tag: "MÉTRICAS",
    title: "Los números del día",
    desc: "Chats atendidos y tiempo de respuesta promedio, a la vista apenas abrís el panel.",
  },
  {
    tag: "CONTROL",
    title: "Auditoría, usuarios y costos",
    desc: "Revisá qué respondió el bot, quién tiene acceso y cuánto cuesta atender.",
  },
];

const Capabilities = () => (
  <section className="fb-block" id="capacidades">
    <div className="fb-wrap">
      <div className="fb-sec-head">
        <p className="fb-mono fb-eyebrow">Qué hace FoxieBot</p>
        <h2>Seis tareas que hoy te ocupan el teléfono.</h2>
      </div>
      <ul className="fb-caps">
        {capabilities.map((c) => (
          <li key={c.tag}>
            <span className="fb-tag">{c.tag}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Capabilities;
