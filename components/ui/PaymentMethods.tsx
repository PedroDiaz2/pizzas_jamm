import { siteConfig } from "@/data/site-config";

export function PaymentMethods() {
  return (
    <div className="flex flex-col items-center gap-3 sm:items-start">
      <span className="font-detail text-[11px] font-bold uppercase tracking-[0.2em] text-paper/50">
        Aceptamos
      </span>
      <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
        {siteConfig.paymentMethods.map((method) => (
          <li
            key={method.id}
            className="font-detail rounded-md border border-paper/20 px-2.5 py-1 text-[11px] font-semibold text-paper/80"
          >
            {method.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
