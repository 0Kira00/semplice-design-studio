import { motion } from "motion/react";

export function Nav() {
  const items = [
    { label: "Cosa facciamo", href: "#cosa-facciamo" },
    { label: "Prima / Dopo", href: "#prima-dopo" },
    { label: "Da chi andresti?", href: "#scelta" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1180px)]"
    >
      <div className="flex items-center justify-between rounded-full border border-border bg-paper/70 backdrop-blur-xl px-5 py-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block size-2.5 rounded-full bg-lime-deep" />
          <span className="text-display text-xl">Visibilia</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="text-foreground/80 hover:text-foreground transition-colors">
              {i.label}
            </a>
          ))}
        </nav>
        <a href="#contatti" className="lime-pill text-sm py-2 px-4">
          Parliamone →
        </a>
      </div>
    </motion.header>
  );
}
