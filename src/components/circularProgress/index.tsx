import React from "react";
import { chakra, CircularProgressProps, CircularProgress as _CircularProgress } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraCircularProgress = wrapTokens(_CircularProgress, "container");

export const CircularProgress = (props: CircularProgressProps) => {
  return (
    <ComponentProvider name="circularProgress" className={props.className}>
      <ChakraCircularProgress {...props}/>
    </ComponentProvider>
  );
};
