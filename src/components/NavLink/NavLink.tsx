"use client";

import { Link } from "@chakra-ui/react/link";
import useScroll from "../../hooks/useScroll";
import { getElementName } from "../../lib/utils";

interface Props {
  children?: React.ReactNode;
  url?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  'aria-label': string;
}

const NavLink = (props: Props) => {
  const {
    children,
    url = "",
    icon,
    iconPosition = "left",
    'aria-label': ariaLabel,
  } = props;
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
      aria-label={ariaLabel}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
};

export default NavLink;
