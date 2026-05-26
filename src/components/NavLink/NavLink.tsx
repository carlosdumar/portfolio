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
  borderBottom?: string;
  borderColor?: string;
  transition?: string;
}

const NavLink = (props: Props) => {
  const {
    children,
    url = "",
    icon,
    iconPosition = "left",
    ...rest
  } = props;
  const { scrollToSection } = useScroll();

  return (
    <Link
      px={2}
      py={1}     
      _hover={{
        textDecoration: "none",
      }}
      href={url || undefined}
      target={url ? "_blank" : "_self"}
      onClick={() => scrollToSection(getElementName(children))}
      {...rest}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
};

export default NavLink;
