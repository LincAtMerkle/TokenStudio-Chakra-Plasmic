import React from "react";
import { chakra, FormControlProps, FormControl as _FormControl } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraFormControl = wrapTokens(_FormControl, "container");

export const FormControl = (props: FormControlProps) => {
  return (
    <ComponentProvider name="formControl" className={props.className}>
      <ChakraFormControl {...props}/>
    </ComponentProvider>
  );
};
