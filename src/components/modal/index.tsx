import { ModalProps, Modal as ChakraModalComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraModalComponent, 'container');

export const Modal = (props: ModalProps) => {
  return <Wrapped {...props} />;
};
