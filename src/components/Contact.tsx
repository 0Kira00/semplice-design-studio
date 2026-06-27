import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contatti" className="py-32 px-6 bg-ink text-paper relative overflow-hidden">
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-lime/30 blur-[120px]" />
      <div className="max-w-[1180px] mx-auto relative grid md:grid-cols-[1.1fr_1fr] gap-14">
        <div>
          <div className="text-mono text-paper/60 mb-4">/ 05 — Parliamone</div>
          <h2 className="text-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95]">
            Diventiamo<br />
            <em className="text-lime">il tuo</em><br />
            vantaggio<br />
            ingiusto.
          </h2>
          <div className="mt-10 space-y-3 text-paper/80">
            <a href="mailto:ciao@visibilia.studio" className="flex items-center gap-3 hover:text-lime transition">
              <Mail className="size-5" /> ciao@visibilia.studio
            </a>
            <a href="tel:+390000000000" className="flex items-center gap-3 hover:text-lime transition">
              <Phone className="size-5" /> +39 000 000 0000
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-paper text-ink rounded-3xl p-7 md:p-9"
        >
          {sent ? (
            <div className="min-h-[420px] grid place-items-center text-center">
              <div>
                <div className="size-14 rounded-full bg-lime mx-auto grid place-items-center text-2xl">✓</div>
                <h3 className="text-display text-4xl mt-6">Ricevuto.</h3>
                <p className="mt-3 text-ink/70">Ti rispondiamo entro 24 ore. Spesso molto prima.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-mono text-ink/60">Chiamata conoscitiva · gratuita</div>
              <h3 className="text-display text-3xl mt-2 mb-6">Raccontaci la tua attività.</h3>
              <div className="grid gap-4">
                <Field label="Nome e cognome" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Attività / categoria" name="biz" placeholder="es. Parrucchiere a Milano" />
                <Field label="Cosa vuoi ottenere?" name="goal" textarea placeholder="Più chiamate? Più appuntamenti? Posizionarti meglio?" />
              </div>
              <button type="submit" className="lime-pill mt-6 w-full justify-center text-base">
                Invia richiesta <ArrowUpRight className="size-5" />
              </button>
              <div className="text-xs text-ink/50 mt-4 text-center">
                Niente spam, niente call center. Solo una persona vera che ti risponde.
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  required?: boolean;
}) {
  const Cmp: any = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="text-xs text-ink/60 uppercase tracking-wider">{label}</span>
      <Cmp
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
        className="mt-1 w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-2 text-base placeholder:text-ink/30 transition"
      />
    </label>
  );
}
