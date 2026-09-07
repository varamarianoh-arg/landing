import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Activity, Receipt, Building2, Clock, TrendingUp, CheckCircle2, AlertTriangle, Wallet } from "lucide-react";

const AnimatedCounter = ({ target, duration = 2, prefix = "", suffix = "" }: { target: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [isInView, target, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const sampleRows = [
  { id: "FAC-4821", patient: "OSDE", test: "Liquidación Mar", status: "done", time: "08:12" },
  { id: "FAC-4822", patient: "PAMI", test: "Liquidación Feb", status: "done", time: "08:34" },
  { id: "FAC-4823", patient: "Swiss Medical", test: "Por facturar", status: "processing", time: "09:01" },
  { id: "FAC-4824", patient: "Medifé", test: "Rechazado", status: "processing", time: "09:15" },
  { id: "ORD-1025", patient: "Galeno", test: "Insumos", status: "pending", time: "09:30" },
  { id: "ORD-1026", patient: "Sancor Salud", test: "Pago rebotado", status: "overdue", time: "09:42" },
];

const statusConfig: Record<string, { label: string; color: string; dotColor: string }> = {
  done: { label: "Conciliado", color: "text-emerald-400", dotColor: "bg-emerald-400" },
  processing: { label: "En gestión", color: "text-amber-400", dotColor: "bg-amber-400" },
  pending: { label: "A vencer", color: "text-muted-foreground", dotColor: "bg-muted-foreground" },
  overdue: { label: "Vencida", color: "text-destructive", dotColor: "bg-destructive" },
};

const barData = [40, 65, 50, 80, 72, 90, 58, 85, 70, 95, 60, 78];

const DashboardPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="preview" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Vista previa</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mt-3 leading-tight">
            Tus finanzas, en una pantalla
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm md:text-base">
            Visualizá la facturación, el estado de cobranzas, cuentas por pagar y métricas de rentabilidad en tiempo real.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glow behind */}
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl" />

          {/* Browser chrome */}
          <div className="relative rounded-xl border border-border overflow-hidden bg-card/80 backdrop-blur-md shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/90">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="text-[11px] font-mono text-muted-foreground bg-secondary/60 px-4 py-1 rounded-md">
                  app.cenitcare.io/dashboard
                </div>
              </div>
              <div className="w-12" />
            </div>

            {/* Dashboard content */}
            <div className="p-4 md:p-6 space-y-5">
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Dashboard</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Lunes, 3 Mar 2026 — Turno Mañana</div>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-emerald-400 font-mono">En vivo</span>
                </div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: Receipt, label: "Facturado (Mes)", value: 4580, prefix: "$", suffix: "k", color: "text-primary" },
                  { icon: CheckCircle2, label: "Cobrado", value: 3120, prefix: "$", suffix: "k", color: "text-emerald-400" },
                  { icon: Clock, label: "Días de cobro", value: 42, prefix: "", suffix: " días", color: "text-amber-400" },
                  { icon: Building2, label: "Obras Sociales", value: 14, prefix: "", suffix: "", color: "text-blue-400" },
                ].map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="p-3 md:p-4 rounded-lg border border-border bg-secondary/30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <kpi.icon className={`w-3.5 h-3.5 ${kpi.color}`} />
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{kpi.label}</span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-foreground tabular-nums">
                      <AnimatedCounter target={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} duration={1.5} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Main content: chart + table */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* Mini chart */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="lg:col-span-2 p-4 rounded-lg border border-border bg-secondary/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      Evolución de Cobranzas
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">+12%</span>
                  </div>
                  <div className="flex items-end gap-1 h-28">
                    {barData.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-primary/30 hover:bg-primary/50 transition-colors relative group"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${h}%` } : {}}
                        transition={{ delay: 0.9 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          {h}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[9px] font-mono text-muted-foreground">
                    <span>Lun</span>
                    <span>Mié</span>
                    <span>Vie</span>
                    <span>Dom</span>
                  </div>
                </motion.div>

                {/* Table */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="lg:col-span-3 rounded-lg border border-border bg-secondary/20 overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground">Últimos movimientos</span>
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-destructive" />
                      <span className="text-[10px] text-destructive font-mono">1 alerta crítica</span>
                    </div>
                  </div>
                  <div className="divide-y divide-border/50">
                    {sampleRows.map((row, i) => {
                      const st = statusConfig[row.status];
                      return (
                        <motion.div
                          key={row.id}
                          initial={{ opacity: 0, x: 10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1 + i * 0.08, duration: 0.3 }}
                          className="flex items-center gap-3 px-4 py-2.5 text-[11px] hover:bg-secondary/30 transition-colors"
                        >
                          <span className="font-mono text-primary w-16">{row.id}</span>
                          <span className="text-foreground flex-1 truncate">{row.patient}</span>
                          <span className="text-muted-foreground hidden md:block w-28 truncate">{row.test}</span>
                          <span className="flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${st.dotColor}`} />
                            <span className={`${st.color} font-mono`}>{st.label}</span>
                          </span>
                          <span className="text-muted-foreground font-mono w-10 text-right">{row.time}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
