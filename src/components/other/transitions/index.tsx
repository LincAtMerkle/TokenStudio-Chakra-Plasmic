import React from "react";
import { chakra, TransitionsProps, Transitions as _Transitions } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraTransitions = wrapTokens(_Transitions, "container");

export const Transitions = (props: TransitionsProps) => {
  return (
    <ComponentProvider name="transitions" className={props.className}>
      <ChakraTransitions {...props}/>
    </ComponentProvider>
  );
};
