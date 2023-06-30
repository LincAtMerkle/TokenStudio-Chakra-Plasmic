import { SkipNavProps, SkipNav as ChakraSkipNavComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSkipNavComponent, 'container');

export const SkipNav = (props: SkipNavProps) => {
  return <Wrapped {...props} />;
};
