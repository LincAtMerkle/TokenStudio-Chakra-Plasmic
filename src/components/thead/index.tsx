import { TheadProps, Thead as ChakraTheadComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTheadComponent, 'container');

export const Thead = (props: TheadProps) => {
  return <Wrapped {...props} />;
};
