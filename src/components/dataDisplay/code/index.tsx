import React from "react";
import { chakra, CodeProps, Code as _Code } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraCode = wrapTokens(_Code, "container");

export const Code = (props: CodeProps) => {
  return (
    <ComponentProvider name="code" className={props.className}>
      <ChakraCode {...props}/>
    </ComponentProvider>
  );
};
