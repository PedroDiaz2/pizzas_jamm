import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { About } from "@/components/sections/About";
import { Locations } from "@/components/sections/Locations";
import { Gallery } from "@/components/sections/Gallery";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { CutterDivider } from "@/components/ui/CutterDivider";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <Analytics />
      <Header />
      <main>
        <Hero />
        <Menu />
        <CutterDivider fromColor="var(--color-paper)" toColor="var(--color-ink)" />
        <About />
        <CutterDivider fromColor="var(--color-ink)" toColor="var(--color-paper-dim)" />
        <Locations />
        <CutterDivider fromColor="var(--color-paper-dim)" toColor="var(--color-paper)" />
        <Gallery />
        <CutterDivider fromColor="var(--color-paper)" toColor="var(--color-brick)" />
        <FinalCta />
        <CutterDivider fromColor="var(--color-brick)" toColor="var(--color-ink)" />
      </main>
      <Footer />
    </>
  );
}
