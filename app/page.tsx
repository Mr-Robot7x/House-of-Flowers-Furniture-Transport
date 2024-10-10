import Continer from "@/components/Continer";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Continer>
        <HeroSection />
      </Continer>
    </div>
  );
}
