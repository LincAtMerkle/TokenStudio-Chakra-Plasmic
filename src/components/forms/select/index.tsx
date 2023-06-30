import React from "react";
import { chakra, SelectProps, Select as _CustomSelect } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraCustomSelect = wrapTokens(_CustomSelect, "container");

export const CustomSelect = (props: SelectProps) => {
  return (
    <ComponentProvider name="customSelect" className={props.className}>
      <ChakraSelect {...props}/>
    </ComponentProvider>
  );
};
