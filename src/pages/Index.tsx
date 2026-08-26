import InteractiveGrid from "@/components/InteractiveGrid";
import Navbar from "@/components/Navbar";
import EntrySection from "@/components/EntrySection";
import FeatureShowcase from "@/components/FeatureShowcase";
import DashboardPreview from "@/components/DashboardPreview";
import FlowSection from "@/components/FlowSection";
import DifferentialSection from "@/components/DifferentialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParallaxDivider from "@/components/ParallaxDivider";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <InteractiveGrid />
      <Navbar />
      <main className="relative z-10">
        <EntrySection />
        <ParallaxDivider variant="wave" />
        <FeatureShowcase />
        <ParallaxDivider variant="scatter" />
        <DashboardPreview />
        <ParallaxDivider variant="line" />
        <FlowSection />
        <ParallaxDivider variant="wave" />
        <DifferentialSection />
        <ParallaxDivider variant="scatter" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
