import { SkipNavProps, SkipNav as _SkipNav } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSkipNavComponent, 'container');

export const SkipNav = (props: SkipNavProps) => {
  return <Wrapped {...props} />;
};
