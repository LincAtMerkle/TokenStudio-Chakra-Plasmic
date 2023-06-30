import React from "react";
import { chakra, GridProps, Grid as _Grid } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraGrid = wrapTokens(_Grid, "container");

export const Grid = (props: GridProps) => {
  return (
    <ComponentProvider name="grid" className={props.className}>
      <ChakraGrid {...props}/>
    </ComponentProvider>
  );
};
