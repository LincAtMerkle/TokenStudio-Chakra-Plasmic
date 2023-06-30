import React from "react";
import { chakra, VisuallyHiddenProps, VisuallyHidden as _VisuallyHidden } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraVisuallyHidden = wrapTokens(_VisuallyHidden, "container");

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
  return (
    <ComponentProvider name="visuallyHidden" className={props.className}>
      <ChakraVisuallyHidden {...props}/>
    </ComponentProvider>
  );
};
