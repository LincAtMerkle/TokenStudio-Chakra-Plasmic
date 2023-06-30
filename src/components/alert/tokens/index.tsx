import React from "react";
import { chakra, AlertProps, Alert as _Alert } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraAlert = wrapTokens(_Alert, "container");

export const Alert = (props: AlertProps) => {
  return (
    <ComponentProvider name="alert" className={props.className}>
      <ChakraAlert {...props}/>
    </ComponentProvider>
  );
};
