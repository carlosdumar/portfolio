"use client";

import { FC } from "react";
import useGitHubUser from "../../hooks/useGitHubUser";
import {
  VStack,
  Text,
  Flex,
  Card,
  Image,
  HStack,
  Link,
  Box,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Toaster, toaster } from "../ui/toaster";
import { excludedProjects } from "../../lib/utils";

const textStyle = {
  overflow: "hidden",
  WebkitLineClamp: 4,
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical" as const,
  display: "-webkit-box",
};

const Projects: FC = () => {
  const { user = [], isLoading, isError, error } = useGitHubUser();
  console.log("user", user);

  const filteredProjects = user?.filter(
    (project: any) => !excludedProjects.includes(project.name)
  );
  if (isError) {
    toaster.create({
      title: `${error}`,
      type: "error",
    });
  }
  return (
    <VStack id="projects" px={{ lg: 80, md: 40, base: 4 }} gapY={10}>
      <Box textAlign={"center"}>
        <Text fontSize={24} color={"#42446E"} fontWeight={"bold"}>
          Projects
        </Text>
        <Text color={"#666666"}>Things Ive built so far</Text>
      </Box>

      <Flex
        flexWrap={"wrap"}
        gapY={5}
        gapX={"10px"}
        justifyContent={{ md: "space-between", base: "center" }}
      >
        {filteredProjects?.map((project: any) => {
          const { description, id, language, name, url, homepage } = project;
          return (
            <Card.Root
              key={id}
              variant={"elevated"}
              w={"270px"}
              overflow="hidden"
              rounded={"2xl"}
            >
              {isLoading ? (
                <Spinner size="xl" />
              ) : (
                <>
                  <Image src="/images/cover.jpg" alt="cover project" />
                  <Card.Body px={4}>
                    <VStack alignItems={"flex-start"}>
                      <Text fontSize={"xl"} fontWeight={"bold"}>
                        {name}
                      </Text>
                      <Text style={textStyle} color={"#666666"}>
                        {description}
                      </Text>

                      <HStack>
                        <Text fontWeight={"bold"}>Tech Stack: </Text>
                        <Text fontSize={12}>{language}</Text>
                      </HStack>
                      <HStack w={"100%"} justifyContent={"space-between"}>
                        <Box flexDirection={"row"} gapX={4}>
                          <Icon>
                            <FiLink />
                          </Icon>
                          <Link href={homepage} textDecoration={"underline"}>
                            Live Preview
                          </Link>
                        </Box>
                        <Box>
                          <Icon>
                            <FaGithub />
                          </Icon>
                          <Link href={url} textDecoration={"underline"}>
                            View Code
                          </Link>
                        </Box>
                      </HStack>
                    </VStack>
                  </Card.Body>
                </>
              )}
            </Card.Root>
          );
        })}
      </Flex>
      <Toaster />
    </VStack>
  );
};

export default Projects;
