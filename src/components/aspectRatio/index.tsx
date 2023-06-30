import { AspectRatioProps, AspectRatio as _AspectRatio } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAspectRatioComponent, 'container');

export const AspectRatio = (props: AspectRatioProps) => {
  return <Wrapped {...props} />;
};
