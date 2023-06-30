import { AspectRatioProps, AspectRatio as ChakraAspectRatioComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAspectRatioComponent, 'container');

export const AspectRatio = (props: AspectRatioProps) => {
  return <Wrapped {...props} />;
};
