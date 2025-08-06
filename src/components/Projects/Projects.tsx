"use client";

import { FC } from "react";
import useGitHubUser from "../../hooks/useGitHubUser";
import {
  VStack,
  Text,
  Flex,
  Card,
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
import PictureImage from "../PictureImage/PictureImage";

const textStyle = {
  overflow: "hidden",
  WebkitLineClamp: 4,
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical" as const,
  display: "-webkit-box",
};

const objCovers = {
  "restaurant-ui": "restaurant.webp",
  "weather-app": "weather.webp",
  "youtube-homepage": "youtube.webp",
};

interface ProjectsProps {
  initialData: any;
}

const Projects: FC<ProjectsProps> = ({ initialData }: ProjectsProps) => {
  const { user = [], isLoading, isError, error } = useGitHubUser(initialData);

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
    <VStack id="projects" px={{ lg: 40, md: 40, base: 4 }} gapY={10}>
      <Box textAlign={"center"}>
        <Text fontSize={32} color={"#42446E"} fontWeight={"bold"}>
          Projects
        </Text>
        <Text color={"#666666"}>Things Ive built so far</Text>
      </Box>

      <Flex
        flexWrap={"wrap"}
        gapY={5}
        gapX={10}
        justifyContent={{ md: "space-between", base: "center" }}
      >
        {filteredProjects?.map((project: any) => {
          const { description, id, language, name, html_url, homepage } =
            project;
          return (
            <Card.Root
              key={id}
              variant={"elevated"}
              w={"270px"}
              overflow="hidden"
              rounded={"2xl"}
            >
              {isLoading ? (
                <Card.Body px={4} alignItems={"center"}>
                  <Spinner size="xl" />
                </Card.Body>
              ) : (
                <>
                  <PictureImage
                    height={"200px"}
                    alt="cover project"
                    src={`/images/${
                      objCovers[name as keyof typeof objCovers] || "cover.webp"
                    }`}
                    width={"100%"}
                  />
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
                          <Link
                            href={homepage || null}
                            textDecoration={"underline"}
                            target="_blank"
                          >
                            Live Preview
                          </Link>
                        </Box>
                        <HStack gapX={1}>
                          <Icon>
                            <FaGithub />
                          </Icon>
                          <Link
                            href={html_url}
                            textDecoration={"underline"}
                            target="_blank"
                          >
                            View Code
                          </Link>
                        </HStack>
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
