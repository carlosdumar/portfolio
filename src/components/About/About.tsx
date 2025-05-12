import { Flex, VStack, Text, HStack, Icon, Badge } from "@chakra-ui/react";
import { FaRegBuilding } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { CgCalendarDates } from "react-icons/cg";

const About = () => {
  return (
    <Flex id="about" flexDirection={"column"} px={{ lg: 80, md: 40, base: 4 }}>
      <VStack>
        <Text
          fontSize={24}
          color={"#42446E"}
          fontWeight={"bold"}
          textAlign={"left"}
          w={"100%"}
          pb={"5"}
        >
          About Me
        </Text>
        <Text>
          Carlos has 15 years+ of experience as software developer. 5 years of
          experience written web apps in health, editorials, and educational
          industries. He has extensive knowledge of JavaScript as well as
          significant experience with popular libraries like React and Redux,
          MobX, Zustand
        </Text>
      </VStack>
      <VStack w={"100%"}>
        <Text
          fontSize={24}
          color={"#42446E"}
          fontWeight={"bold"}
          textAlign={"left"}
          w={"100%"}
          pb={"5"}
          pt={"5"}
        >
          Work Experience
        </Text>
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          pb={"5"}
          borderBottom={"2px solid #A7A7A7"}
        >
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"18px"} color={"#666666"}>
              Web UI Developer
            </Text>
            <HStack>
              <HStack color={"#A7A7A7"}>
                <Icon>
                  <FaRegBuilding />
                </Icon>
                <Text fontSize={"14px"}>Globant</Text>
              </HStack>
              <HStack color={"#A7A7A7"}>
                <Icon>
                  <SlLocationPin />
                </Icon>
                <Text>Medellin</Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack alignItems={"flex-end"}>
            <Badge colorPalette="green" size={"md"} px={5} py={2} rounded={20}>
              Full Time
            </Badge>
            <HStack color={"#A7A7A7"}>
              <Icon>
                <CgCalendarDates />
              </Icon>
              <Text fontSize={"14px"}>Jun 2021 - Jan 2024</Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          pb={"5"}
          pt={"5"}
          borderBottom={"2px solid #A7A7A7"}
        >
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"18px"} color={"#666666"}>
              Senior Technician
            </Text>
            <HStack>
              <HStack color={"#A7A7A7"}>
                <Icon>
                  <FaRegBuilding />
                </Icon>
                <Text fontSize={"14px"}>Endava</Text>
              </HStack>
              <HStack color={"#A7A7A7"}>
                <Icon>
                  <SlLocationPin />
                </Icon>
                <Text>Medellin</Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack alignItems={"flex-end"}>
            <Badge colorPalette="green" size={"md"} px={5} py={2} rounded={20}>Full Time</Badge>
            <HStack color={"#A7A7A7"}>
              <Icon>
                <CgCalendarDates />
              </Icon>
              <Text fontSize={"14px"}>Apr 2017 - May 2021</Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          pb={"5"}
          pt={"5"}
          borderBottom={"2px solid #A7A7A7"}
        >
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"18px"} color={"#666666"}>
              Development Engineer
            </Text>
            <HStack>
              <HStack color={"#A7A7A7"}>
                <Icon>
                  <FaRegBuilding />
                </Icon>
                <Text fontSize={"14px"}>Intergrupo</Text>
              </HStack>
              <HStack color={"#A7A7A7"}>
                <Icon>
                  <SlLocationPin />
                </Icon>
                <Text>Medellin</Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack alignItems={"flex-end"}>
            <Badge colorPalette="green" size={"md"} px={5} py={2} rounded={20}>Full Time</Badge>
            <HStack color={"#A7A7A7"}>
              <Icon>
                <CgCalendarDates />
              </Icon>
              <Text fontSize={"14px"}>Aug 2011 – Aug 2016</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
      <VStack w={"100%"}>
        <Text
          fontSize={24}
          color={"#42446E"}
          fontWeight={"bold"}
          textAlign={"left"}
          w={"100%"}
          pb={"5"}
          pt={"5"}
        >
          Education
        </Text>
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          pb={"5"}
          borderBottom={"2px solid #A7A7A7"}
        >
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"18px"} color={"#666666"}>
              BS, Telecommunication Engineer
            </Text>
            <HStack>
              <HStack color={"#A7A7A7"}>
                <Icon>
                  <FaRegBuilding />
                </Icon>
                <Text fontSize={"14px"}>Santo Tomas University</Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack alignItems={"flex-end"}>
            <Badge colorPalette="green" size={"md"} px={5} py={2} rounded={20}>Full Time</Badge>
            <HStack color={"#A7A7A7"}>
              <Icon>
                <CgCalendarDates />
              </Icon>
              <Text fontSize={"14px"}>Feb 2004 – Aug 2009</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default About;
