import { AspectRatio, Box, Image } from "@chakra-ui/react";

const PictureImage = (props: any) => {
  const { src, alt, ...rest } = props;
  return (
    <Box as="picture" {...rest}>
      <source type="image/webp" srcSet={src} />
      <source type="image/jpg" srcSet="/images/cover.jpg" />
      <AspectRatio ratio={4 / 3}>
        <Image
          src={src}
          alt={alt}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </AspectRatio>
    </Box>
  );
};

export default PictureImage;
