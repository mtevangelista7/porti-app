import ParticleSphereBg from "@/components/ParticleSphereBg";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleSphereBg />
      <span id="top" />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <StackSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
