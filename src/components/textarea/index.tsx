import React from "react";
import { chakra, TextareaProps, Textarea as _Textarea } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraTextarea = wrapTokens(_Textarea, "container");

export const Textarea = (props: TextareaProps) => {
  return (
    <ComponentProvider name="Textarea" className={props.className}>
      <ChakraTextarea {...props}/>
    </ComponentProvider>
  );
};
