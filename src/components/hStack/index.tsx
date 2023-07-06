import { HStackProps, HStack as ChakraHStackComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraHStackComponent, 'container');

export const HStack = (props: HStackProps) => {
  return <Wrapped {...props} />;
};
