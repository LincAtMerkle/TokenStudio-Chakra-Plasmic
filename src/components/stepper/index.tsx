import React from "react";
import { chakra, StepperProps, Stepper as _Stepper } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraStepper = wrapTokens(_Stepper, "container");

export const Stepper = (props: StepperProps) => {
  return (
    <ComponentProvider name="stepper" className={props.className}>
      <ChakraStepper {...props}/>
    </ComponentProvider>
  );
};
