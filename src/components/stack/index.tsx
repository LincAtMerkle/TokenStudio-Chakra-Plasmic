import React from "react";
import { chakra, StackProps, Stack as _Stack } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraStack = wrapTokens(_Stack, "container");

export const Stack = (props: StackProps) => {
  return (
    <ComponentProvider name="stack" className={props.className}>
      <ChakraStack {...props}/>
    </ComponentProvider>
  );
};
