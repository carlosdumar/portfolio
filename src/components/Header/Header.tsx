"use client";

import { FC } from "react";
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Links } from "../../lib/utils";
import NavLink from "../NavLink/NavLink";

const Header: FC<any> = () => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Box
      px={{ lg: 80 }}
      py={3}
      position={"fixed"}
      width={"100%"}
      top={"0"}
      background={"white"}
      zIndex={2}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={open ? onClose : onOpen}
          variant={"ghost"}
        >
          {open ? <IoMdClose /> : <MdOutlineMenu />}
        </IconButton>
        <Box>
          <Image
            backgroundClip={"text"}
            style={{ backgroundImage: "linear-gradient(#E70FAA, #13B0F5)" }}
            src={"/images/logo.png"}
            width={"120px"}
            alt="image logo header"
          />
        </Box>

        <HStack spaceX={10}>
          <HStack spaceX={15} alignItems={"center"}>
            <HStack
              as={"nav"}
              spaceX={10}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <HStack spaceX={2}>
            <NavLink url="https://github.com/adminDreamBike/">
              <Icon as={"a"} color={"#666666"}>
                <FaGithub />
              </Icon>
            </NavLink>
            <NavLink url="https://x.com/ingitrodriguez">
              <Icon as={"a"} color={"#666666"}>
                <FaXTwitter />
              </Icon>
            </NavLink>
            <NavLink url="https://www.linkedin.com/in/carlosdumar/">
              <Icon as={"a"} color={"#666666"}>
                <FaLinkedin />
              </Icon>
            </NavLink>
          </HStack>
        </HStack>
      </Flex>
      {open ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spaceX={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
