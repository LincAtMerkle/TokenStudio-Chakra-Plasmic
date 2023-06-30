import { NumberInputProps, NumberInput as _NumberInput } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraNumberInputComponent, 'container');

export const NumberInput = (props: NumberInputProps) => {
  return <Wrapped {...props} />;
};
