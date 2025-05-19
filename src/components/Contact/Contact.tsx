import { Flex, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex
      id="contact"
      flexDirection={"column"}
      textAlign={"center"}
      py={"10"}
      px={{ lg: 40, md: 40, base: 4 }}
    >
      <Text fontSize={"4xl"} color={"#1E0E62"} fontWeight={"bold"}>
        For any questions please mail us:
      </Text>
      <Text
        color={"transparent"}
        backgroundClip={"text"}
        as={"span"}
        style={{ backgroundImage: "linear-gradient(#E70FAA, #13B0F5)" }}
        fontWeight={"bold"}
        fontSize={"4xl"}
      >
        carlosdumar4@gmail.com
      </Text>
    </Flex>
  );
};

export default Contact;
