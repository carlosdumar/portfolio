"use client";

import {
  Box,
  Text,
  Image,
  defineStyle,
  HStack,
  Link,
  VStack,
  Button,
} from "@chakra-ui/react";
import { File } from "lucide-react";

const ringCss = defineStyle({
  background: "linear-gradient(#E70FAA, #13B0F5)",
  padding: "5px",
});

const Overview = () => {
  return (
    <Box
      id="overview"
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
      px={{ lg: 40, md: 40, base: 4 }}
    >
      <HStack justifyContent={"space-between"} width={"100%"}>
        <VStack>
          <Text fontWeight={"bold"} color={"#42446E"} fontSize={40}>
            Hi 👋, <br />
            My Name is
            <br />
            <Text
              color={"transparent"}
              backgroundClip={"text"}
              as={"span"}
              style={{ backgroundImage: "linear-gradient(#E70FAA, #13B0F5)" }}
            >
              Carlos Rodriguez
              <br />
            </Text>
            I build things for web
          </Text>
          <Button
            as={Link}
            rel="noopener noreferrer"
            asChild
            variant={"outline"}
          >
            <Link
              href="https://drive.google.com/file/d/1C-Uxh5kgzvdXw17zueaVSV_ygEAuFTKn/view?usp=sharing"
              target="_blank"
              alignSelf={"flex-end"}
            >
              <File />
              <Text
                color={"transparent"}
                backgroundClip={"text"}
                backgroundImage={"linear-gradient(#E70FAA, #13B0F5)"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
              >
                View Resume
              </Text>
            </Link>
          </Button>
        </VStack>
        <Image
          src="/images/carlos.jpeg"
          boxSize="240px"
          alt="Carlos Rodriguez"
          borderRadius="full"
          fit="cover"
          css={ringCss}
          borderImage={"linear-gradient(#E70FAA, #13B0F5)"}
        />
      </HStack>
    </Box>
  );
};

export default Overview;
