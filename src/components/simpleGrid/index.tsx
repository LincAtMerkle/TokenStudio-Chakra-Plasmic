import React from "react";
import { chakra, SimpleGridProps, SimpleGrid as _SimpleGrid } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraSimpleGrid = wrapTokens(_SimpleGrid, "container");

export const SimpleGrid = (props: SimpleGridProps) => {
  return (
    <ComponentProvider name="simpleGrid" className={props.className}>
      <ChakraSimpleGrid {...props}/>
    </ComponentProvider>
  );
};
