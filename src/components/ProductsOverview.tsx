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
}

const products: Product[] = [
  {
    tag: "01 — GESTIÓN",
    name: "Foxie ERP",
    tagline: "Tu operación, en un solo lugar.",
    description:
      "Facturación, cobranzas, cuentas por pagar y métricas conectadas desde el primer día, pensado para el flujo real de una empresa de salud.",
    features: ["Panel unificado en tiempo real", "Roles y permisos por equipo", "Reportes exportables"],
    cta: "Ver Foxie ERP",
    href: "#erp",
    icon: ClipboardList,
  },
  {
    tag: "02 — ATENCIÓN",
    name: "Foxie Chat",
    tagline: "Respuestas al instante, sin perder el toque humano.",
    description:
      "Un chatbot con IA que atiende consultas de pacientes, agenda turnos y escala a tu equipo solo cuando hace falta.",
    features: ["Sugerencias con IA en vivo", "Traspaso a agente humano", "Integrable en minutos"],
    cta: "Ver Foxie Chat",
    href: "#chatbot",
    icon: MessageSquareText,
  },
];

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
    <section id="productos" ref={ref} className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 max-w-2xl"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Nuestros productos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Dos productos, un mismo objetivo: simplificar tu empresa de salud.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.a
              key={product.name}
              href={product.href}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 md:p-10 min-h-[380px] overflow-hidden hover:border-primary/40 hover:bg-card/70 transition-all duration-300"
            >
              <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest">{product.tag}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{product.name}</h3>
                <p className="text-foreground/80 font-medium mt-2">{product.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">{product.description}</p>

                <ul className="mt-6 flex flex-col gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {product.cta}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
