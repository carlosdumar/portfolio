import { VStack } from "@chakra-ui/react";
import Overview from "../components/Overview/Overview";
import TechStack from "../components/TechStack/TechStack";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <VStack gapY={10}>
          <Overview />
          <TechStack />
          <Projects />
        </VStack>
      </main>
      <footer></footer>
    </div>
  );
}
