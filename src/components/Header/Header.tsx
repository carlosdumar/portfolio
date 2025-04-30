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
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
interface Props {
  children: React.ReactNode;
}
const Links = ["Home", "About", "Tech Stack", "Projects", "Contact"];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const Header: FC<any> = () => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={open ? onClose : onOpen}
          variant={'ghost'}
          
        >
          {open ? <IoMdClose /> : <MdOutlineMenu />}
        </IconButton>
        <HStack spaceX={20} alignItems={"center"}>
          <Box>Logo</Box>
          <HStack as={"nav"} spaceX={10} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <HStack>
          <NavLink>
            <Icon as={'a'}>
              <FaGithub />
            </Icon>
          </NavLink>
          <NavLink>
            <Icon>
              <FaXTwitter />
            </Icon>
          </NavLink>
          <NavLink>
            <Icon>
              <FaLinkedin />
            </Icon>
          </NavLink>
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
