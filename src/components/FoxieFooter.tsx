import { SecurityModal } from "./SecurityModal";
import { TermsModal } from "./TermsModal";

const FoxieFooter = () => (
  <footer className="fb-footer">
    <div className="fb-wrap fb-foot">
      <span>
        <strong>CénitCare</strong> © 2026
      </span>
      <nav aria-label="Pie">
        <TermsModal>
          <button type="button">Términos</button>
        </TermsModal>
        <SecurityModal>
          <button type="button">Seguridad</button>
        </SecurityModal>
        <a href="#">Soporte</a>
      </nav>
    </div>
  </footer>
);

export default FoxieFooter;
