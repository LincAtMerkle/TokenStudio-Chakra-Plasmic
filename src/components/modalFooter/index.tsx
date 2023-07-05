import { ModalFooterProps, ModalFooter as ChakraModalFooterComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraModalFooterComponent, 'container');

export const ModalFooter = (props: ModalFooterProps) => {
  return <Wrapped {...props} />;
};
