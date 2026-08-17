import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";
import { locations } from "@/data/locations";

const tickerItems = [
  "Jamm",
  "Naciones Unidas",
  "Hawaiana Especial",
  "Brava",
  "Napolitana",
  "Portuguesa",
  "Gourmet",
  "Francesa Vegetariana",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-14 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mustard/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-pine/15 blur-3xl"
      />

      <Container className="relative grid gap-12 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="font-detail inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-paper">
              Comas · 2 sedes · {siteConfig.hours.display}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-balance text-5xl font-semibold leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
              {siteConfig.heroHeadline.lead}{" "}
              <span className="italic text-brick">
                {siteConfig.heroHeadline.emphasis}
              </span>{" "}
              {siteConfig.heroHeadline.trail}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              Masa fermentada a diario, horno encendido desde las 3pm y dos
              sedes en Comas listas para tu pedido. Nada de vueltas: pides,
              confirmamos por WhatsApp y va en camino.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-wrap items-center gap-4">
            <Button href="#ubicaciones" variant="primary">
              Pedir por WhatsApp
            </Button>
            <Button href="#menu" variant="secondary">
              Ver el menú
            </Button>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
            {locations.map((loc) => (
              <div key={loc.id} className="font-detail text-xs text-ink-soft">
                <span className="font-bold text-ink">{loc.name}</span>
                <br />
                {loc.hoursDisplay}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-brick shadow-2xl">
            <Image
              src="/images/gallery/hero-pizza.svg"
              alt="Ilustración de una pizza recién horneada de Pizza's JAMM, cortada en triángulos sobre una tabla"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="object-cover"
            />
          </div>
          <div className="font-detail absolute -bottom-5 -left-5 rotate-[-6deg] rounded-xl bg-mustard px-4 py-3 text-ink shadow-lg">
            <span className="block text-[10px] font-bold uppercase tracking-widest">
              Desde
            </span>
            <span className="text-2xl font-bold">S/11</span>
          </div>
        </Reveal>
      </Container>

      <div className="overflow-hidden border-y border-ink/10 bg-ink py-3">
        <div
          className="motion-safe:animate-marquee flex w-max gap-10 whitespace-nowrap"
          aria-hidden="true"
        >
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-detail text-sm font-bold uppercase tracking-[0.2em] text-paper/70"
            >
              {item} <span className="text-brick-light">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
