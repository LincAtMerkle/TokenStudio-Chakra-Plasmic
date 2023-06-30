import { KbdProps, Kbd as ChakraKbdComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraKbdComponent, 'container');

export const Kbd = (props: KbdProps) => {
  return <Wrapped {...props} />;
};
