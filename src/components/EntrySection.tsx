import { motion } from "framer-motion";

const EntrySection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-64 overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            Software de gestión clínica
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-foreground">Tu sistema de gestión</span>
          <br />
          <span className="text-gradient">Designed by the lab for the lab.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          FoxieLab optimiza tus procesos de Gestión.
          Control total del flujo de dinero de tu laboratorio.
          <br className="hidden md:block" />
          <span className="text-foreground font-medium"> Sin papeles. Sin planillas complicadas. Sin errores.</span>
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-[var(--shadow-glow)]"
          >
            Agendar demo gratuita
          </a>
          <a
            href="#producto"
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-card transition-colors"
          >
            Ver cómo funciona
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-12 text-center"
        >
          {[
            { value: "100%", label: "Gestion centralizada" },
            { value: "-40%", label: "Tiempo en tareas manuales" },
            { value: "+50%", label: "Aumento de productividad" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary/60"
          />
        </div>
      </motion.div>
    </section >
  );
};

export default EntrySection;
