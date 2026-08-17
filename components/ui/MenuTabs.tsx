"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SingleServeMenuItem } from "@/data/menu";

interface TabGroup {
  value: string;
  label: string;
  items: SingleServeMenuItem[];
}

export function MenuTabs({ groups }: { groups: TabGroup[] }) {
  const [active, setActive] = useState(groups[0]?.value);
  const activeGroup = groups.find((group) => group.value === active) ?? groups[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Categorías del menú"
        className="flex flex-wrap gap-2 border-b border-ink/10 pb-4"
      >
        {groups.map((group) => {
          const isActive = group.value === activeGroup?.value;
          return (
            <button
              key={group.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(group.value)}
              className={`font-detail rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] transition-colors duration-200 ${
                isActive
                  ? "border-brick bg-brick text-paper"
                  : "border-ink/15 text-ink-soft hover:border-ink/40 hover:text-ink"
              }`}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={activeGroup?.value}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2"
        >
          {activeGroup?.items.map((item) => (
            <li
              key={item.id}
              className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink/12 pb-3"
            >
              <div>
                <p className="font-body font-semibold text-ink">{item.name}</p>
                {item.description ? (
                  <p className="text-sm text-ink-soft">{item.description}</p>
                ) : null}
              </div>
              <span className="font-detail shrink-0 whitespace-nowrap text-base font-bold text-brick">
                S/{item.price}
              </span>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
