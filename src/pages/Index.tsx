import FoxieNav from "@/components/FoxieNav";
import FoxieHero from "@/components/FoxieHero";
import AgentPanel from "@/components/AgentPanel";
import Capabilities from "@/components/Capabilities";
import KnowledgeBase from "@/components/KnowledgeBase";
import DemoContact from "@/components/DemoContact";
import FoxieFooter from "@/components/FoxieFooter";

const Index = () => {
  return (
    <div className="fb" id="top">
      <FoxieNav />
      <main>
        <FoxieHero />
        <AgentPanel />
        <Capabilities />
        <KnowledgeBase />
        <DemoContact />
      </main>
      <FoxieFooter />
    </div>
  );
};

export default Index;
