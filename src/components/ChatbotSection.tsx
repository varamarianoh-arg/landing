import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Sparkles, CalendarClock, UserCheck, Plug, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Atención instantánea",
    desc: "Responde consultas de pacientes y clientes las 24 horas, sin tiempos de espera.",
    tag: "CORE",
  },
  {
    icon: Sparkles,
    title: "Sugerencias con IA en vivo",
    desc: "Entrenado con el conocimiento de tu empresa para dar respuestas precisas desde el día uno.",
    tag: "INSIGHTS",
  },
  {
    icon: CalendarClock,
    title: "Agenda de turnos",
    desc: "Coordina y confirma turnos automáticamente, integrado a tu operación diaria.",
    tag: "OUTPUT",
  },
  {
    icon: UserCheck,
    title: "Traspaso a agente humano",
    desc: "Escala la conversación a tu equipo solo cuando realmente hace falta.",
    tag: "CONNECT",
  },
  {
    icon: Plug,
    title: "Integrable en minutos",
    desc: "Se conecta a tu sitio, WhatsApp o los canales que ya usa tu empresa.",
    tag: "FLEXIBLE",
  },
  {
    icon: ShieldCheck,
    title: "Datos protegidos",
    desc: "Maneja información sensible de salud con los resguardos que ese contexto exige.",
    tag: "SECURITY",
  },
];

const ChatbotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chatbot" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">FoxieBot by Ekko</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 max-w-xl leading-tight">
            Un chatbot que atiende como lo haría tu mejor persona de mostrador.
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

export default ChatbotSection;
