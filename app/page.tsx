
import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <CoverParticles />
      <div className="bg-gradient-to-b from-gray-800 to-black snap-start">
        <Introduction />
      </div>
      <div className="bg-gradient-to-b from-black to-gray-900 snap-start py-auto">
        <h1 className="mb-1 text-3xl font-bold sm:mb-0 text-white w-full text-center">
          Experiencia
        </h1>
        <TimeLine />
      </div>
    </main>
  );
}
