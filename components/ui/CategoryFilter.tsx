"use client";

import { motion } from "framer-motion";

export function CategoryFilter({
  options,
  active,
  onChange,
}: {
  options: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filtrar pizzas por categoría"
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className="font-detail relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] transition-colors duration-200"
          >
            {isActive ? (
              <motion.span
                layoutId="pizza-filter-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span
              className={`relative z-10 ${
                isActive ? "text-paper" : "text-ink-soft hover:text-ink"
              }`}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
