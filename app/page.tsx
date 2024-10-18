
import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-cover bg-fixed">
        <CoverParticles />
        <Introduction/>
        <TimeLine/>
      </div>
    </main>
  );
}
