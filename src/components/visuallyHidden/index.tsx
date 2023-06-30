import { VisuallyHiddenProps, VisuallyHidden as _VisuallyHidden } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraVisuallyHiddenComponent, 'container');

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
  return <Wrapped {...props} />;
};
