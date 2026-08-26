import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Scale } from "lucide-react";

export function TermsModal({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-4 border-b border-border bg-card/50">
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                        <Scale className="w-6 h-6 text-primary" />
                        Términos y Condiciones (On-Premise)
                    </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[calc(85vh-100px)] p-6">
                    <div className="space-y-8 text-sm text-foreground/80 leading-relaxed">

                        {/* Introducción */}
                        <p className="text-muted-foreground italic">
                            Al instalar y utilizar el software FoxieLab, usted y el laboratorio que representa aceptan someterse a los siguientes términos y condiciones de uso para software de instalación local (On-Premise).
                        </p>

                        {/* Licencia */}
                        <section>
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                1. Concesión de la Licencia
                            </h3>
                            <p className="mb-2">FoxieLab le otorga una licencia limitada, no exclusiva, intransferible y revocable para:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-primary/50">
                                <li>Instalar el sistema en un (1) servidor físico o virtual propiedad de, o arrendado de forma exclusiva por, su laboratorio.</li>
                                <li>Habilitar el acceso al software únicamente para el personal autorizado de la clínica/laboratorio.</li>
                                <li>Esta licencia <strong>no transfiere</strong> la propiedad del código fuente ni de la propiedad intelectual del sistema original. Queda terminantemente prohibida la reventa, redistribución o ingeniería inversa del software.</li>
                            </ul>
                        </section>

                        {/* Custodia de Datos */}
                        <section className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                                2. Exoneración de Custodia de Datos
                            </h3>
                            <p className="mb-2">A diferencia de los servicios en la nube (SaaS), <strong>FoxieLab es un software On-Premise</strong>. Esto significa que:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>El 100% de los datos generados, incluyendo información financiera e historiales médicos, residen <strong>física y exclusivamente en sus propios servidores y hardware</strong>.</li>
                                <li>FoxieLab <strong>NO recopila, NO transfiere y NO tiene acceso</strong> remoto a su base de datos bajo ninguna circunstancia sin su intervención técnica directa.</li>
                                <li>Usted es el <strong>único y exclusivo responsable</strong> de la confidencialidad, integridad, políticas de acceso (cumplimiento Ley 25.326) y protección antivirus/firewall de dicho servidor.</li>
                            </ul>
                        </section>

                        {/* Backups */}
                        <section>
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                3. Responsabilidad de Copias de Seguridad (Backups)
                            </h3>
                            <p>Dado que la totalidad de la información es local, <strong>la ejecución, mantenimiento, encriptación y resguardo de las copias de seguridad (Backups) corre estrictamente por cuenta del laboratorio.</strong> FoxieLab no se responsabiliza de ninguna manera por la pérdida de datos derivada de: roturas de disco duro, fallas de hardware local, ataques de ransomware (virus) a su red interna, robos físicos de equipos, o errores humanos de borrado.</p>
                        </section>

                        {/* Mantenimiento */}
                        <section>
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                4. Soporte, Mantenimiento y Actualizaciones
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 marker:text-primary/50">
                                <li>Las actualizaciones de seguridad o nuevas funcionalidades deberán ser aplicadas mediante parches distribuidos por FoxieLab.</li>
                                <li>Dado que el entorno de red varía según el cliente, el equipo de soporte técnico de FoxieLab requerirá acceso temporal (ej. VPN, AnyDesk, TeamViewer), expresamente autorizado y supervisado por usted, para resolver incidentes en su servidor.</li>
                                <li>Cualquier falla nativa del hardware del laboratorio o corrupción del sistema operativo subyacente (Linux/Windows) es ajena al contrato de mantenimiento de FoxieLab.</li>
                            </ul>
                        </section>

                        {/* Limitación */}
                        <section>
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                5. Límite de Responsabilidad
                            </h3>
                            <p>Hasta el máximo permitido por la ley, FoxieLab no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo (incluyendo lucro cesante o pérdida de reputación) resultante del uso o la incapacidad funcional de la red interna, el servidor local del laboratorio, o brechas de seguridad informáticas sufridas por negligencia de los operarios de la clínica.</p>
                        </section>

                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
