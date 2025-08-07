import Divider from "@/components/divider";
import FAQ from "@/components/FAQ";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import clsx from "clsx";
import Image from '@/components/image'

export default function Home() {
  return (
    <>
      <Hero className="width-bleed" />
      <Divider imageSrc={'/caterpillar.svg'} imageSide="left" />
      <Sponsors />
      <Divider imageSrc={'/elephant.svg'} />
      <div className={
        clsx("grid grid-cols-1 items-start my-4 gap-2",
          "md:grid-cols-[3fr_2fr]"
        )}>
        <FAQ className="col-1" />
        <Image className="h-full w-full min-h-[200px] place-self-center" src={"/bee.svg"} alt="" height={300} width={300} style={{ height: "300px", width: "300px" }} />
      </ div>
      <Divider imageSrc={'/cat.svg'} imageSide="left" />
    </>
  );
}
