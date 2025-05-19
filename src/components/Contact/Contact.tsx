import { Flex, Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex
      id="contact"
      flexDirection={"column"}
      textAlign={"center"}
      py={"10"}
      px={{ lg: 40, md: 40, base: 4 }}
    >
      <Heading size="4xl" color={"#1E0E62"} fontWeight={"bold"} wordBreak={"break-word"}>
        For any questions please mail us:
      </Heading>
      <Heading
        color={"transparent"}
        backgroundClip={"text"}       
        style={{ backgroundImage: "linear-gradient(#E70FAA, #13B0F5)" }}
        fontWeight={"bold"}
        size="4xl"
        wordBreak={"break-word"}
      >
        carlosdumar4@gmail.com
      </Heading>
    </Flex>
  );
};

export default Contact;
