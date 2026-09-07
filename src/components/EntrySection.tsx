import { motion } from "framer-motion";

const EntrySection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-[520px_minmax(0,1fr)] items-stretch">
        {/* Left rail: brand panel */}
        <div className="relative overflow-hidden bg-[#0E141B] border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-center px-8 py-16 lg:py-0 lg:min-h-screen">
          <svg
            className="absolute pointer-events-none"
            style={{ left: 26, top: 66, width: 470, height: 470 }}
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <path d="M5 52.2 C10 51.7 14.5 21 23 13.4 L25.4 16.2 C17.5 22.4 10 53.3 5 53.8 Z" fill="#141B23" />
            <path d="M34.6 12.6 C43 16.4 50 29 58 39.2 L57.2 41.2 C49 32 42 19 33.8 15.4 Z" fill="#141B23" />
            <circle cx="30" cy="13" r="5.4" fill="#16302A" />
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col gap-6"
          >
            <span
              className="text-foreground"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(48px, 7vw, 85px)",
                fontWeight: 700,
                letterSpacing: "-0.045em",
                lineHeight: 0.92,
              }}
            >
              C
              <span className="relative inline-block">
                é
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 text-primary"
                  style={{ clipPath: "inset(0 0 68% 0)" }}
                >
                  é
                </span>
              </span>
              nit
              <br />
              Care
            </span>
            <span className="font-mono text-xs tracking-[0.16em] uppercase text-muted-foreground max-w-[300px] leading-relaxed">
              Software para laboratorios de análisis clínicos
            </span>
          </motion.div>
        </div>

        {/* Right: headline + copy */}
        <div className="flex flex-col justify-center px-6 md:px-14 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-foreground font-bold text-4xl md:text-6xl leading-[1.02]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.038em" }}
          >
            Hecho por un laboratorio,
            <br />
            para laboratorios.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-primary font-medium text-xl md:text-2xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Menos administración, más laboratorio.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed"
          >
            Cénit OS ordena la operación adentro: sedes, determinaciones, flujo de trabajo, facturación.
            FoxieBot atiende a los pacientes afuera: turnos, resultados y las preguntas que se repiten todos los días.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            <a
              href="#contacto"
              className="px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors shadow-[var(--shadow-glow)]"
            >
              Agendar demo gratuita
            </a>
            <a
              href="#diferencial"
              className="px-6 py-4 rounded-lg border border-border text-foreground font-medium text-base hover:bg-card transition-colors"
            >
              Cómo implementamos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3 mt-10 pt-6 border-t border-border max-w-xl"
          >
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-muted-foreground">
              En uso en Laboratorio Gerosa — sedes Esquel y Trevelin.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EntrySection;
