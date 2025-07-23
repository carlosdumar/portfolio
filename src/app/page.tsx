import { VStack } from "@chakra-ui/react";

import {
  TechStack,
  Projects,
  About,
  Contact,
  Overview
} from "../components";
import ChatbotAI from "../components/ChatbotAI/ChatbotAI";

export default function Home() {
 
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <VStack gapY={20} mb={"20"} mt={"40"}>
          <Overview />
          <Projects />
          <About />
          <TechStack />
          <Contact />
        </VStack>
        <ChatbotAI />
      </main>     
    </div>
  );
}
