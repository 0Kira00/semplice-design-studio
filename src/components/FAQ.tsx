import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo serve per vedere i primi risultati?",
    a: "Le prime ottimizzazioni della scheda Google producono effetti già nelle prime due settimane. Per la SEO locale e il posizionamento del sito, parliamo di 60–90 giorni per vedere movimenti seri.",
  },
  {
    q: "Lavorate solo con parrucchieri?",
    a: "No. Lavoriamo con qualunque professionista locale: avvocati, dentisti, ristoratori, estetisti, commercialisti, idraulici. Cambia il settore, non il metodo.",
  },
  {
    q: "Quanto costa un sito fatto da voi?",
    a: "Dipende dal progetto, ma siamo trasparenti: un sito vetrina parte da una cifra accessibile, un ecosistema completo (sito + scheda + foto + SEO) è un investimento più importante. Ti facciamo un preventivo chiaro dopo una prima chiamata gratuita.",
  },
  {
    q: "Le recensioni sono vere?",
    a: "Sempre. Non compriamo recensioni e non lo faremo mai. Costruiamo un sistema che chiede recensioni ai tuoi clienti veri nel momento giusto. È etico, è efficace, ed è quello che Google premia.",
  },
  {
    q: "Cosa succede se non sono soddisfatto?",
    a: "Lavoriamo per obiettivi misurabili. Se non li raggiungiamo, continuiamo finché non li raggiungiamo. Niente clienti incastrati, niente contratti capestro.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-[1180px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <div className="text-mono text-foreground/60 mb-4">/ 04 — FAQ</div>
          <h2 className="text-display text-[clamp(2.5rem,5vw,4.5rem)]">
            Domande che <em>ci fanno sempre</em>.
          </h2>
          <p className="mt-4 text-foreground/70">
            Se ne hai altre, scrivici. Rispondiamo entro 24 ore — di solito molto prima.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-lg md:text-xl py-6 hover:no-underline">
                <span className="flex items-start gap-4">
                  <span className="text-mono text-foreground/40 pt-1.5">0{i + 1}</span>
                  <span className="font-medium">{f.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-base leading-relaxed pl-10 pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
