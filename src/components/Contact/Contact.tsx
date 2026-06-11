"use client";

import {
  Box,
  Button,
  Card,
  Field,
  Flex,
  Input,
  HStack,
  Stack,
  Textarea,
  Icon,
  Text,
  Heading,
  VStack,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { Tag } from "@chakra-ui/react";
import { MdAccessTime } from "react-icons/md";
import { useContactForm } from "../../hooks/useContactForm";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState, mutation, cooldown } =
    useContactForm();

  const { errors } = formState;

  const onSubmit = (data: ContactForm) => {
    mutation.mutate(data);
  };

  const isLoading = mutation.isPending;
  const isBlocked = isLoading || cooldown;

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={10}>
      <GridItem colSpan={2} textAlign={"center"}>
        <Heading size="4xl" color={"#42446E"} fontWeight={"bold"}>
          Contact
        </Heading>
      </GridItem>
      <GridItem colSpan={2}>
        <Flex
          id="contact"
          flexDirection={{ base: "column", md: "row" }}
          textAlign={"center"}
          py={"10"}
          px={{ lg: 40, md: 40, base: 4 }}
          gap={20}
        >
          <Stack gap={10}>
            <VStack textAlign={"left"}>
              <Heading textStyle={"3xl"} fontWeight="normal">
                Let's build something together
              </Heading>
              <Text color="#666666">
                Have a project in mind? I'd love to hear about it. Send me a
                message and I'll get back to you as soon as possible.
              </Text>
            </VStack>
            <VStack align={"flex-start"} gap={10}>
              <HStack>
                <Box bgColor="#f0ecff" p="10px" rounded="5px">
                  <IoMdMail color="#8b52ff" />
                </Box>
                <Link
                  href="mailto:carlosdumar4@gmail.com"
                  color="#555555"
                  _hover={{ color: "purple.500" }}
                >
                  carlosdumar4@gmail.com
                </Link>
              </HStack>
              <HStack>
                <Box bgColor="#f0ecff" p="10px" rounded="5px">
                  <FaGithub color="#8b52ff" />
                </Box>
                <Link
                  color="#555555"
                  href="https://github.com/adminDreamBike"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ color: "purple.500" }}
                >
                  github.com/carlosdumar4
                </Link>
              </HStack>
              <HStack>
                <Box bgColor="#f0ecff" p="10px" rounded="5px">
                  <FaLinkedin color="#8b52ff" />
                </Box>
                <Link
                  color="#555555"
                  href="https://www.linkedin.com/in/carlosdumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ color: "purple.500" }}
                >
                  linkedin.com/in/carlos
                </Link>
              </HStack>
              <Tag.Root rounded="full">
                <Tag.StartElement>
                  <MdAccessTime />
                </Tag.StartElement>
                <Tag.Label>Usually replies within 24h</Tag.Label>
              </Tag.Root>
            </VStack>
          </Stack>
          <Card.Root width="100%">
            <Card.Body>
              <Box
                as="form"
                onSubmit={handleSubmit(onSubmit)}
                w="full"
                display="grid"
                gap={10}
              >
                <Stack gap="8" css={{ "--field-label-width": "96px" }}>
                  <HStack>
                    <Field.Root invalid={!!errors.firstName}>
                      <Field.Label color="#888888" fontWeight="bold">
                        First Name
                      </Field.Label>
                      <Input
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                        placeholder="Your first name"
                        disabled={isBlocked}
                        _disabled={{
                          opacity: 0.6,
                          cursor: "not-allowed",
                          bg: "gray.100",
                          borderColor: "gray.200",
                          color: "gray.400",
                        }}
                      />
                      <Field.ErrorText>
                        {errors.firstName?.message}
                      </Field.ErrorText>
                    </Field.Root>
                    <Field.Root invalid={!!errors.lastName}>
                      <Field.Label color="#888888" fontWeight="bold">
                        Last Name
                      </Field.Label>
                      <Input
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                        placeholder="Your last name"
                        disabled={isBlocked}
                        _disabled={{
                          opacity: 0.6,
                          cursor: "not-allowed",
                          bg: "gray.100",
                          borderColor: "gray.200",
                          color: "gray.400",
                        }}
                      />
                      <Field.ErrorText>
                        {errors.lastName?.message}
                      </Field.ErrorText>
                    </Field.Root>
                  </HStack>
                  <Field.Root invalid={!!errors.email}>
                    <Field.Label color="#888888" fontWeight="bold">
                      Email
                    </Field.Label>
                    <Input
                      {...register("email", { required: "Email is required" })}
                      placeholder="you@email.com"
                      disabled={isBlocked}
                      _disabled={{
                        opacity: 0.6,
                        cursor: "not-allowed",
                        bg: "gray.100",
                        borderColor: "gray.200",
                        color: "gray.400",
                      }}
                    />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                  </Field.Root>
                  <Field.Root invalid={!!errors.subject}>
                    <Field.Label color="#888888" fontWeight="bold">
                      Subject
                    </Field.Label>
                    <Input
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      placeholder="Project inquiry"
                      disabled={isBlocked}
                      _disabled={{
                        opacity: 0.6,
                        cursor: "not-allowed",
                        bg: "gray.100",
                        borderColor: "gray.200",
                        color: "gray.400",
                      }}
                    />
                    <Field.ErrorText>{errors.subject?.message}</Field.ErrorText>
                  </Field.Root>
                  <Field.Root invalid={!!errors.message}>
                    <Field.Label color="#888888" fontWeight="bold">
                      Message
                    </Field.Label>
                    <Textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      placeholder="Hey Carlos, I'd love to collaborate on..."
                      maxH="200h"
                      disabled={isBlocked}
                      _disabled={{
                        opacity: 0.6,
                        cursor: "not-allowed",
                        bg: "gray.100",
                        borderColor: "gray.200",
                        color: "gray.400",
                      }}
                    />
                    <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                  </Field.Root>
                </Stack>
                <Button
                  type="submit"
                  w="full"
                  size="md"
                  borderRadius="lg"
                  loading={isLoading}
                  loadingText="Sending…"
                  gap={2}
                  bgGradient="to-r"
                  gradientFrom="#e040fb"
                  gradientVia="#7c4dff"
                  gradientTo="#2196f3"
                  color="white"
                  border="none"
                  _hover={{ opacity: 0.88, bgGradient: "to-r" }}
                  _active={{ transform: "scale(0.98)" }}
                  _loading={{ opacity: 0.7 }}
                  fontWeight="bold"
                  _disabled={{
                    opacity: 0.75,
                    cursor: "not-allowed",
                    bgGradient: "to-r",
                    gradientFrom: "purple.300",
                    gradientVia: "violet.300",
                    gradientTo: "blue.300",
                    transform: "none",
                  }}
                >
                  {cooldown ? "Wait 60s before sending again" : "Send message"}
                  {
                    <Icon>
                      <LuSend />
                    </Icon>
                  }
                </Button>
              </Box>
            </Card.Body>
          </Card.Root>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Contact;
