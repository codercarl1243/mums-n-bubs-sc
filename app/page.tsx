import FAQ from "@/components/FAQ";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";

export default function Home() {
  return (
    <>
      <Hero className="width-bleed"/>
      <main id="main-content">
        <Sponsors />
        <FAQ />
      </main>
    </>
  );
}
