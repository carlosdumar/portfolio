import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Icon from "../Icon/Icon";

const icons = [
  {
    id: 1,
    name: "html5",
  },
  {
    id: 2,
    name: "css3",
  },
  {
    id: 3,
    name: "javascript",
  },
  {
    id: 4,
    name: "react",
  },
  {
    id: 5,
    name: "storybook",
  },
  {
    id: 6,
    name: "tailwind",
  },
  {
    id: 7,
    name: "git",
  },
  {
    id: 8,
    name: "typescript",
  },
  {
    id: 9,
    name: "next",
  },
  { id: 10, name: "github" },
  {
    id: 11,
    name: "stylecomponents",
  },
];

const TechStack = () => {
  return (
    <Box id="techstack" px={{ md: 80, base: 4 }}>
      <VStack textAlign={"Box"} gapY={10}>
        <VStack gapY={2}>
          <Text fontSize={24} color={"#42446E"} fontWeight={"bold"}>
            My Tech Stack
          </Text>
          <Text color={"#666666"}>
            Technologies Ive been working with recently
          </Text>
        </VStack>

        <Flex
          gapX={40}
          gapY={10}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {icons.map((icon) => {
            return (
              <Icon
                key={icon.id}
                name={icon.name}
                alt={`${icon.name} icon`}
                width={"50px"}
                height={"50px"}
              />
            );
          })}
        </Flex>
      </VStack>
    </Box>
  );
};

export default TechStack;
