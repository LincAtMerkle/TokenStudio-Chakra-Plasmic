import { WrapProps, Wrap as _Wrap } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraWrapComponent, 'container');

export const Wrap = (props: WrapProps) => {
  return <Wrapped {...props} />;
};
