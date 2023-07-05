import { NumberInputStepperProps, NumberInputStepper as ChakraNumberInputStepperComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraNumberInputStepperComponent, 'container');

export const NumberInputStepper = (props: NumberInputStepperProps) => {
  return <Wrapped {...props} />;
};
