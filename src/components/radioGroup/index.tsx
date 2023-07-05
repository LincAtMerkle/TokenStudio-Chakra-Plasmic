import { RadioGroupProps, RadioGroup as ChakraRadioGroupComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraRadioGroupComponent, 'container');

export const RadioGroup = (props: RadioGroupProps) => {
  return <Wrapped {...props} />;
};
