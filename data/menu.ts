export type MenuCategory =
  | "pizzas"
  | "pastas"
  | "bebidas"
  | "bebidas-calientes"
  | "adicionales"
  | "promociones";

export interface SizePrices {
  familiar?: number;
  mediana?: number;
  personal?: number;
}

export interface BaseMenuItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tags?: string[];
}

export interface PizzaMenuItem extends BaseMenuItem {
  category: "pizzas";
  prices: SizePrices;
}

export interface SingleServeMenuItem extends BaseMenuItem {
  category: "pastas" | "bebidas" | "bebidas-calientes" | "adicionales";
  price: number;
}

export interface PromoMenuItem extends BaseMenuItem {
  category: "promociones";
  price: number;
  includes: string[];
  badge?: string;
}

export type MenuItem = PizzaMenuItem | SingleServeMenuItem | PromoMenuItem;

export const extraToppingCharge: SizePrices = {
  familiar: 6,
  mediana: 4,
  personal: 3,
};

export const pizzaSizeLabels: Record<keyof SizePrices, string> = {
  familiar: "Familiar",
  mediana: "Mediana",
  personal: "Personal",
};

export const pizzas: PizzaMenuItem[] = [
  {
    id: "americana",
    slug: "americana",
    category: "pizzas",
    name: "Americana",
    description:
      "Salsa pizzera, queso mozzarella y jamón. Pimientos y aceitunas opcionales.",
    prices: { familiar: 24, mediana: 16, personal: 11 },
    tags: ["clasica"],
    image: "/images/menu/pizza-americana.svg",
    imageAlt: "Pizza Americana con salsa pizzera, mozzarella y jamón",
  },
  {
    id: "italiana",
    slug: "italiana",
    category: "pizzas",
    name: "Italiana",
    description:
      "Salsa pizzera, queso mozzarella y salame. Pimientos y aceitunas opcionales.",
    prices: { familiar: 25, mediana: 17, personal: 11 },
    tags: ["clasica"],
    image: "/images/menu/pizza-italiana.svg",
    imageAlt: "Pizza Italiana con salsa pizzera, mozzarella y salame",
  },
  {
    id: "napolitana",
    slug: "napolitana",
    category: "pizzas",
    name: "Napolitana",
    description:
      "Salsa pizzera, queso mozzarella, cebolla y rodajas de tomate. Pimientos y aceitunas opcionales.",
    prices: { familiar: 26, mediana: 16, personal: 11 },
    tags: ["clasica", "vegetariana"],
    image: "/images/menu/pizza-napolitana.svg",
    imageAlt: "Pizza Napolitana con cebolla y rodajas de tomate fresco",
  },
  {
    id: "francesa-vegetariana",
    slug: "francesa-vegetariana",
    category: "pizzas",
    name: "Francesa Vegetariana",
    description:
      "Salsa pizzera, queso mozzarella y champiñones. Pimientos y aceitunas opcionales.",
    prices: { familiar: 29, mediana: 17, personal: 12 },
    tags: ["vegetariana"],
    image: "/images/menu/pizza-francesa-vegetariana.svg",
    imageAlt: "Pizza Francesa Vegetariana con champiñones y mozzarella",
  },
  {
    id: "hawaiana",
    slug: "hawaiana",
    category: "pizzas",
    name: "Hawaiana",
    description:
      "Salsa pizzera, queso mozzarella, jamón y piña. Pimientos y aceitunas opcionales.",
    prices: { familiar: 30, mediana: 19, personal: 12 },
    tags: ["clasica"],
    image: "/images/menu/pizza-hawaiana.svg",
    imageAlt: "Pizza Hawaiana con jamón y piña",
  },
  {
    id: "hawaiana-especial",
    slug: "hawaiana-especial",
    category: "pizzas",
    name: "Hawaiana Especial",
    description:
      "Salsa pizzera, queso mozzarella, jamón, piña, durazno y doble queso. Pimientos y aceitunas opcionales.",
    prices: { familiar: 39, mediana: 22, personal: 14 },
    tags: ["especial"],
    image: "/images/menu/pizza-hawaiana-especial.svg",
    imageAlt: "Pizza Hawaiana Especial con jamón, piña, durazno y doble queso",
  },
  {
    id: "peruana",
    slug: "peruana",
    category: "pizzas",
    name: "Peruana",
    description:
      "Salsa pizzera, queso mozzarella y hot dog. Pimientos y aceitunas opcionales.",
    prices: { familiar: 25, mediana: 16, personal: 11 },
    tags: ["clasica"],
    image: "/images/menu/pizza-peruana.svg",
    imageAlt: "Pizza Peruana con hot dog y mozzarella",
  },
  {
    id: "brasilera",
    slug: "brasilera",
    category: "pizzas",
    name: "Brasilera",
    description:
      "Salsa pizzera, queso mozzarella, jamón y tocino. Pimientos y aceitunas opcionales.",
    prices: { familiar: 35, mediana: 21, personal: 13 },
    tags: ["especial"],
    image: "/images/menu/pizza-brasilera.svg",
    imageAlt: "Pizza Brasilera con jamón y tocino",
  },
  {
    id: "espanola",
    slug: "espanola",
    category: "pizzas",
    name: "Española",
    description:
      "Salsa pizzera, queso mozzarella y chorizo español. Pimientos y aceitunas opcionales.",
    prices: { familiar: 29, mediana: 18, personal: 12 },
    tags: ["especial"],
    image: "/images/menu/pizza-espanola.svg",
    imageAlt: "Pizza Española con chorizo español y mozzarella",
  },
  {
    id: "naciones-unidas",
    slug: "naciones-unidas",
    category: "pizzas",
    name: "Naciones Unidas",
    description:
      "Salsa pizzera, queso mozzarella, jamón, salame, chorizo, tocino, champiñones y doble queso. Pimientos y aceitunas opcionales.",
    prices: { familiar: 42, mediana: 23, personal: 15 },
    tags: ["especial", "picante"],
    image: "/images/menu/pizza-naciones-unidas.svg",
    imageAlt: "Pizza Naciones Unidas cargada con jamón, salame, chorizo, tocino y champiñones",
  },
  {
    id: "jamm",
    slug: "jamm",
    category: "pizzas",
    name: "Jamm",
    description:
      "Salsa pizzera, queso mozzarella, jamón, chorizo y carne. Pimientos y aceitunas opcionales.",
    prices: { familiar: 34, mediana: 19, personal: 13 },
    tags: ["especial", "firma"],
    image: "/images/menu/pizza-jamm.svg",
    imageAlt: "Pizza Jamm con jamón, chorizo y carne, la firma de la casa",
  },
  {
    id: "jamm-especial",
    slug: "jamm-especial",
    category: "pizzas",
    name: "Jamm Especial",
    description:
      "Salsa pizzera, queso mozzarella, jamón, chorizo, carne y doble queso. Pimientos y aceitunas opcionales.",
    prices: { familiar: 39, mediana: 22, personal: 14 },
    tags: ["especial", "firma"],
    image: "/images/menu/pizza-jamm-especial.svg",
    imageAlt: "Pizza Jamm Especial con jamón, chorizo, carne y doble queso",
  },
  {
    id: "brava",
    slug: "brava",
    category: "pizzas",
    name: "Brava",
    description:
      "Salsa pizzera, queso mozzarella, chorizo y cabanossi. Pimientos y aceitunas opcionales.",
    prices: { familiar: 33, mediana: 19, personal: 13 },
    tags: ["especial", "picante"],
    image: "/images/menu/pizza-brava.svg",
    imageAlt: "Pizza Brava con chorizo y cabanossi",
  },
  {
    id: "gourmet",
    slug: "gourmet",
    category: "pizzas",
    name: "Gourmet",
    description:
      "Salsa pizzera, queso mozzarella, peperoni, champiñones y carne. Pimientos y aceitunas opcionales.",
    prices: { familiar: 34, mediana: 19, personal: 13 },
    tags: ["especial"],
    image: "/images/menu/pizza-gourmet.svg",
    imageAlt: "Pizza Gourmet con peperoni, champiñones y carne",
  },
  {
    id: "tradicional-de-pollo",
    slug: "tradicional-de-pollo",
    category: "pizzas",
    name: "Tradicional de Pollo",
    description:
      "Salsa pizzera, queso mozzarella, jamón y pollo deshilachado. Pimientos y aceitunas opcionales.",
    prices: { familiar: 28, mediana: 18, personal: 12 },
    tags: ["clasica"],
    image: "/images/menu/pizza-tradicional-de-pollo.svg",
    imageAlt: "Pizza Tradicional de Pollo con jamón y pollo deshilachado",
  },
  {
    id: "4-estaciones",
    slug: "4-estaciones",
    category: "pizzas",
    name: "4 Estaciones",
    description:
      "Un cuarto Italiana, un cuarto Hawaiana, un cuarto Española y un cuarto Brasilera. Pimientos y aceitunas opcionales.",
    prices: { familiar: 37 },
    tags: ["especial"],
    image: "/images/menu/pizza-4-estaciones.svg",
    imageAlt: "Pizza 4 Estaciones dividida en Italiana, Hawaiana, Española y Brasilera",
  },
  {
    id: "siciliana",
    slug: "siciliana",
    category: "pizzas",
    name: "Siciliana",
    description:
      "Salsa pizzera, queso mozzarella, jamón y salame. Pimientos y aceitunas opcionales.",
    prices: { familiar: 29, mediana: 18, personal: 13 },
    tags: ["clasica"],
    image: "/images/menu/pizza-siciliana.svg",
    imageAlt: "Pizza Siciliana con jamón y salame",
  },
  {
    id: "portuguesa",
    slug: "portuguesa",
    category: "pizzas",
    name: "Portuguesa",
    description:
      "Salsa pizzera, queso mozzarella, chorizo y tocino. Pimientos y aceitunas opcionales.",
    prices: { familiar: 37, mediana: 22, personal: 14 },
    tags: ["especial"],
    image: "/images/menu/pizza-portuguesa.svg",
    imageAlt: "Pizza Portuguesa con chorizo y tocino",
  },
];

export const pastas: SingleServeMenuItem[] = [
  {
    id: "lasagna",
    slug: "lasagna",
    category: "pastas",
    name: "Lasagna",
    description: "Tradicional de carne con salsa bechamel. Incluye pan al ajo.",
    price: 19,
    image: "/images/menu/pasta-lasagna.svg",
    imageAlt: "Lasagna tradicional de carne con salsa bechamel",
  },
  {
    id: "lasagna-especial",
    slug: "lasagna-especial",
    category: "pastas",
    name: "Lasagna Especial",
    description: "Tradicional de carne con salsa y champiñones. Incluye pan al ajo.",
    price: 21,
    image: "/images/menu/pasta-lasagna-especial.svg",
    imageAlt: "Lasagna especial de carne con champiñones",
  },
  {
    id: "lasagna-alfredo",
    slug: "lasagna-a-lo-alfredo",
    category: "pastas",
    name: "Lasagna a lo Alfredo",
    description: "Con salsa a lo Alfredo y jamón picado. Incluye pan al ajo.",
    price: 22,
    image: "/images/menu/pasta-lasagna-alfredo.svg",
    imageAlt: "Lasagna a lo Alfredo con jamón picado",
  },
  {
    id: "lasagna-jamm",
    slug: "lasagna-jamm",
    category: "pastas",
    name: "Lasagna Jamm",
    description: "Tradicional de carne con salsa bechamel y chorizo. Incluye pan al ajo.",
    price: 23,
    tags: ["firma"],
    image: "/images/menu/pasta-lasagna-jamm.svg",
    imageAlt: "Lasagna Jamm con salsa bechamel y chorizo",
  },
  {
    id: "lasagna-pollo",
    slug: "lasagna-de-pollo",
    category: "pastas",
    name: "Lasagna de Pollo",
    description:
      "Tradicional de carne con salsa bechamel y pollo deshilachado. Incluye pan al ajo.",
    price: 22,
    image: "/images/menu/pasta-lasagna-pollo.svg",
    imageAlt: "Lasagna de Pollo con salsa bechamel y pollo deshilachado",
  },
  {
    id: "canelones",
    slug: "canelones",
    category: "pastas",
    name: "Canelones",
    description: "Rellenos con jamón y queso con abundante salsa. Incluye pan al ajo.",
    price: 19,
    image: "/images/menu/pasta-canelones.svg",
    imageAlt: "Canelones rellenos de jamón y queso",
  },
  {
    id: "canelones-alfredo",
    slug: "canelones-a-lo-alfredo",
    category: "pastas",
    name: "Canelones a lo Alfredo",
    description:
      "Rellenos de queso y jamón con abundante salsa a lo Alfredo. Incluye pan al ajo.",
    price: 21,
    image: "/images/menu/pasta-canelones-alfredo.svg",
    imageAlt: "Canelones a lo Alfredo rellenos de queso y jamón",
  },
  {
    id: "fettuccini-bolognesa",
    slug: "fettuccini-a-la-bolognesa",
    category: "pastas",
    name: "Fettuccini a la Bolognesa",
    description: "Con salsa de carne. Incluye pan al ajo.",
    price: 19,
    image: "/images/menu/pasta-fettuccini-bolognesa.svg",
    imageAlt: "Fettuccini a la Bolognesa con salsa de carne",
  },
  {
    id: "fettuccini-alfredo",
    slug: "fettuccini-a-lo-alfredo",
    category: "pastas",
    name: "Fettuccini a lo Alfredo",
    description: "En salsa a lo Alfredo, jamón y queso. Incluye pan al ajo.",
    price: 21,
    image: "/images/menu/pasta-fettuccini-alfredo.svg",
    imageAlt: "Fettuccini a lo Alfredo con jamón y queso",
  },
  {
    id: "fettuccini-especial-alfredo",
    slug: "fettuccini-especial-a-lo-alfredo",
    category: "pastas",
    name: "Fettuccini Especial a lo Alfredo",
    description:
      "En salsa a lo Alfredo, champiñones, jamón y queso. Incluye pan al ajo.",
    price: 23,
    image: "/images/menu/pasta-fettuccini-especial-alfredo.svg",
    imageAlt: "Fettuccini Especial a lo Alfredo con champiñones, jamón y queso",
  },
  {
    id: "ravioles-carne",
    slug: "ravioles-de-carne",
    category: "pastas",
    name: "Ravioles de Carne",
    description: "En salsa roja con carne. Incluye pan al ajo.",
    price: 19,
    image: "/images/menu/pasta-ravioles-carne.svg",
    imageAlt: "Ravioles de carne en salsa roja",
  },
  {
    id: "ravioles-alfredo",
    slug: "ravioles-a-lo-alfredo",
    category: "pastas",
    name: "Ravioles a lo Alfredo",
    description: "Con abundante salsa blanca. Incluye pan al ajo.",
    price: 21,
    image: "/images/menu/pasta-ravioles-alfredo.svg",
    imageAlt: "Ravioles a lo Alfredo con salsa blanca",
  },
  {
    id: "ravioles-especial-alfredo",
    slug: "ravioles-especial-a-lo-alfredo",
    category: "pastas",
    name: "Ravioles Especial a lo Alfredo",
    description:
      "En salsa a lo Alfredo, champiñones, jamón y queso. Incluye pan al ajo.",
    price: 23,
    image: "/images/menu/pasta-ravioles-especial-alfredo.svg",
    imageAlt: "Ravioles Especial a lo Alfredo con champiñones, jamón y queso",
  },
];

export const bebidas: SingleServeMenuItem[] = [
  {
    id: "pepsi-500",
    slug: "gaseosa-pepsi-500ml",
    category: "bebidas",
    name: "Gaseosa Pepsi 500 ml",
    description: "Botella personal de 500 ml.",
    price: 3,
    image: "/images/menu/bebida-pepsi-500.svg",
    imageAlt: "Botella de gaseosa Pepsi de 500 mililitros",
  },
  {
    id: "gaseosa-gordita",
    slug: "gaseosa-media-litro",
    category: "bebidas",
    name: "Gaseosa 1/2 litro (Gordita)",
    description: "Presentación de media litro.",
    price: 5,
    image: "/images/menu/bebida-gaseosa-gordita.svg",
    imageAlt: "Gaseosa gordita de media litro",
  },
  {
    id: "gaseosa-750",
    slug: "gaseosa-750ml",
    category: "bebidas",
    name: "Gaseosa 750 ml",
    description: "Pepsi, Concordia o 7Up.",
    price: 4,
    image: "/images/menu/bebida-gaseosa-750.svg",
    imageAlt: "Gaseosa de 750 mililitros, Pepsi, Concordia o 7Up",
  },
  {
    id: "gaseosa-litro-inca-coca",
    slug: "gaseosa-1-litro-inca-coca",
    category: "bebidas",
    name: "Gaseosa 1 litro (Inca Kola o Coca Cola)",
    description: "Presentación de un litro.",
    price: 7,
    image: "/images/menu/bebida-gaseosa-litro-inca-coca.svg",
    imageAlt: "Gaseosa de un litro Inca Kola o Coca Cola",
  },
  {
    id: "gaseosa-litro-pepsi",
    slug: "gaseosa-1-litro-pepsi",
    category: "bebidas",
    name: "Gaseosa 1 litro (Pepsi)",
    description: "Presentación de un litro.",
    price: 5,
    image: "/images/menu/bebida-gaseosa-litro-pepsi.svg",
    imageAlt: "Gaseosa Pepsi de un litro",
  },
  {
    id: "gaseosa-1-5-inca-coca",
    slug: "gaseosa-1-5-litro-inca-coca",
    category: "bebidas",
    name: "Gaseosa 1½ litro (Inca Kola o Coca Cola)",
    description: "Presentación de litro y medio.",
    price: 8,
    image: "/images/menu/bebida-gaseosa-1-5-inca-coca.svg",
    imageAlt: "Gaseosa litro y medio Inca Kola o Coca Cola",
  },
  {
    id: "gaseosa-1-5-pepsi",
    slug: "gaseosa-1-5-litro-pepsi",
    category: "bebidas",
    name: "Gaseosa 1½ litro (Pepsi, Concordia, Triple Cola, 7Up)",
    description: "Presentación de litro y medio.",
    price: 7,
    image: "/images/menu/bebida-gaseosa-1-5-pepsi.svg",
    imageAlt: "Gaseosa litro y medio Pepsi, Concordia, Triple Cola o 7Up",
  },
  {
    id: "jarra-chicha",
    slug: "jarra-de-chicha-morada",
    category: "bebidas",
    name: "Jarra de chicha morada",
    description: "Chicha morada preparada en casa.",
    price: 7,
    tags: ["vegetariana"],
    image: "/images/menu/bebida-jarra-chicha.svg",
    imageAlt: "Jarra de chicha morada",
  },
  {
    id: "jarra-maracuya",
    slug: "jarra-de-maracuya",
    category: "bebidas",
    name: "Jarra de maracuyá",
    description: "Refresco de maracuyá preparado en casa.",
    price: 7,
    tags: ["vegetariana"],
    image: "/images/menu/bebida-jarra-maracuya.svg",
    imageAlt: "Jarra de refresco de maracuyá",
  },
  {
    id: "media-jarra-chicha",
    slug: "media-jarra-de-chicha-morada",
    category: "bebidas",
    name: "½ jarra de chicha morada",
    description: "Media jarra de chicha morada.",
    price: 4,
    tags: ["vegetariana"],
    image: "/images/menu/bebida-media-jarra-chicha.svg",
    imageAlt: "Media jarra de chicha morada",
  },
  {
    id: "vaso-chicha",
    slug: "vaso-de-chicha-morada",
    category: "bebidas",
    name: "Vaso de chicha morada",
    description: "Un vaso de chicha morada.",
    price: 2,
    tags: ["vegetariana"],
    image: "/images/menu/bebida-vaso-chicha.svg",
    imageAlt: "Vaso de chicha morada",
  },
  {
    id: "agua-mineral",
    slug: "agua-mineral",
    category: "bebidas",
    name: "Agua mineral",
    description: "Botella de agua mineral.",
    price: 2,
    tags: ["vegetariana"],
    image: "/images/menu/bebida-agua-mineral.svg",
    imageAlt: "Botella de agua mineral",
  },
];

export const bebidasCalientes: SingleServeMenuItem[] = [
  {
    id: "cafe-instantaneo",
    slug: "cafe-instantaneo",
    category: "bebidas-calientes",
    name: "Café instantáneo",
    description: "Café caliente instantáneo.",
    price: 2.5,
    image: "/images/menu/bebida-cafe.svg",
    imageAlt: "Taza de café instantáneo",
  },
  {
    id: "te-anis-manzanilla",
    slug: "te-anis-manzanilla",
    category: "bebidas-calientes",
    name: "Té / Anís / Manzanilla",
    description: "Infusión caliente a elección.",
    price: 2,
    image: "/images/menu/bebida-te.svg",
    imageAlt: "Taza de té, anís o manzanilla",
  },
];

export const adicionales: SingleServeMenuItem[] = [
  {
    id: "pan-al-ajo",
    slug: "pan-al-ajo",
    category: "adicionales",
    name: "Porción de pan al ajo",
    description: "Pan al ajo recién horneado.",
    price: 6,
    image: "/images/menu/adicional-pan-al-ajo.svg",
    imageAlt: "Porción de pan al ajo",
  },
  {
    id: "pan-al-ajo-especial",
    slug: "pan-al-ajo-especial",
    category: "adicionales",
    name: "Porción de pan al ajo especial",
    description: "Con mozzarella.",
    price: 8,
    image: "/images/menu/adicional-pan-al-ajo-especial.svg",
    imageAlt: "Porción de pan al ajo especial con mozzarella",
  },
  {
    id: "pan-al-ajo-jamm",
    slug: "pan-al-ajo-jamm",
    category: "adicionales",
    name: "Porción de pan al ajo Jamm",
    description: "Con mozzarella y jamón.",
    price: 10,
    tags: ["firma"],
    image: "/images/menu/adicional-pan-al-ajo-jamm.svg",
    imageAlt: "Porción de pan al ajo Jamm con mozzarella y jamón",
  },
];

export const promociones: PromoMenuItem[] = [
  {
    id: "promocion-x2",
    slug: "promocion-x2",
    category: "promociones",
    name: "Promoción x2",
    description: "Dos familiares para compartir en grupo, con pan al ajo y bebida.",
    price: 60,
    badge: "La más pedida",
    includes: [
      "1 pizza Americana familiar",
      "1 pizza Hawaiana familiar",
      "Pan al ajo",
      "Gaseosa 1½ litro (o jarra de chicha morada o jarra de maracuyá)",
    ],
    image: "/images/menu/promo-x2.svg",
    imageAlt: "Promoción x2 con dos pizzas familiares, pan al ajo y bebida",
  },
  {
    id: "combinacion-perfecta",
    slug: "combinacion-perfecta",
    category: "promociones",
    name: "Combinación Perfecta",
    description: "Ideal para dos: media pizza y una pasta a elección.",
    price: 40,
    badge: "Para 2 personas",
    includes: [
      "Media pizza Americana",
      "Lasagna, Fettuccini o Canelones a la Bolognesa (a elección)",
      "Pan al ajo",
      "Chicha morada",
    ],
    image: "/images/menu/promo-combinacion-perfecta.svg",
    imageAlt: "Promoción Combinación Perfecta con media pizza, pasta, pan al ajo y chicha morada",
  },
];

export const menu: MenuItem[] = [
  ...promociones,
  ...pizzas,
  ...pastas,
  ...bebidas,
  ...bebidasCalientes,
  ...adicionales,
];

export const featuredPizzaSlugs = [
  "americana",
  "italiana",
  "napolitana",
  "francesa-vegetariana",
  "hawaiana",
  "hawaiana-especial",
  "peruana",
  "brasilera",
  "española",
  "naciones-unidas",
  "jamm",
  "jamm-especial",
  "brava",
  "gourmet",
  "tradicional-de-pollo",
  "4-estaciones",
  "siciliana",
  "portuguesa",
];

export const featuredPizzas = pizzas.filter((p) =>
  featuredPizzaSlugs.includes(p.slug)
);

export const menuCategoryLabels: Record<MenuCategory, string> = {
  promociones: "Promociones",
  pizzas: "Pizzas",
  pastas: "Pastas",
  bebidas: "Bebidas",
  "bebidas-calientes": "Bebidas calientes",
  adicionales: "Adicionales",
};

export const pizzaFilterTags: { value: string; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "clasica", label: "Clásicas" },
  { value: "especial", label: "Especiales" },
  { value: "vegetariana", label: "Vegetarianas" },
  { value: "picante", label: "Picantes" },
];
