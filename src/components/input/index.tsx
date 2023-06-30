import React from "react";
import { chakra, InputProps, Input as _Input } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraInput = wrapTokens(_Input, "container");

export const Input = (props: InputProps) => {
  return (
    <ComponentProvider name="input" className={props.className}>
      <ChakraInput {...props}/>
    </ComponentProvider>
  );
};
