import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();

  // Transform values based on scroll position (0px to 150px)
  const logoHeight = useTransform(scrollY, [0, 150], ["12rem", "8rem"]);
  const textOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const textMarginLeft = useTransform(scrollY, [0, 150], ["-2rem", "1rem"]);
  const headerBg = useTransform(scrollY, [0, 150], ["rgba(0,0,0,0)", "rgba(0,0,0,0.15)"]);
  const headerBackdrop = useTransform(scrollY, [0, 150], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.nav
      style={{ backgroundColor: headerBg, backdropFilter: headerBackdrop }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-colors"
    >
      <div className="flex items-center">
        <motion.img
          src="/fox-logo-true-alpha.png"
          alt="EkkoCare Logo"
          style={{ height: logoHeight }}
          className="w-auto object-contain py-2"
        />
        <motion.span
          style={{ opacity: textOpacity, marginLeft: textMarginLeft }}
          className="text-foreground font-semibold text-xl sm:text-3xl tracking-tight"
        >
          EkkoCare
        </motion.span>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 text-sm text-muted-foreground bg-background/50 backdrop-blur-md px-6 py-3 rounded-full border border-border/50">
        <a href="#productos" className="hover:text-foreground transition-colors">Productos</a>
        <a href="#gestion-financiera" className="hover:text-foreground transition-colors">Flujo</a>
        <a href="#chatbot" className="hover:text-foreground transition-colors">Chatbot</a>
        <a href="#diferencial" className="hover:text-foreground transition-colors">Diferencial</a>
        <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
      </div>

      <a href="#contacto" className="px-5 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-[var(--shadow-glow)]">
        Solicitar demo
      </a>
    </motion.nav>
  );
};

export default Navbar;
