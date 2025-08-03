import FAQ from "@/components/FAQ";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <Hero className="width-bleed" />
      <main id="main-content">
        <Sponsors />
        <div className={
          clsx("grid grid-cols-1 items-start my-4 gap-2", 
            "md:grid-cols-2"
          )}>
          <FAQ className="col-1"/>
          <div className="border-2 border-purple-600 h-full w-full min-h-[200px] flex items-center justify-center">
            <span className="text-purple-600 italic">[Reserved for image or content]</span>
          </div>
      </ div>
      </main>
    </>
  );
}
