import Branding from "@/components/Branding";
import Continer from "@/components/Continer";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen pb-20">
      <Navbar />
      <Continer>
        <HeroSection />
        <Branding />
      </Continer>
    </div>
  );
}
