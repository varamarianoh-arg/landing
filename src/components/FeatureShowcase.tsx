import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FlaskConical, BarChart3, FileCheck, Zap, Shield, Blocks, Clock } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Seguimiento de facturación de obras sociales",
    desc: "Trazabilidad completa desde la presentación de la factura hasta su cobro. Alertas inteligentes.",
    tag: "CORE",
  },
  {
    icon: BarChart3,
    title: "Carga de facturas a proveedores",
    desc: "Lleva un registro detallado de pagos y pedidos.",
    tag: "INSIGHTS",
  },
  {
    icon: FileCheck,
    title: "Gestión de insumos",
    desc: "Llevá control de tus insumos y generá un pedido digital.",
    tag: "OUTPUT",
  },
  {
    icon: Zap,
    title: "Integraciones",
    desc: "Conectá con los sistemas que ya usa tu empresa, LIS y CRM.",
    tag: "CONNECT",
  },
  {
    icon: Blocks,
    title: "Sistema modular",
    desc: "Contratá solo lo que tu empresa necesita.",
    tag: "FLEXIBLE",
  },
  {
    icon: Clock,
    title: "Métricas en tiempo real",
    desc: "Conoce los indicadores de tu empresa minuto a minuto.",
    tag: "SPEED",
  },
];

const FeatureShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="erp" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Ekko OS — Capacidades</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 max-w-xl leading-tight">
            Todo lo que la gestión de tu empresa necesita.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group relative p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/70 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest">{f.tag}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
