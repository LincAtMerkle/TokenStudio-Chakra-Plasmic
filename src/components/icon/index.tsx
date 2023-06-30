import { IconProps, Icon as ChakraIconComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraIconComponent, 'container');

export const Icon = (props: IconProps) => {
  return <Wrapped {...props} />;
};
