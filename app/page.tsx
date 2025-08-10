import Divider from "@/components/divider";
import FAQ from "@/components/FAQ";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import clsx from "clsx";
import Image from '@/components/image'

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Bymps, babies and beyond</h1>
      <Hero className="width-bleed" />
      <Divider imageSrc={'/assets/drawings/caterpillar.webp'} imageSide="left" imageAlt="green caterpillar, drawn with crayons" />
      <Sponsors />
      <Divider imageSrc={'/assets/drawings/elephant.webp'} imageAlt="blue Elephant, drawn with crayons" />
      <div className={
        clsx("grid grid-cols-1 items-start my-4 gap-2",
          "md:grid-cols-[3fr_2fr]"
        )}>
        <FAQ className="col-1" />
        <Image className="h-full w-full min-h-[200px] place-self-center" src={"/assets/drawings/bee.webp"} alt="yellow bee with black stripes, drawn with crayons" height={300} width={300} style={{ height: "300px", width: "300px" }} />
      </ div>
      <Divider imageSrc={'/assets/drawings/cat.webp'} imageAlt="orange Cat, drawn with crayons" imageSide="left" />
    </>
  );
}
