import React from "react";
import { chakra, HighlightProps, Highlight as _Highlight } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraHighlight = wrapTokens(_Highlight, "container");

export const Highlight = (props: HighlightProps) => {
  return (
    <ComponentProvider name="highlight" className={props.className}>
      <ChakraHighlight {...props}/>
    </ComponentProvider>
  );
};
