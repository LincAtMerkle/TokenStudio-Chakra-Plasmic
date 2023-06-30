import React from "react";
import { chakra, SpinnerProps, Spinner as _Spinner } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraSpinner = wrapTokens(_Spinner, "container");

export const Spinner = (props: SpinnerProps) => {
  return (
    <ComponentProvider name="spinner" className={props.className}>
      <ChakraSpinner {...props}/>
    </ComponentProvider>
  );
};
