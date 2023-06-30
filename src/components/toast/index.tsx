import React from "react";
import { chakra, ToastProps, Toast as _Toast } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraToast = wrapTokens(_Toast, "container");

export const Toast = (props: ToastProps) => {
  return (
    <ComponentProvider name="toast" className={props.className}>
      <ChakraToast {...props}/>
    </ComponentProvider>
  );
};
