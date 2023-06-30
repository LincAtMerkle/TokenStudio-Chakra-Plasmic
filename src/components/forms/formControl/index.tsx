import React from "react";
import { chakra, FormLabelProps, FormLabel as _FormLabel } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraFormLabel = wrapTokens(_FormLabel, "container");

export const FormLabel = (props: FormLabelProps) => {
  return (
    <ComponentProvider name="formLabel" className={props.className}>
      <ChakraFormLabel {...props}/>
    </ComponentProvider>
  );
};
