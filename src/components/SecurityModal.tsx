import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";

export function SecurityModal({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-4 border-b border-border bg-card/50">
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                        <Shield className="w-6 h-6 text-primary" />
                        Marco Legal y Seguridad
                    </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[calc(85vh-100px)] p-6">
                    <div className="space-y-8 text-sm text-foreground/80 leading-relaxed">

                        {/* Sección 1 */}
                        <section>
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                Ley 25.326 — Protección de Datos Personales (Argentina)
                            </h3>
                            <p className="mb-3">Es la ley principal que aplica a tu laboratorio. Los puntos más importantes:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-primary/50">
                                <li>Podés recolectar y tratar datos de salud de pacientes, siempre que sea para la finalidad del laboratorio y respetando el secreto profesional (Art. 8).</li>
                                <li><strong>Estás obligado legalmente</strong> a adoptar medidas técnicas y organizativas para garantizar seguridad y confidencialidad (Art. 9). No es opcional.</li>
                                <li>No podés compartir datos de pacientes con terceros sin consentimiento previo, expreso e informado del paciente (Art. 11).</li>
                                <li>Debés inscribir tu base de datos ante la AAIP (Agencia de Acceso a la Información Pública). Es un trámite gratuito y obligatorio.</li>
                            </ul>
                        </section>

                        {/* Cita/Alerta */}
                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                            <h4 className="font-bold text-primary mb-2">Qué datos son considerados sensibles</h4>
                            <p className="mb-2">Bajo la Ley 25.326 son datos sensibles (máxima protección):</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Datos de salud:</strong> resultados de análisis, diagnósticos, historial clínico.</li>
                                <li><strong>Datos financieros:</strong> CBU, cuentas bancarias, movimientos de dinero.</li>
                                <li><strong>Datos personales identificatorios:</strong> DNI, CUIL, nombre completo + fecha de nacimiento.</li>
                            </ul>
                        </div>

                        {/* Sección 2 */}
                        <section>
                            <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
                                Recomendaciones Técnicas de Seguridad
                            </h3>

                            <div className="overflow-x-auto rounded-lg border border-border">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-muted/50">
                                            <th className="p-3 font-semibold text-foreground border-b border-border w-1/3">Dato</th>
                                            <th className="p-3 font-semibold text-foreground border-b border-border w-2/3">Recomendación</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        <tr>
                                            <td className="p-3 font-medium">Contraseñas de usuarios</td>
                                            <td className="p-3">Hash con bcrypt o argon2 (nunca guardas la contraseña, solo el hash). Nunca MD5 o SHA1 solos.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-medium">CBU y datos bancarios</td>
                                            <td className="p-3">Encriptación AES-256 en reposo. Solo desencriptar cuando se necesita mostrar.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-medium">Resultados de análisis</td>
                                            <td className="p-3">Encriptación AES-256 del archivo o campo. Control de acceso por rol.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-medium">Nombres y DNI</td>
                                            <td className="p-3">Encriptación AES-256 o seudonimización si los datos se usan para estadísticas.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-medium">Facturas y montos</td>
                                            <td className="p-3">No requieren encriptación fuerte, pero sí acceso restringido por rol.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-medium">Logs del sistema</td>
                                            <td className="p-3">Sin encriptación, pero con acceso de solo lectura y sin datos sensibles en el mensaje.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Sección 3 */}
                        <section>
                            <h3 className="text-lg font-bold text-foreground mb-3">Otras medidas técnicas obligatorias</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
                                    <span><strong>Autenticación segura:</strong> Contraseñas hasheadas (bcrypt). No guardar contraseñas en texto plano nunca.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
                                    <span><strong>Sesiones bloqueadas:</strong> Timeout automático (cerrar sesión por inactividad).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
                                    <span><strong>Control de acceso por roles (RBAC):</strong> no todo el personal ve todo.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
                                    <span><strong>Backup blindado:</strong> Backup encriptado de los archivos de datos.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
                                    <span><strong>Secretos de Entorno:</strong> Variables de entorno para claves de encriptación, nunca en el código fuente.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
                                    <span><strong>Log de auditoría:</strong> quién accedió a qué dato y cuándo (sin incluir el dato sensible en el log).</span>
                                </li>
                            </ul>
                        </section>

                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
