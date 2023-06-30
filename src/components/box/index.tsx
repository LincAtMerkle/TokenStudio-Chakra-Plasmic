import { BoxProps, Box as _Box } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraBoxComponent, 'container');

export const Box = (props: BoxProps) => {
  return <Wrapped {...props} />;
};
