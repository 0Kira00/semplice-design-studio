import { motion } from "motion/react";
import { Globe, MapPin, Star, Camera, Search, Sparkles } from "lucide-react";

const items = [
  {
    icon: Globe,
    title: "Siti web che convertono",
    body: "Veloci, eleganti, costruiti per trasformare un visitatore in una prenotazione. Niente template, niente compromessi.",
  },
  {
    icon: MapPin,
    title: "Scheda Google ottimizzata",
    body: "La tua scheda Business Profile diventa il tuo miglior commerciale: aggiornata, completa, scelta.",
  },
  {
    icon: Search,
    title: "Primi su Google nella tua zona",
    body: "SEO locale fatta come si deve. Ti facciamo trovare da chi sta cercando proprio te, adesso.",
  },
  {
    icon: Star,
    title: "Recensioni che pesano davvero",
    body: "Strategie etiche per raccogliere recensioni vere dai tuoi clienti più felici. Senza scorciatoie.",
  },
  {
    icon: Camera,
    title: "Foto professionali",
    body: "Servizio fotografico dedicato al tuo studio. Perché la prima impressione passa dagli occhi.",
  },
  {
    icon: Sparkles,
    title: "Autorità del brand",
    body: "Logo, palette, copy. Costruiamo l'identità che ti fa sembrare il punto di riferimento del settore.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function WhatWeDo() {
  return (
    <section id="cosa-facciamo" className="py-32 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-mono text-foreground/60 mb-4">/ 01 — Cosa facciamo</div>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] max-w-2xl">
              Tutto ciò che serve per <em>essere scelto</em> prima degli altri.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 text-lg">
            Lavoriamo con un'idea sola in testa: rendere la tua attività la più
            visibile, la più credibile, la più cliccata della zona.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              className="group relative bg-card p-8 min-h-[260px] flex flex-col justify-between hover:bg-paper transition-colors"
            >
              <it.icon className="size-7 text-lime-deep" strokeWidth={1.5} />
              <div>
                <h3 className="text-display text-2xl mb-2">{it.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{it.body}</p>
              </div>
              <span className="absolute top-6 right-6 text-mono text-foreground/40">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
