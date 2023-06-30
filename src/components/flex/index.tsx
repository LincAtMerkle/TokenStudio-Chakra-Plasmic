import { FlexProps, Flex as ChakraFlexComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraFlexComponent, 'container');

export const Flex = (props: FlexProps) => {
  return <Wrapped {...props} />;
};
