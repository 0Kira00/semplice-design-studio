export function Marquee() {
  const items = [
    "Siti web su misura",
    "Google Business Profile",
    "SEO locale",
    "Identità visiva",
    "Foto professionali",
    "Recensioni reali",
    "Campagne ADS",
    "Automazioni",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-ink text-paper py-5 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap text-display text-3xl md:text-4xl">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="italic">{s}</span>
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
