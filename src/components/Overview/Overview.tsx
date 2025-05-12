import { Box, Text, Image, defineStyle, HStack } from "@chakra-ui/react";

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
      px={{ lg: 80, base: 4 }}
    >
      <HStack justifyContent={"space-between"} width={"100%"}>
        <Text fontWeight={"bold"} color={"#42446E"} fontSize={30}>
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
        <Image
          src="/images/carlos.jpeg"
          boxSize="220px"
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
