import { motion } from "motion/react";
import { ArrowDown, Star, MapPin, TrendingUp } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 px-6 grain overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,_oklch(0.92_0.22_125_/_0.35),_transparent_50%),radial-gradient(circle_at_80%_60%,_oklch(0.78_0.21_130_/_0.25),_transparent_55%)]" />
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="chip mb-8"
        >
          <span className="size-1.5 rounded-full bg-lime-deep" />
          Agenzia digitale per chi vuole farsi notare
        </motion.div>

        <h1 className="text-display text-[clamp(3rem,9vw,8.5rem)]">
          {"Siamo il motivo".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.05 * i }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="inline-block italic"
          >
            per cui ti scelgono
          </motion.span>{" "}
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="inline-block align-middle px-3 rounded-full bg-lime text-ink"
          >
            su Google
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          className="mt-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-end"
        >
          <p className="text-lg md:text-xl max-w-xl text-foreground/75 leading-relaxed">
            Costruiamo siti web, schede Google e identità digitali per professionisti
            che hanno smesso di accettare di essere <em>“il secondo risultato”</em>.
            Più clic, più chiamate, più clienti — senza compromessi.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="#contatti" className="ink-pill">
              Voglio essere il primo <ArrowDown className="size-4 -rotate-45" />
            </a>
            <a href="#prima-dopo" className="lime-pill">
              Guarda la differenza
            </a>
          </div>
        </motion.div>

        {/* floating cards preview */}
        <div className="mt-20 relative h-[280px] hidden md:block">
          <FloatCard
            delay={0.2}
            className="left-0 top-4 rotate-[-6deg]"
            title="+312% chiamate"
            icon={<TrendingUp className="size-4" />}
            sub="parrucchiere a Milano · 90 giorni"
          />
          <FloatCard
            delay={0.35}
            className="left-1/2 -translate-x-1/2 top-0 rotate-[2deg]"
            title="4,9 ★ · 187 recensioni"
            icon={<Star className="size-4 fill-current" />}
            sub="da 12 recensioni in 6 mesi"
          />
          <FloatCard
            delay={0.5}
            className="right-0 top-10 rotate-[5deg]"
            title="1° su Google Maps"
            icon={<MapPin className="size-4" />}
            sub="zona di competenza"
          />
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  className,
  title,
  sub,
  icon,
  delay,
}: {
  className?: string;
  title: string;
  sub: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay }}
      className={`absolute w-[280px] bg-card border border-border rounded-2xl p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] ${className}`}
    >
      <div className="flex items-center gap-2 text-mono text-foreground/60">
        {icon}
        <span>Risultato reale</span>
      </div>
      <div className="text-display text-3xl mt-2">{title}</div>
      <div className="text-sm text-foreground/60 mt-1">{sub}</div>
    </motion.div>
  );
}
