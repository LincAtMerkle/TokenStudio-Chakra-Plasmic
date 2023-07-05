import { NumberDecrementStepperProps, NumberDecrementStepper as ChakraNumberDecrementStepperComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraNumberDecrementStepperComponent, 'container');

export const NumberDecrementStepper = (props: NumberDecrementStepperProps) => {
  return <Wrapped {...props} />;
};
