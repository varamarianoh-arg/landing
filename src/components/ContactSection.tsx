import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Reemplazar esta URL con tu endpoint real de Formspree (ej. https://formspree.io/f/xyzqwert)
      const response = await fetch("https://formspree.io/f/myknggpr", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => null);
        if (errorData && errorData.error) {
          alert("Error de Formspree: " + errorData.error);
        } else {
          alert("Ocurrió un error. Si acabas de crear el formulario, recuerda revisar tu mail y hacer clic en 'Activate Form' antes de probarlo.");
        }
      }
    } catch (error) {
      alert("Hubo un error de conexión al enviar el formulario.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" ref={ref} className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
            ¿Listo para modernizar
            <br />
            <span className="text-gradient">tu laboratorio?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Agendá una demo personalizada de 20 minutos. Sin compromiso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {submitted ? (
            <div className="p-8 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">¡Recibimos tu solicitud!</h3>
              <p className="text-muted-foreground">Te contactaremos dentro de las próximas 24hs.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm text-left space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="tu@laboratorio.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Laboratorio</label>
                <input
                  type="text"
                  name="laboratorio"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Nombre del laboratorio"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Mensaje (opcional)</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Contanos qué necesitás..."
                />
              </div>

              {/* HONEYPOT - Prevents spam bots from submitting */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-[var(--shadow-glow)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Solicitar demo"}
                {!isLoading && <Send className="w-4 h-4" />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
