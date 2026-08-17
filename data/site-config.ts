export const siteConfig = {
  name: "Pizza's JAMM",
  shortName: "JAMM",
  tagline: "La pizza que junta a Comas en una mesa.",
  heroHeadline: {
    lead: "La pizza que junta a",
    emphasis: "Comas",
    trail: "en una mesa.",
  },
  description:
    "Pizzería de barrio en Comas con dos sedes: pizzas a la piedra, pastas caseras y delivery directo por WhatsApp. Todos los días de 3:00 pm a 11:00 pm.",
  story: [
    "Pizza's JAMM nació en Comas para llenar las mesas del barrio, no las de una cadena.",
    "Masa fermentada, horno a diario y recetas que no cambian aunque cambien las modas: esa es la promesa detrás de cada pedido.",
  ],
  url: "https://pizzasjamm.com",
  locale: "es_PE",
  currency: "PEN",
  currencySymbol: "S/",
  themeColor: "#C22F1D",
  social: {
    facebook: "https://www.facebook.com/p/Pizzas-JAMM-100063490600810/?locale=es_LA",
    tiktok: "https://www.tiktok.com/@pizzasjamm",
  },
  hours: {
    daysDisplay: "Todos los días",
    openTime: "15:00",
    closeTime: "23:00",
    display: "3:00 pm – 11:00 pm",
  },
  priceRange: "S/ 2 – S/ 60",
  paymentMethods: [
    { id: "visa", label: "Visa" },
    { id: "mastercard", label: "Mastercard" },
    { id: "amex", label: "American Express" },
    { id: "diners", label: "Diners Club" },
    { id: "oh", label: "Óh!" },
    { id: "cencosud", label: "Cencosud" },
    { id: "yape", label: "Yape" },
    { id: "plin", label: "Plin" },
  ],
} as const;
