import { IconButtonProps, IconButton as ChakraIconButtonComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraIconButtonComponent, 'container');

export const IconButton = (props: IconButtonProps) => {
  return <Wrapped {...props} />;
};
