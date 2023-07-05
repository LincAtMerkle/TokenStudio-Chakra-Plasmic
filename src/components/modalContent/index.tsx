import { ModalContentProps, ModalContent as ChakraModalContentComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraModalContentComponent, 'container');

export const ModalContent = (props: ModalContentProps) => {
  return <Wrapped {...props} />;
};
