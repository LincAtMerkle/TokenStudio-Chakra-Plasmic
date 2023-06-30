import { CloseButtonProps, CloseButton as _CloseButton } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCloseButtonComponent, 'container');

export const CloseButton = (props: CloseButtonProps) => {
  return <Wrapped {...props} />;
};
