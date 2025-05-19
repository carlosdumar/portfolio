import { Icon, Switch } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const SwitchTheme = () => {
  const { toggleTheme } = useTheme();
  return (
    <Switch.Root colorPalette={"blue"} size="lg" onCheckedChange={toggleTheme}>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaSun} color="yellow.400" />}>
          <Icon as={FaMoon} color={"gray.400"} />
        </Switch.Indicator>
      </Switch.Control>
      <Switch.Label>Theme</Switch.Label>
    </Switch.Root>
  );
};

export default SwitchTheme;
