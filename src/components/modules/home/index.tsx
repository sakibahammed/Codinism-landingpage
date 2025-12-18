import Adventure from "@/components/ui/sections/Adventure";
import Banner2 from "@/components/ui/sections/Banner2";
import Contribution from "@/components/ui/sections/Contribution";
import GenyoraSection from "@/components/ui/sections/Genoyara";
import Grow from "@/components/ui/sections/Grow";
import Industry from "@/components/ui/sections/Industry";
import TechStack from "@/components/ui/sections/TechStack";
import WeKnow from "@/components/ui/sections/Weknow";

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Banner2 className="h-screen" />
      </div>

      <Industry />
      <GenyoraSection />
      <WeKnow />
      <Contribution />
      <Adventure />
      <Grow />

      <TechStack />
    </>
  );
}
