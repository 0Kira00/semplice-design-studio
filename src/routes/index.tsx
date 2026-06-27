import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WhatWeDo } from "@/components/WhatWeDo";
import { BeforeAfter } from "@/components/BeforeAfter";
import { BusinessChoice } from "@/components/BusinessChoice";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visibilia — Agenzia digitale per professionisti che vogliono farsi notare" },
      {
        name: "description",
        content:
          "Siti web, schede Google e SEO locale per professionisti. Più visibilità, più recensioni, più clienti. Niente template, niente compromessi.",
      },
      { property: "og:title", content: "Visibilia — L'agenzia che ti fa scegliere su Google" },
      {
        property: "og:description",
        content:
          "Trasformiamo professionisti invisibili nella scelta numero uno della loro zona. Siti web, Google Business, SEO locale.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background text-foreground">
        <Nav />
        <Hero />
        <Marquee />
        <WhatWeDo />
        <BeforeAfter />
        <BusinessChoice />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
