import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentials = [
  {
    title: "No es un ERP genérico",
    desc: "Construido por el laboratorio para laboratorios. Cada función pensada para tu flujo real.",
    visual: "🧩",
  },
  {
    title: "Implementación en 72hs",
    desc: "Sin meses de configuración. Migración asistida, capacitación incluida y soporte dedicado desde el día uno.",
    visual: "⚡",
  },
  {
    title: "Información es control",
    desc: "Conocer las métricas de tu laboratorio permite tomar decisiones informadas y estratégicas.",
    visual: "📈",
  },
];

const DifferentialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferencial" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">¿Por qué FoxieLab?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 max-w-lg leading-tight">
            Diferente por diseño.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/30 p-8 flex flex-col justify-between min-h-[280px] group hover:border-primary/20 transition-colors"
            >
              <div>
                <span className="text-4xl mb-6 block">{d.visual}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
