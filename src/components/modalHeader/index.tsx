import { ModalHeaderProps, ModalHeader as ChakraModalHeaderComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraModalHeaderComponent, 'container');

export const ModalHeader = (props: ModalHeaderProps) => {
  return <Wrapped {...props} />;
};
