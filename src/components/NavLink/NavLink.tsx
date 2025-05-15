import { Link } from "@chakra-ui/react/link";

interface Props {
  children: React.ReactNode;
  url?: string;
}

const NavLink = (props: Props) => {
  const { children, url = '' } = props;
  const href =
    typeof children === "string"
      ? `/#${children.toLowerCase().replace(/ +/g, "")}`
      : "#";

  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={url || href}
      target={url ? "_blank" : '_self'}
    >
      {children}
    </Link>
  );
};

export default NavLink;
