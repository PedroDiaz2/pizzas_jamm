export interface Location {
  id: string;
  slug: string;
  name: string;
  address: string;
  reference?: string;
  mapsQuery: string;
  phoneDisplay: string;
  whatsapp: string;
  hoursDisplay: string;
}

export const locations: Location[] = [
  {
    id: "belaunde",
    slug: "sede-belaunde",
    name: "Sede Belaúnde",
    address: "Av. Víctor Andrés Belaúnde, Comas 15314",
    reference: "3W7V+WRH Comas, Lima",
    mapsQuery: "3W7V+WRH, Av. Victor Andres Belaunde, Comas 15314, Peru",
    phoneDisplay: "+51 956 603 337",
    whatsapp: "51956603337",
    hoursDisplay: "Todos los días de 3:00 pm a 11:00 pm",
  },
  {
    id: "puno",
    slug: "sede-puno",
    name: "Sede Puno",
    address: "Av. Túpac Amaru 5134, Comas 15311",
    mapsQuery: "Av. Tupac Amaru 5134, Comas 15311, Peru",
    phoneDisplay: "+51 959 892 105",
    whatsapp: "51959892105",
    hoursDisplay: "Todos los días de 3:00 pm a 11:00 pm",
  }
];

export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

export function mapsEmbedUrl(query: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=16&output=embed`;
}
