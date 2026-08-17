import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { locations, mapsEmbedUrl, mapsSearchUrl } from "@/data/locations";
import { buildWhatsAppLink, defaultOrderMessage } from "@/lib/whatsapp";

export function Locations() {
  return (
    <section id="ubicaciones" className="bg-paper-dim py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Ubicaciones"
            title="Dos sedes,"
            italicWord="un solo horno"
            description="Cada local tiene su propio WhatsApp: escribe al de tu zona y coordinamos tu pedido directo con la cocina."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {locations.map((location, index) => (
            <Reveal key={location.id} delay={index * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-ink/10">
                <div className="relative h-56 w-full">
                  <iframe
                    title={`Mapa de ${location.name}`}
                    src={mapsEmbedUrl(location.mapsQuery)}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {location.name}
                    </h3>
                    <p className="mt-1 text-ink-soft">{location.address}</p>
                  </div>

                  <dl className="font-detail grid grid-cols-2 gap-4 border-y border-dashed border-ink/15 py-4 text-sm">
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-ink-soft/70">
                        Horario
                      </dt>
                      <dd className="font-semibold text-ink">
                        3pm – 11pm
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-ink-soft/70">
                        WhatsApp
                      </dt>
                      <dd className="font-semibold text-ink">
                        {location.phoneDisplay}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-auto flex flex-wrap gap-3">
                    <Button
                      href={buildWhatsAppLink(
                        location.whatsapp,
                        defaultOrderMessage(location.name)
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="flex-1"
                    >
                      Pedir a {location.name}
                    </Button>
                    <Button
                      href={mapsSearchUrl(location.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      Cómo llegar
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
