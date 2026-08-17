import Image from "next/image";
import type { PromoMenuItem } from "@/data/menu";

export function PromoCard({ promo }: { promo: PromoMenuItem }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl bg-pine text-paper shadow-lg sm:flex-row">
      <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-48">
        <Image
          src={promo.image}
          alt={promo.imageAlt}
          fill
          sizes="(min-width: 640px) 192px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            {promo.badge ? (
              <span className="font-detail inline-block rounded-full bg-mustard px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-ink">
                {promo.badge}
              </span>
            ) : null}
            <h3 className="font-display mt-2 text-2xl font-semibold italic leading-tight">
              {promo.name}
            </h3>
          </div>
          <div className="font-detail rotate-[-3deg] rounded-lg border-2 border-dashed border-paper/50 px-3 py-1.5 text-right">
            <span className="block text-[10px] uppercase tracking-widest text-paper/70">
              Combo
            </span>
            <span className="text-2xl font-bold text-mustard">
              S/{promo.price}
            </span>
          </div>
        </div>

        <ul className="flex flex-col gap-1.5 border-t border-dashed border-paper/25 pt-3 text-sm text-paper/90">
          {promo.includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mustard" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
