import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            Ecosystem Health Tech
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-foreground">Gestión y atención,</span>
          <br />
          <span className="text-gradient">en un solo ecosistema.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Redefiniendo la gestión integral de la salud mediante soluciones digitales interconectadas e inteligentes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          CénitCare combina Cénit OS, el sistema que ordena la operación de tu empresa de salud,
          con FoxieBot, el chatbot que atiende a tus pacientes.
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
            href="#productos"
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-card transition-colors"
          >
            Ver productos
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
