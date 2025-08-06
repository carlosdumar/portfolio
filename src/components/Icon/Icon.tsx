import { Image } from "@chakra-ui/react";
import { FC } from "react";

interface IIcon {
  name: string;
  alt: string;
  width: number;
  height: number;
}
const Icon: FC<IIcon> = ({ name, alt, width, height }) => {
  return (
    <Image src={`/icons/${name}.svg`} alt={alt} width={width} height={height} />
  );
};

export default Icon;
