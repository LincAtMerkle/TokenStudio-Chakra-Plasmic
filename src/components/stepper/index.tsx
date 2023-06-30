import { StepperProps, Stepper as _Stepper } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraStepperComponent, 'container');

export const Stepper = (props: StepperProps) => {
  return <Wrapped {...props} />;
};
