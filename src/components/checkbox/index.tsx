import React from "react";
import { chakra, CheckboxProps, Checkbox as _Checkbox } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraCheckbox = wrapTokens(_Checkbox, "container");

export const Checkbox = (props: CheckboxProps) => {
  return (
    <ComponentProvider name="checkbox" className={props.className}>
      <ChakraCheckbox {...props}/>
    </ComponentProvider>
  );
};
