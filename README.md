# Pizza's JAMM

Landing page de una sola vista para Pizza's JAMM (Comas, Lima). Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Editar contenido sin tocar componentes

Todo el contenido vive en `/data`, separado de los componentes en `/components`:

- **`data/menu.ts`** — pizzas, pastas, bebidas, bebidas calientes, adicionales y promociones. Cada ítem tiene `image` apuntando a un archivo en `/public/images/menu`. Para agregar un ítem nuevo, copia un objeto existente de su categoría y cambia los campos.
- **`data/locations.ts`** — las 2 sedes (dirección, horario, WhatsApp, query de Google Maps).
- **`data/site-config.ts`** — nombre, tagline, historia, redes sociales, métodos de pago, horario general.

Cambiar un precio, una descripción o agregar una pizza nueva **no requiere tocar ningún archivo de `/components`**.

## Reemplazar imágenes

Ahora mismo `/public/images/menu` y `/public/images/gallery` contienen **ilustraciones SVG generadas** (no fotos), creadas por `scripts/generate-placeholder-art.mjs`, para no depender de fotografía de stock genérica mientras no hay fotos reales del local. Coinciden con la paleta de marca y sirven como sistema visual provisional coherente.

Para poner fotos reales:

1. Reemplaza el archivo (por ejemplo `public/images/menu/pizza-jamm.svg` → puede pasar a `.jpg`).
2. Si cambias la extensión, actualiza el campo `image` de ese ítem en `data/menu.ts` (o `components/sections/*.tsx` para las imágenes de `/gallery` y el hero).
3. No hace falta tocar el JSX de ningún componente — todos usan `next/image` leyendo la ruta desde `/data`.

Si agregas ítems nuevos al menú antes de tener fotos, puedes volver a correr `node scripts/generate-placeholder-art.mjs` (editando el arreglo de slugs correspondiente al inicio del script) para generar arte placeholder consistente para ellos.

## Logo

`components/ui/Logo.tsx` hoy renderiza el nombre en tipografía (Fraunces). Cuando esté lista la marca del chef, reemplaza el contenido del componente por un `<Image src="/images/logo.svg" ... />` — se usa en el Header y el Footer, así que un solo cambio lo actualiza en todo el sitio.

## Sistema de diseño

- **Paleta** — `paper` #F7F1E4 (fondo cálido tipo papel kraft/boleta), `ink` #241712, `brick` #C22F1D (rojo ladrillo, no rojo bandera italiana), `pine` #2B4634 (verde pino desaturado), `mustard` #E8A93E (acento dorado). Definida en `app/globals.css` (`@theme`).
- **Tipografía** — Fraunces (display, con cursiva expresiva) para títulos, Inter para cuerpo, Space Mono para precios/etiquetas ("ticket de pedido").
- **Elemento firma** — el "corte de pizza cutter": un divisor SVG serrado (`components/ui/CutterDivider.tsx`) entre secciones, y tarjetas de menú con borde perforado tipo ticket (`components/ui/MenuCard.tsx`).

## Estructura

```
/app          layout, page, sitemap.ts, robots.ts
/components
  /sections   Header, Hero, Menu, About, Locations, Gallery, FinalCta, Footer
  /ui         Button, Container, MenuCard, CutterDivider, etc.
/data         menu.ts, locations.ts, site-config.ts
/lib          whatsapp.ts, schema.ts (JSON-LD)
/public/images/{menu,gallery}
/scripts      generate-placeholder-art.mjs
```

## Pendiente antes de producción

- Cambiar `url` en `data/site-config.ts` (ahora es un dominio placeholder) por el dominio real, para que Open Graph, `sitemap.xml` y el JSON-LD apunten correctamente.
- Reemplazar imágenes placeholder por fotografía real cuando esté disponible.
- Insertar el logo real en `components/ui/Logo.tsx`.
