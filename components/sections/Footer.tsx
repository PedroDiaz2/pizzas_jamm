import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { PaymentMethods } from "@/components/ui/PaymentMethods";
import { FacebookIcon, TikTokIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site-config";
import { locations } from "@/data/locations";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-paper/70">
            {siteConfig.description}
          </p>
          <div className="flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pizza's JAMM en Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-brick"
            >
              <FacebookIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pizza's JAMM en TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-brick"
            >
              <TikTokIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-detail text-[11px] font-bold uppercase tracking-[0.2em] text-paper/50">
            Sedes
          </span>
          {locations.map((location) => (
            <div key={location.id} className="text-sm text-paper/80">
              <p className="font-semibold text-paper">{location.name}</p>
              <p>{location.address}</p>
              <p className="text-paper/60">{location.phoneDisplay}</p>
            </div>
          ))}
          <p className="font-detail text-xs text-paper/60">
            {siteConfig.hours.daysDisplay} · {siteConfig.hours.display}
          </p>
        </div>

        <PaymentMethods />
      </Container>

      <div className="border-t border-paper/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-paper/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con masa madre en Comas.</p>
        </Container>
      </div>
    </footer>
  );
}
