import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, MessageSquareText, ArrowUpRight } from "lucide-react";

interface Product {
  tag: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  icon: typeof ClipboardList;
  palette: "cenit" | "primary";
}

const products: Product[] = [
  {
    tag: "01 — GESTIÓN",
    name: "Cénit OS",
    tagline: "Tu operación, en un solo lugar.",
    description:
      "Facturación, cobranzas, cuentas por pagar y métricas conectadas desde el primer día, pensado para el flujo real de un laboratorio.",
    features: ["Panel unificado en tiempo real", "Roles y permisos por equipo", "Reportes exportables"],
    cta: "Ver Cénit OS",
    href: "#erp",
    icon: ClipboardList,
    palette: "cenit",
  },
  {
    tag: "02 — ATENCIÓN",
    name: "FoxieBot by Cénit",
    tagline: "Respuestas al instante, sin perder el toque humano.",
    description:
      "Un chatbot con IA que atiende consultas de pacientes, agenda turnos y escala a tu equipo solo cuando hace falta.",
    features: ["Sugerencias con IA en vivo", "Traspaso a agente humano", "Integrable en minutos"],
    cta: "Ver FoxieBot",
    href: "#chatbot",
    icon: MessageSquareText,
    palette: "primary",
  },
];

// Tailwind classes are per-palette literals (not dynamically built) so the JIT compiler can see them.
const paletteClasses = {
  cenit: {
    border: "hover:border-[hsl(var(--cenit))]/40",
    glow: "bg-[hsl(var(--cenit))]/10",
    iconBg: "bg-[hsl(var(--cenit))]/10",
    icon: "text-[hsl(var(--cenit))]",
    dot: "bg-[hsl(var(--cenit))]",
    cta: "text-[hsl(var(--cenit))]",
  },
  primary: {
    border: "hover:border-primary/40",
    glow: "bg-primary/10",
    iconBg: "bg-primary/10",
    icon: "text-primary",
    dot: "bg-primary",
    cta: "text-primary",
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

const ProductsOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="productos" ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Diagonal wash: Cénit blue (top-left) -> FoxieBot teal (bottom-right) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--cenit) / 0.16) 0%, hsl(var(--cenit) / 0.07) 35%, transparent 50%, hsl(var(--primary) / 0.07) 65%, hsl(var(--primary) / 0.16) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 max-w-2xl"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Nuestros productos</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mt-3 leading-tight">
            Dos productos, un mismo objetivo: simplificar tu laboratorio.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => {
            const c = paletteClasses[product.palette];
            return (
              <motion.a
                key={product.name}
                href={product.href}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                className={`group relative flex flex-col justify-between rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 md:p-10 min-h-[380px] overflow-hidden transition-all duration-300 hover:bg-card/70 ${c.border}`}
              >
                <div
                  className={`absolute -right-16 -top-16 w-56 h-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${c.glow}`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.iconBg}`}>
                      <product.icon className={`w-5 h-5 ${c.icon}`} />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground tracking-widest">{product.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{product.name}</h3>
                  <p className="text-foreground/80 font-medium mt-2">{product.tagline}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">{product.description}</p>

                  <ul className="mt-6 flex flex-col gap-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold ${c.cta}`}>
                  {product.cta}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
