import React from "react";
import { chakra, NumberInputProps, NumberInput as _NumberInput } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraNumberInput = wrapTokens(_NumberInput, "container");

export const NumberInput = (props: NumberInputProps) => {
  return (
    <ComponentProvider name="numberInput" className={props.className}>
      <ChakraNumberInput {...props}/>
    </ComponentProvider>
  );
};
