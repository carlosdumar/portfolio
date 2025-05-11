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
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Links } from "../../lib/utils";
interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href="#"
    >
      {children}
    </Link>
  );
};

const Header: FC<any> = () => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Box px={40}>
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
        <Box>Logo</Box>

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
            <NavLink>
              <Icon as={"a"} color={"#666666"}>
                <FaGithub />
              </Icon>
            </NavLink>
            <NavLink>
              <Icon as={"a"} color={"#666666"}>
                <FaXTwitter />
              </Icon>
            </NavLink>
            <NavLink>
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
