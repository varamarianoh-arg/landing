const steps = [
  { title: "Cargamos tu operación", desc: "Sedes, horarios, cómo sacar turno, entrega de resultados y obras sociales." },
  { title: "Lo conectamos a tus canales", desc: "Tu sitio y WhatsApp, sin tocar tu sistema de gestión." },
  { title: "Probás antes de publicar", desc: "Revisás respuestas de ejemplo y ajustás lo que quieras que diga distinto." },
];

const branches: { name: string; on?: boolean; kids?: string[] }[] = [
  { name: "Agente de IA" },
  { name: "Derivación a agente" },
  { name: "Envío de órdenes" },
  { name: "Obras sociales y prepagas", on: true, kids: ["Tabla de cobertura", "Notas para el bot"] },
  {
    name: "Datos generales del laboratorio",
    kids: ["Cómo sacar turno", "Entrega de resultados", "Medios de pago"],
  },
  { name: "Horarios de atención" },
  { name: "Sedes", kids: ["Sede Esquel", "Sede Trevelin"] },
];

const keywords = ["obra social", "prepaga", "cobertura", "carnet", "orden"];

const KnowledgeBase = () => (
  <section className="fb-block" id="conocimiento">
    <div className="fb-wrap">
      <div className="fb-sec-head">
        <p className="fb-mono fb-eyebrow">Base de conocimiento</p>
        <h2>Contesta con las reglas de tu laboratorio, no con las de uno genérico.</h2>
      </div>

      <ol className="fb-steps">
        {steps.map((s) => (
          <li key={s.title}>
            <b>{s.title}</b>
            <span>{s.desc}</span>
          </li>
        ))}
      </ol>

      <div className="fb-kb">
        <div className="fb-card">
          <div className="fb-card-head">
            <span className="fb-mono">Base de conocimiento</span>
            <span className="fb-seg" aria-label="Vista">
              <span>Lista</span>
              <span className="on">Mapa</span>
            </span>
          </div>
          <div className="fb-probe" aria-hidden="true">
            <span className="grow">Probar: escribí lo que diría un paciente…</span>
            <span>Intención: automática</span>
            <span className="mini">Probar</span>
          </div>
          <div className="fb-map">
            <div className="fb-root">Base de conocimiento</div>
            <ul className="fb-branches">
              {branches.map((b) => (
                <li key={b.name}>
                  <span className={`fb-node${b.on ? " on" : ""}`}>{b.name}</span>
                  {b.kids && (
                    <ul className="fb-kids">
                      {b.kids.map((k) => (
                        <li key={k}>{k}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fb-card" aria-label="Editor de un instructivo">
          <div className="fb-card-head">
            <span className="fb-mono">Instructivo</span>
            <span className="fb-mono">Ejemplo</span>
          </div>
          <div className="fb-editor">
            <div>
              <span className="fb-lbl">Título</span>
              <div className="fb-ebox">Obras sociales y prepagas</div>
            </div>
            <div>
              <span className="fb-lbl">Texto</span>
              <div className="fb-ebox tall">
                Aceptamos las obras sociales y prepagas de la tabla de cobertura. Pedí siempre la orden médica y el
                carnet vigente. Si la cobertura no figura, pasá la consulta a administración.
              </div>
            </div>
            <div>
              <span className="fb-lbl">
                Palabras clave (suben el puntaje de esta subdivisión cuando el paciente las dice)
              </span>
              <div className="fb-chips">
                {keywords.map((k) => (
                  <span key={k}>{k}</span>
                ))}
              </div>
            </div>
            <div className="fb-editor-actions" aria-hidden="true">
              <span>Cancelar</span>
              <span className="go">Guardar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default KnowledgeBase;
