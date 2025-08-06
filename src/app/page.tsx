import { VStack } from "@chakra-ui/react";

import { TechStack, Projects, About, Contact, Overview } from "../components";
import ChatbotAI from "../components/ChatbotAI/ChatbotAI";
import octokit from "../lib/octokit";

async function getInitialProps() {
  const { data } = await octokit.request("GET /users/adminDreamBike/repos", {
    // Static (cached indefinitely)
    cache: "force-cache",
  });
  return data;
}

export default async function Home() {
  const projects = await getInitialProps();

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <VStack gapY={20} mb={"20"} mt={"40"}>
          <Overview />
          <Projects initialData={projects} />
          <About />
          <TechStack />
          <Contact />
        </VStack>
        <ChatbotAI />
      </main>
    </div>
  );
}
