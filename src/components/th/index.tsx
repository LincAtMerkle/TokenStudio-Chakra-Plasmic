import { ThProps, Th as ChakraThComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraThComponent, 'container');

export const Th = (props: ThProps) => {
  return <Wrapped {...props} />;
};
