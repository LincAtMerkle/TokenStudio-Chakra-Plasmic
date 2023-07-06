import { VStackProps, VStack as ChakraVStackComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraVStackComponent, 'container');

export const VStack = (props: VStackProps) => {
  return <Wrapped {...props} />;
};
