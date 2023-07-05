import { ModalOverlayProps, ModalOverlay as ChakraModalOverlayComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraModalOverlayComponent, 'container');

export const ModalOverlay = (props: ModalOverlayProps) => {
  return <Wrapped {...props} />;
};
