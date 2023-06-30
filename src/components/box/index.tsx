import React from "react";
import { chakra, BoxProps, Box as _Box } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraBox = wrapTokens(_Box, "container");

export const Box = (props: BoxProps) => {
  return (
    <ComponentProvider name="box" className={props.className}>
      <ChakraBox {...props}/>
    </ComponentProvider>
  );
};
