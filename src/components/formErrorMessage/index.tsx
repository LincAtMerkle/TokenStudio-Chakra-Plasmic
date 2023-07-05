import { FormErrorMessageProps, FormErrorMessage as ChakraFormErrorMessageComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraFormErrorMessageComponent, 'container');

export const FormErrorMessage = (props: FormErrorMessageProps) => {
  return <Wrapped {...props} />;
};
