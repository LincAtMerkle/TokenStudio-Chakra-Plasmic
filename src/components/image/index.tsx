import { ImageProps, Image as _Image } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraImageComponent, 'container');

export const Image = (props: ImageProps) => {
  return <Wrapped {...props} />;
};
