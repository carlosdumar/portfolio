"use client";

import { Link } from "@chakra-ui/react/link";
import useScroll from "../../hooks/useScroll";
import { getElementName } from "../../lib/utils";

interface Props {
  children: React.ReactNode;
  url?: string;
}

const NavLink = (props: Props) => {
  const { children, url = "" } = props;
  const { scrollToSection } = useScroll();

  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={url || undefined}
      target={url ? "_blank" : "_self"}
      onClick={() => scrollToSection(getElementName(children))}
    >
      {children}
    </Link>
  );
};

export default NavLink;
