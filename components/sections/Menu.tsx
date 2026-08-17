"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { MenuCard } from "@/components/ui/MenuCard";
import { PromoCard } from "@/components/ui/PromoCard";
import { MenuTabs } from "@/components/ui/MenuTabs";
import {
  featuredPizzas,
  promociones,
  pastas,
  bebidas,
  bebidasCalientes,
  adicionales,
  pizzaFilterTags,
  extraToppingCharge,
} from "@/data/menu";

export function Menu() {
  const [activeFilter, setActiveFilter] = useState("todas");

  const visiblePizzas =
    activeFilter === "todas"
      ? featuredPizzas
      : featuredPizzas.filter((pizza) => pizza.tags?.includes(activeFilter));

  return (
    <section id="menu" className="bg-paper py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Promociones"
            title="Para compartir"
            italicWord="en grande"
            description="Sin combos genéricos: dos formatos pensados para el barrio, listos cuando el hambre es de varios."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {promociones.map((promo, index) => (
            <Reveal key={promo.id} delay={index * 0.08}>
              <PromoCard promo={promo} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-20 sm:mt-28">
        <Reveal>
          <SectionHeading
            kicker="Menú destacado"
            title="Dieciocho sabores,"
            italicWord="una sola masa"
            description="Elige por estilo: clásicas de siempre, especiales cargadas, vegetarianas y las que pican. Fermentamos la masa a diario, sin atajos."
          />
        </Reveal>

        <div className="mt-8 flex flex-col gap-6">
          <CategoryFilter
            options={pizzaFilterTags}
            active={activeFilter}
            onChange={setActiveFilter}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visiblePizzas.map((pizza) => (
                <MenuCard key={pizza.id} item={pizza} />
              ))}
            </AnimatePresence>
          </div>

          <p className="font-detail text-xs text-ink-soft">
            Cargo único por ingrediente adicional — Familiar S/{extraToppingCharge.familiar} ·
            Mediana S/{extraToppingCharge.mediana} · Personal S/{extraToppingCharge.personal}.
            ¿No ves tu favorita? Tenemos 18 sabores en total, pregúntanos por WhatsApp.
          </p>
        </div>
      </Container>

      <Container className="mt-20 sm:mt-28">
        <Reveal>
          <SectionHeading
            kicker="También hacemos"
            title="Pastas,"
            italicWord="bebidas y algo más"
            description="Todo lo que acompaña a la pizza en la mesa, con el mismo pan al ajo de la casa."
          />
        </Reveal>

        <div className="mt-8 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
          <MenuTabs
            groups={[
              { value: "pastas", label: "Pastas", items: pastas },
              { value: "bebidas", label: "Bebidas", items: bebidas },
              {
                value: "calientes",
                label: "Bebidas calientes",
                items: bebidasCalientes,
              },
              { value: "adicionales", label: "Adicionales", items: adicionales },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
