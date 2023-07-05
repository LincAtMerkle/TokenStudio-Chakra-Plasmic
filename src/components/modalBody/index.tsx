import { ModalBodyProps, ModalBody as ChakraModalBodyComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraModalBodyComponent, 'container');

export const ModalBody = (props: ModalBodyProps) => {
  return <Wrapped {...props} />;
};
