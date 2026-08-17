import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";

export function About() {
  return (
    <section id="nosotros" className="bg-ink py-20 text-paper sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] lg:order-1">
          <Image
            src="/images/gallery/masa-fresca.svg"
            alt="Ilustración de masa de pizza fresca siendo estirada a mano en la cocina de Pizza's JAMM"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <Reveal>
            <span className="font-detail text-xs font-bold uppercase tracking-[0.25em] text-mustard">
              Nosotros
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl">
              Barrio primero,{" "}
              <span className="italic text-brick-light">receta después</span>
            </h2>
          </Reveal>

          {siteConfig.story.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.12 + index * 0.08}>
              <p className="max-w-lg text-lg leading-relaxed text-paper/80">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
