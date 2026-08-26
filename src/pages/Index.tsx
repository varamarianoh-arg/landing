import InteractiveGrid from "@/components/InteractiveGrid";
import Navbar from "@/components/Navbar";
import EntrySection from "@/components/EntrySection";
import ProductsOverview from "@/components/ProductsOverview";
import FeatureShowcase from "@/components/FeatureShowcase";
import DashboardPreview from "@/components/DashboardPreview";
import FlowSection from "@/components/FlowSection";
import ChatbotSection from "@/components/ChatbotSection";
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
        <ProductsOverview />
        <ParallaxDivider variant="scatter" />
        <FeatureShowcase />
        <ParallaxDivider variant="line" />
        <DashboardPreview />
        <ParallaxDivider variant="wave" />
        <FlowSection />
        <ParallaxDivider variant="scatter" />
        <ChatbotSection />
        <ParallaxDivider variant="line" />
        <DifferentialSection />
        <ParallaxDivider variant="scatter" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
