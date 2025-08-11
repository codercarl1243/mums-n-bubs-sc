import Divider from "@/components/divider";
import FAQ from "@/components/FAQ";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import Sweeteners from "@/components/sweeteners";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Bumps, babies and beyond</h1>
      <Hero className="width-bleed" />
      <Divider imageSrc={'/assets/drawings/caterpillar.webp'} imageSide="left" imageAlt="green caterpillar, drawn with crayons" />
      <Sweeteners/>
      <Divider imageSrc={'/assets/drawings/elephant.webp'} imageAlt="blue Elephant, drawn with crayons" />
      <Sponsors />
      <Divider imageSrc={'/assets/drawings/cat.webp'} imageAlt="orange Cat, drawn with crayons" imageSide="left" />
      <FAQ />
    </>
  );
}
