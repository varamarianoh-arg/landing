import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Receipt, LineChart, Building2 } from "lucide-react";

const modules = [
  {
    title: "Gestión de Cobranzas a Obras Sociales",
    desc: "Control total sobre la facturación. Seguimiento detallado de presentaciones, tiempos estimados de cobro, conciliación de pagos y registro de débitos.",
    icon: Wallet,
    className: "md:col-span-2 md:row-span-2",
    accent: "bg-primary/5 border-primary/20",
  },
  {
    title: "Cuentas por Pagar",
    desc: "Centralizá facturas de proveedores, controlá próximos vencimientos y programá órdenes de pago.",
    icon: Receipt,
    className: "md:col-span-1 md:row-span-1",
    accent: "bg-card/40 border-border",
  },
  {
    title: "Control de Tesorería",
    desc: "Visibilidad total sobre cajas chicas, cuentas bancarias y flujo de fondos en un solo lugar.",
    icon: Building2,
    className: "md:col-span-1 md:row-span-1",
    accent: "bg-card/40 border-border",
  },
  {
    title: "Rentabilidad y Analítica Financiera",
    desc: "Tableros de control precisos sobre la salud financiera de tu empresa. Proyecciones y análisis de márgenes operativos para tomar decisiones reales y estratégicas.",
    icon: LineChart,
    className: "md:col-span-3",
    accent: "bg-gradient-to-r from-primary/10 to-transparent border-primary/20",
  },
];

const FlowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gestion-financiera" ref={ref} className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Ecosistema Financiero</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight max-w-3xl mx-auto">
            El control real de tus ingresos y egresos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className={`relative overflow-hidden rounded-2xl border p-6 flex flex-col group hover:border-primary/40 transition-colors ${mod.className} ${mod.accent}`}
            >
              <div className="mb-4 w-10 h-10 rounded-xl bg-background/50 border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <mod.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{mod.title}</h3>
              <p className="text-muted-foreground text-sm leading-snug max-w-lg">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
