import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, MapPin, Phone, Globe, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import bizBad from "@/assets/biz-bad.jpg";
import bizGood from "@/assets/biz-good.jpg";
import lawBad from "@/assets/law-bad.jpg";
import lawGood from "@/assets/law-good.jpg";
import dentistBad from "@/assets/dentist-bad.jpg";
import dentistGood from "@/assets/dentist-good.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

type Biz = {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  address: string;
  addressNote?: string;
  img: string;
  hasWebsite: boolean;
};

type Scenario = {
  key: string;
  category: string;
  bad: Biz;
  good: Biz;
};

const scenarios: Scenario[] = [
  {
    key: "barber",
    category: "Parrucchiere",
    bad: {
      name: "Salone Da Gino",
      category: "Parrucchiere",
      rating: 3.1,
      reviews: 7,
      address: "Via Verdi 12 — potrebbe essere chiuso",
      addressNote: "Orari non aggiornati",
      img: bizBad,
      hasWebsite: false,
    },
    good: {
      name: "Mauro Hair Studio",
      category: "Parrucchiere · Aperto ora",
      rating: 4.9,
      reviews: 412,
      address: "Via Roma 24, Milano",
      img: bizGood,
      hasWebsite: true,
    },
  },
  {
    key: "law",
    category: "Avvocato",
    bad: {
      name: "Studio Legale Rossi",
      category: "Avvocato",
      rating: 2.8,
      reviews: 4,
      address: "Indirizzo non confermato",
      addressNote: "Nessuna foto disponibile",
      img: lawBad,
      hasWebsite: false,
    },
    good: {
      name: "Bianchi &amp; Associati",
      category: "Studio legale · Aperto ora",
      rating: 5.0,
      reviews: 238,
      address: "Corso Magenta 8, Milano",
      img: lawGood,
      hasWebsite: true,
    },
  },
  {
    key: "dentist",
    category: "Dentista",
    bad: {
      name: "Studio Dentistico Neri",
      category: "Dentista",
      rating: 2.6,
      reviews: 5,
      address: "Indirizzo da verificare",
      addressNote: "Telefono non risponde",
      img: dentistBad,
      hasWebsite: false,
    },
    good: {
      name: "Smile Clinic Milano",
      category: "Dentista · Apre alle 9",
      rating: 4.9,
      reviews: 521,
      address: "Viale Tunisia 6, Milano",
      img: dentistGood,
      hasWebsite: true,
    },
  },
];

export function BusinessChoice() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const s = scenarios[index];

  const change = (dir: 1 | -1) => {
    setFlipped(false);
    setIndex((i) => (i + dir + scenarios.length) % scenarios.length);
  };

  return (
    <section id="scelta" className="py-32 px-6 bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,_oklch(0.92_0.22_125_/_0.4),_transparent_60%)]" />
      <div className="max-w-[1180px] mx-auto relative">
        <div className="mb-14">
          <div className="text-mono text-paper/60 mb-4">/ 03 — La domanda da un milione</div>
          <h2 className="text-display text-[clamp(2.5rem,6.5vw,6rem)] max-w-3xl">
            Da chi <em>andresti</em>?
          </h2>
          <p className="mt-4 max-w-xl text-paper/70 text-lg">
            Stesso quartiere. Stesso prezzo. Stessa categoria. Una scelta in
            tre secondi. Clicca quella sbagliata e scopri perché.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => change(-1)}
            className="size-11 rounded-full border border-paper/20 hover:bg-paper/10 grid place-items-center transition"
            aria-label="Categoria precedente"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="chip border-paper/20 bg-paper/5 text-paper">
            <span className="size-1.5 rounded-full bg-lime" />
            {s.category}
          </div>
          <button
            onClick={() => change(1)}
            className="size-11 rounded-full border border-paper/20 hover:bg-paper/10 grid place-items-center transition"
            aria-label="Categoria successiva"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* BAD - flippable */}
          <div className="perspective-1200">
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.9, ease }}
              className="preserve-3d relative w-full min-h-[520px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="backface-hidden absolute inset-0">
                <BusinessCard
                  biz={s.bad}
                  variant="bad"
                  onClick={() => setFlipped(true)}
                />
              </div>
              <div
                className="backface-hidden rotate-y-180 absolute inset-0 rounded-3xl bg-lime text-ink p-8 flex flex-col justify-between"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div>
                  <div className="text-mono">Ecco perché.</div>
                  <h3 className="text-display text-4xl mt-3 leading-tight">
                    Le persone scelgono <em>con gli occhi</em>, non con la logica.
                  </h3>
                  <p className="mt-4 text-ink/75 leading-relaxed">
                    Lo abbiamo chiesto a passanti veri, in strada. La risposta
                    è sempre la stessa. Guarda il video.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="ink-pill"
                  >
                    <Play className="size-4 fill-current" /> Guarda il video
                  </button>
                  <button
                    onClick={() => setFlipped(false)}
                    className="px-4 py-2 rounded-full border border-ink/20 text-sm hover:bg-ink/5"
                  >
                    Torna indietro
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* GOOD */}
          <BusinessCard biz={s.good} variant="good" />
        </div>

        <div className="text-center text-paper/50 text-sm mt-10">
          Tocca le frecce per cambiare attività · {index + 1} / {scenarios.length}
        </div>
      </div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/90 backdrop-blur-md z-50 grid place-items-center p-6"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease }}
              className="relative w-full max-w-[380px] aspect-[9/16] rounded-3xl bg-secondary border border-paper/10 overflow-hidden grid place-items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 size-9 rounded-full bg-ink text-paper grid place-items-center z-10"
              >
                <X className="size-4" />
              </button>
              <div className="text-center px-6 text-foreground">
                <div className="text-mono text-foreground/60">Video placeholder</div>
                <div className="text-display text-2xl mt-2">
                  Qui andrà il video verticale<br />
                  <em>“Da chi andresti?”</em>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function BusinessCard({
  biz,
  variant,
  onClick,
}: {
  biz: Biz;
  variant: "bad" | "good";
  onClick?: () => void;
}) {
  const isBad = variant === "bad";
  return (
    <button
      onClick={onClick}
      className={`group w-full text-left rounded-3xl border bg-paper text-ink overflow-hidden transition-all duration-500 ${
        isBad
          ? "border-paper/20 hover:border-destructive/60 cursor-pointer"
          : "border-lime ring-4 ring-lime/20"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={biz.img}
          alt={biz.name}
          className={`size-full object-cover transition-transform duration-700 ${
            isBad ? "saturate-50 group-hover:scale-105" : "scale-105"
          }`}
          loading="lazy"
        />
        <div
          className={`absolute top-3 left-3 chip ${
            isBad ? "bg-paper/90 text-ink/70" : "bg-lime text-ink border-lime-deep"
          }`}
        >
          {isBad ? "Scheda incompleta" : "Scheda verificata ✓"}
        </div>
      </div>
      <div className="p-6 md:p-7">
        <div className="text-display text-3xl">{biz.name}</div>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="font-semibold">{biz.rating.toFixed(1)}</span>
          <Stars rating={biz.rating} />
          <span className="text-ink/60">({biz.reviews})</span>
          <span className="text-ink/30">·</span>
          <span className="text-ink/60">{biz.category}</span>
        </div>
        <div className="mt-3 text-sm text-ink/70 flex items-start gap-2">
          <MapPin className="size-4 mt-0.5 text-ink/50 shrink-0" />
          <div>
            {biz.address}
            {biz.addressNote && (
              <div className="text-destructive/80 text-xs mt-0.5">⚠ {biz.addressNote}</div>
            )}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Action icon={<Phone className="size-4" />} label="Chiama" disabled={isBad} good={!isBad} />
          <Action icon={<MapPin className="size-4" />} label="Indicazioni" good={!isBad} />
          <Action
            icon={<Globe className="size-4" />}
            label={biz.hasWebsite ? "Sito web" : "—"}
            disabled={!biz.hasWebsite}
            good={biz.hasWebsite}
          />
        </div>
        {isBad && (
          <div className="mt-5 text-mono text-ink/50 group-hover:text-destructive transition-colors">
            ↗ Clicca per scoprire perché perde clienti
          </div>
        )}
      </div>
    </button>
  );
}

function Action({
  icon,
  label,
  disabled,
  good,
}: {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  good?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 min-w-[72px] px-3 py-2 rounded-xl border text-xs ${
        disabled
          ? "border-dashed border-ink/15 text-ink/30"
          : good
            ? "border-lime-deep bg-lime/40 text-ink"
            : "border-ink/15 text-ink/70"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`size-3.5 ${
            n <= Math.round(rating) ? "fill-lime-deep text-lime-deep" : "text-ink/20"
          }`}
        />
      ))}
    </div>
  );
}
