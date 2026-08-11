import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import CreatorSpotlight from "@/components/CreatorSpotlight";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white selection:bg-amber-500 selection:text-black">
      <Hero />
      <StatsSection />
      
      {/* Section Windah Basudara Spotlight */}
      <CreatorSpotlight />

      <ProjectsShowcase />
      <Footer />
    </main>
  );
}