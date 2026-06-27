export function Footer() {
  return (
    <footer className="bg-ink text-paper/70 px-6 pt-12 pb-10 border-t border-paper/10">
      <div className="max-w-[1180px] mx-auto flex flex-wrap items-end justify-between gap-8">
        <div>
          <div className="text-display text-5xl text-paper">Visibilia.</div>
          <div className="text-mono mt-2">Agenzia digitale · Milano</div>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Visibilia Studio · P.IVA 00000000000
          <div className="mt-1 text-paper/40">Costruito con ossessione per i dettagli.</div>
        </div>
      </div>
    </footer>
  );
}
