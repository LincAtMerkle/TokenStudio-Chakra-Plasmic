import React from "react";
import { chakra, CustomSelectProps, CustomSelect as _CustomSelect } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraCustomSelect = wrapTokens(_CustomSelect, "container");

export const CustomSelect = (props: CustomSelectProps) => {
  return (
    <ComponentProvider name="customSelect" className={props.className}>
      <ChakraCustomSelect {...props}/>
    </ComponentProvider>
  );
};
