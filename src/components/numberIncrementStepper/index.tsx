import { NumberIncrementStepperProps, NumberIncrementStepper as ChakraNumberIncrementStepperComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraNumberIncrementStepperComponent, 'container');

export const NumberIncrementStepper = (props: NumberIncrementStepperProps) => {
  return <Wrapped {...props} />;
};
