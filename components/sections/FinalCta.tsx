import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { locations } from "@/data/locations";
import { buildWhatsAppLink, defaultOrderMessage } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="bg-brick py-20 text-paper sm:py-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl">
            El horno ya está{" "}
            <span className="italic text-mustard">encendido.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-lg text-lg text-paper/85">
            Escribe directo a la sede más cercana y arma tu pedido en minutos.
          </p>
        </Reveal>
        <Reveal
          delay={0.16}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {locations.map((location) => (
            <Button
              key={location.id}
              href={buildWhatsAppLink(
                location.whatsapp,
                defaultOrderMessage(location.name)
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="!border-paper !text-paper hover:!bg-paper hover:!text-brick"
            >
              {location.name}: {location.phoneDisplay}
            </Button>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
