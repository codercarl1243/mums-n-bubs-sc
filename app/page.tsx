import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl bg-white font-serif text-bold w-fit text-center">
        <span className="text-yellow-600 block text-center">Bumps,</span>
        <div className="text-3xl">
          <span className="text-purple-950">Bab</span>
          <span className="text-secondary-400/70">ie</span>
          <span className="text-yellow-600">s</span>
        </div>
        <div className="text-secondary-400">&</div>
        <span className="text-purple-950">Beyond</span>

      </h1>

      <FAQ />
    </main>
  );
}
