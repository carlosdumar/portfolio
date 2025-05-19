import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Link,
  Separator,
  Image,
} from "@chakra-ui/react";
import { Links } from "../../lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NavLink from "../NavLink/NavLink";

const Footer = () => {
  return (
    <VStack px={{ lg: 40, md: 40, base: 4 }}>
      <HStack w={"100%"} py={2}>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Box>
            <Image             
              src={"/images/logo.png"}
              width={"120px"}
              alt="image log"
            />
          </Box>
          <HStack w={"60%"} justifyContent={"space-between"}>
            <Text fontSize={"sm"}>+573015363012</Text>
            <Link href="mailto:example@email.com" fontSize={"sm"}>
              carlosdumar@gmail.com
            </Link>
            <HStack spaceX={2}>
              <NavLink>
                <Icon as={"a"} color={"#42446E"} fontSize={"16px"}>
                  <FaGithub />
                </Icon>
              </NavLink>
              <NavLink>
                <Icon as={"a"} color={"#42446E"} fontSize={"16px"}>
                  <FaXTwitter />
                </Icon>
              </NavLink>
              <NavLink>
                <Icon as={"a"} color={"#42446E"} fontSize={"18px"}>
                  <FaLinkedin />
                </Icon>
              </NavLink>
            </HStack>
          </HStack>
        </HStack>
      </HStack>
      <Separator size="md" w={"100%"} />
      <HStack spaceX={15} alignItems={"center"} w={"100%"} py={2}>
        <HStack as={"nav"} spaceX={10} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Footer;
