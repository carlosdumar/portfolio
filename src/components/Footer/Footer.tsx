"use client";

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
import { useMediaQuery } from "@chakra-ui/react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);
  return (
    <VStack px={{ lg: 40, md: 40, base: 4 }}>
      <HStack w={"100%"} py={2}>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Box>
            <Image src={"/images/logo.png"} width={"120px"} alt="image log" />
          </Box>
          <HStack justifyContent={"space-between"}>
            {isMobile ? (
              <Icon as={MdOutlinePhoneAndroid} fontSize={"24px"} />
            ) : (
              <Text fontSize={"sm"} wordBreak={"break-word"}>
                +573015363012
              </Text>
            )}
            <HStack>
              <Icon as={IoMdMail} fontSize={"24px"} />
              {!isMobile && (
                <Link
                  href="mailto:example@email.com"
                  fontSize={"sm"}
                  wordBreak={"break-word"}
                >
                  carlosdumar@gmail.com
                </Link>
              )}
            </HStack>
            <HStack spaceX={2}>
              <NavLink
                url="https://github.com/adminDreamBike/"
                icon={<FaGithub color="#42446E" />}
              />
              <NavLink
                url="https://x.com/ingitrodriguez"
                icon={<FaXTwitter color={"#42446E"} />}
              />
              <NavLink
                url="https://www.linkedin.com/in/carlosdumar/"
                icon={<FaLinkedin color={"#42446E"} />}
              />
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
