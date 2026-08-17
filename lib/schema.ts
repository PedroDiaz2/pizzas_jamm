import { siteConfig } from "@/data/site-config";
import { locations } from "@/data/locations";

export function buildRestaurantJsonLd() {
  const graph = locations.map((loc) => ({
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#${loc.slug}`,
    name: `${siteConfig.name} - ${loc.name}`,
    image: `${siteConfig.url}/images/gallery/horno.svg`,
    url: siteConfig.url,
    telephone: loc.phoneDisplay,
    priceRange: siteConfig.priceRange,
    servesCuisine: ["Pizza", "Italiana", "Peruana"],
    acceptsReservations: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: "Comas",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "15:00",
      closes: "23:00",
    },
    menu: `${siteConfig.url}/#menu`,
    sameAs: [siteConfig.social.facebook, siteConfig.social.tiktok],
  }));

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
