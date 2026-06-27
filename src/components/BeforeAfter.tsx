import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, MapPin, Phone, Globe, Camera, Sparkles, ArrowRight } from "lucide-react";
import salonBefore from "@/assets/salon-before.jpg";
import salonAfter from "@/assets/salon-after.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function BeforeAfter() {
  const [after, setAfter] = useState(false);

  return (
    <section id="prima-dopo" className="py-32 px-6 bg-secondary/40">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-14">
          <div className="text-mono text-foreground/60 mb-4">/ 02 — Prima &amp; dopo</div>
          <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] max-w-3xl">
            Stessa attività. <em>Un altro mondo</em> su Google.
          </h2>
          <p className="mt-4 max-w-xl text-foreground/70 text-lg">
            Questa è una scheda Google reale, prima e dopo il nostro intervento.
            Premi il pulsante e guarda cosa cambia agli occhi di chi ti cerca.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setAfter(false)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                !after ? "bg-ink text-paper border-ink" : "bg-transparent border-border text-foreground/70 hover:text-foreground"
              }`}
            >
              Prima
            </button>
            <button
              onClick={() => setAfter(true)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                after ? "bg-lime text-ink border-lime-deep" : "bg-transparent border-border text-foreground/70 hover:text-foreground"
              }`}
            >
              Dopo il nostro effetto ✨
            </button>
          </div>
          <button
            onClick={() => setAfter((v) => !v)}
            className="ink-pill text-sm"
          >
            {after ? "Torna al prima" : "Mostra il dopo"} <ArrowRight className="size-4" />
          </button>
        </div>

        <div className="relative">
          <GoogleCard after={after} />
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <Stat label="Visualizzazioni / mese" before="218" after="6.480" big={after} />
          <Stat label="Chiamate dirette" before="4" after="127" big={after} />
          <Stat label="Indicazioni stradali" before="11" after="394" big={after} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, before, after, big }: { label: string; before: string; after: string; big: boolean }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <div className="text-mono text-foreground/60">{label}</div>
      <div className="text-display text-4xl mt-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={big ? "a" : "b"}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="inline-block"
          >
            {big ? after : before}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

function GoogleCard({ after }: { after: boolean }) {
  const reviews = after ? 287 : 9;
  const rating = after ? 4.9 : 3.2;

  return (
    <motion.div
      layout
      transition={{ duration: 0.6, ease }}
      className="bg-card rounded-3xl border border-border overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]"
    >
      {/* Image area */}
      <div className="grid grid-cols-3 gap-1 bg-border">
        <div className="col-span-2 relative aspect-[16/10] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={after ? "after-main" : "before-main"}
              src={after ? salonAfter : salonBefore}
              alt={after ? "Studio dopo" : "Studio prima"}
              className="absolute inset-0 size-full object-cover"
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease }}
              loading="lazy"
              width={800}
              height={500}
            />
          </AnimatePresence>
          {!after && (
            <div className="absolute bottom-3 left-3 chip bg-card/90">
              <Camera className="size-3" /> Foto caricata dall'utente
            </div>
          )}
          {after && (
            <div className="absolute bottom-3 left-3 chip bg-lime text-ink border-lime-deep">
              <Sparkles className="size-3" /> Servizio fotografico Visibilia
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <AnimatePresence>
              {after && (
                <motion.img
                  src={salonAfter}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="size-full object-cover"
                  loading="lazy"
                />
              )}
            </AnimatePresence>
          </div>
          <div className="relative flex-1 overflow-hidden bg-muted">
            <AnimatePresence>
              {after && (
                <motion.img
                  src={salonAfter}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="size-full object-cover scale-110"
                  loading="lazy"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-start border-b border-border">
        <div>
          <div className="text-display text-3xl md:text-4xl">Parrucchiere Mauro</div>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <span className="font-semibold">{rating.toFixed(1)}</span>
            <Stars rating={rating} />
            <motion.span
              key={reviews}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-foreground/60"
            >
              ({reviews} recensioni)
            </motion.span>
            <span className="text-foreground/40">·</span>
            <span className="text-foreground/60">Parrucchiere</span>
          </div>
          <div className="mt-3 text-foreground/70 text-sm flex items-center gap-2">
            <MapPin className="size-4 text-foreground/50" />
            Via Roma 24, Milano
            <AnimatePresence>
              {after && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="chip text-[10px] bg-lime/40 border-lime-deep/40"
                >
                  ✓ Verificato
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <ActionBtn icon={<Phone className="size-4" />} label="Chiama" highlight={after} />
          <ActionBtn icon={<MapPin className="size-4" />} label="Indicazioni" />
          <ActionBtn
            icon={<Globe className="size-4" />}
            label={after ? "Sito web" : "—"}
            disabled={!after}
            highlight={after}
          />
        </div>
      </div>

      {/* Reviews */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <div className="text-display text-2xl">Recensioni recenti</div>
          <AnimatePresence>
            {after && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="chip text-[10px]"
              >
                +278 in 4 mesi
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {(after ? AFTER_REVIEWS : BEFORE_REVIEWS).map((r, i) => (
            <motion.div
              key={`${after}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.05 * i }}
              className="bg-secondary/60 rounded-2xl p-4 border border-border"
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-ink text-paper grid place-items-center text-xs font-semibold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <Stars rating={r.rating} small />
                </div>
              </div>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ActionBtn({
  icon,
  label,
  disabled,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 min-w-[72px] px-3 py-2 rounded-xl border text-xs ${
        disabled
          ? "border-dashed border-border text-foreground/30"
          : highlight
            ? "border-lime-deep bg-lime/30 text-ink"
            : "border-border text-foreground/80"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}

function Stars({ rating, small }: { rating: number; small?: boolean }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`${small ? "size-3" : "size-4"} ${
            n <= Math.round(rating) ? "fill-lime-deep text-lime-deep" : "text-foreground/20"
          }`}
        />
      ))}
    </div>
  );
}

const BEFORE_REVIEWS = [
  { name: "Luca", rating: 2, text: "Non risponde mai al telefono, ho rinunciato." },
  { name: "Sara", rating: 3, text: "Taglio ok ma il locale lascia a desiderare." },
];

const AFTER_REVIEWS = [
  { name: "Giulia", rating: 5, text: "Esperienza top dal primo contatto. Studio bellissimo e Mauro è un fuoriclasse." },
  { name: "Marco", rating: 5, text: "Prenotato online in 30 secondi. Risultato impeccabile, torno di sicuro." },
  { name: "Elena", rating: 5, text: "Il miglior parrucchiere della zona, e si vede da come trattano i clienti." },
  { name: "Davide", rating: 5, text: "Foto bellissime sul profilo, e dal vivo è anche meglio. Consigliatissimo." },
];
