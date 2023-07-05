import { NumberInputFieldProps, NumberInputField as ChakraNumberInputFieldComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraNumberInputFieldComponent, 'container');

export const NumberInputField = (props: NumberInputFieldProps) => {
  return <Wrapped {...props} />;
};
