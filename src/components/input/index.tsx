import { InputProps, Input as ChakraInputComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraInputComponent, 'container');

export const Input = (props: InputProps) => {
  return <Wrapped {...props} />;
};
