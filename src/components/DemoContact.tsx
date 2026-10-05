import { useState } from "react";

const DemoContact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/myknggpr", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        setError(data?.error ?? "No pudimos enviar tu solicitud. Probá de nuevo en unos minutos.");
      }
    } catch {
      setError("No hay conexión para enviar el formulario. Revisá tu internet y probá de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="fb-block" id="contacto">
      <div className="fb-wrap fb-contact">
        <div className="fb-sec-head">
          <p className="fb-mono fb-eyebrow">Demo</p>
          <h2>Veamos FoxieBot con los datos de tu laboratorio.</h2>
          <p>Una demo de 20 minutos, sin compromiso. Cargamos una de tus sedes y probamos conversaciones reales.</p>
        </div>

        {submitted ? (
          <div className="fb-sent" role="status">
            <h3>¡Recibimos tu solicitud!</h3>
            <p>Te contactamos dentro de las próximas 24 hs.</p>
          </div>
        ) : (
          <form className="fb-form" onSubmit={handleSubmit}>
            <div className="fb-two">
              <div className="fb-field">
                <label htmlFor="f-nombre">Nombre</label>
                <input id="f-nombre" name="name" type="text" required placeholder="Tu nombre" autoComplete="name" />
              </div>
              <div className="fb-field">
                <label htmlFor="f-email">Email</label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@laboratorio.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="fb-field">
              <label htmlFor="f-lab">Laboratorio</label>
              <input id="f-lab" name="laboratorio" type="text" placeholder="Nombre del laboratorio" />
            </div>
            <div className="fb-field">
              <label htmlFor="f-msg">Mensaje (opcional)</label>
              <textarea id="f-msg" name="message" placeholder="Contanos qué consultas se repiten más…" />
            </div>

            {/* Honeypot: bots fill it, people never see it */}
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            {error && (
              <p className="fb-error" role="alert">
                {error}
              </p>
            )}
            <button className="fb-btn fb-btn-primary" type="submit" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Solicitar demo"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoContact;
