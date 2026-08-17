"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PizzaMenuItem, SizePrices } from "@/data/menu";
import { pizzaSizeLabels } from "@/data/menu";
import { Badge } from "@/components/ui/Badge";

const sizeOrder: (keyof SizePrices)[] = ["familiar", "mediana", "personal"];

const chipTags: Record<string, { label: string; tone: "pine" | "brick" }> = {
  vegetariana: { label: "Vegetariana", tone: "pine" },
  picante: { label: "Picante", tone: "brick" },
};

export function MenuCard({ item }: { item: PizzaMenuItem }) {
  const sizes = sizeOrder.filter((size) => item.prices[size] !== undefined);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_1px_0_0_rgba(36,23,18,0.06)] ring-1 ring-ink/10 transition-shadow duration-200 hover:shadow-xl hover:ring-ink/15"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-dim">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 80vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {item.tags?.includes("firma") ? (
          <span className="font-detail absolute left-3 top-3 rounded-full bg-brick px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-paper shadow-sm">
            Firma de la casa
          </span>
        ) : null}
      </div>

      <div className="relative flex flex-1 flex-col gap-2.5 p-5">
        <div className="border-b border-dashed border-ink/15 pb-3">
          <h3 className="font-display text-xl font-semibold leading-snug text-ink">
            {item.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            {item.description}
          </p>
          {item.tags?.some((tag) => chipTags[tag]) ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags
                .filter((tag) => chipTags[tag])
                .map((tag) => (
                  <Badge key={tag} tone={chipTags[tag].tone}>
                    {chipTags[tag].label}
                  </Badge>
                ))}
            </div>
          ) : null}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
          {sizes.map((size) => (
            <div key={size} className="flex items-baseline gap-1">
              <span className="font-detail text-[10px] uppercase tracking-wider text-ink-soft/70">
                {pizzaSizeLabels[size]}
              </span>
              <span className="font-detail text-sm font-bold text-brick">
                S/{item.prices[size]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <span
        className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rotate-45 rounded-full bg-paper sm:block"
        aria-hidden="true"
      />
    </motion.article>
  );
}
