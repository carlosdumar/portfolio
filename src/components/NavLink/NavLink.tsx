import { Link } from "@chakra-ui/react/link";

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;
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
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
