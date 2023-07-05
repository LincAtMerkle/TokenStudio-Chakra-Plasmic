import { ModalCloseButtonProps, ModalCloseButton as ChakraModalCloseButtonComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraModalCloseButtonComponent, 'container');

export const ModalCloseButton = (props: ModalCloseButtonProps) => {
  return <Wrapped {...props} />;
};
