import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const galleryItems = [
  {
    src: "/images/gallery/horno-encendido.svg",
    alt: "Horno de piedra encendido de Pizza's JAMM listo para hornear",
    span: "sm:row-span-2",
  },
  {
    src: "/images/gallery/masa-fresca.svg",
    alt: "Masa de pizza fresca estirada a mano sobre la mesa de trabajo",
    span: "",
  },
  {
    src: "/images/gallery/corte-perfecto.svg",
    alt: "Corte de una pizza recién horneada en triángulos parejos",
    span: "",
  },
  {
    src: "/images/gallery/ingredientes-frescos.svg",
    alt: "Ingredientes frescos listos para armar las pizzas del día",
    span: "",
  },
  {
    src: "/images/gallery/mesa-compartida.svg",
    alt: "Mesa compartida con pizzas y bebidas servidas para varios comensales",
    span: "sm:row-span-2",
  },
  {
    src: "/images/gallery/camino-a-tu-mesa.svg",
    alt: "Pedido de Pizza's JAMM listo para salir en delivery",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-paper py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Galería"
            title="De la piedra"
            italicWord="a tu mesa"
            description="Un vistazo a la cocina: masa, horno y el corte de siempre."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:[grid-auto-rows:12rem]">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.src}
              delay={index * 0.06}
              className={`group relative overflow-hidden rounded-2xl bg-paper-dim ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
