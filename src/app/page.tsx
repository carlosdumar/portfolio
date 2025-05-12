import { VStack } from "@chakra-ui/react";
import Overview from "../components/Overview/Overview";
import TechStack from "../components/TechStack/TechStack";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <VStack gapY={20} mb={"20"} mt={"20"}>
          <Overview />
          <Projects />
          <About />
          <TechStack />
          <Contact />
        </VStack>
      </main>      
    </div>
  );
}
