import { SecurityModal } from "./SecurityModal";
import { TermsModal } from "./TermsModal";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/fox-logo-true-alpha.png" alt="EkkoCare Logo" className="h-6 w-auto object-contain" />
          <span className="text-sm font-semibold text-foreground tracking-tight">EkkoCare © 2026</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <TermsModal>
            <button className="hover:text-foreground transition-colors cursor-pointer">Términos</button>
          </TermsModal>
          <SecurityModal>
            <button className="hover:text-foreground transition-colors cursor-pointer">Seguridad</button>
          </SecurityModal>
          <a href="#" className="hover:text-foreground transition-colors">Soporte</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
