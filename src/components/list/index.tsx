import React from "react";
import { chakra, ListProps, List as _List } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraList = wrapTokens(_List, "container");

export const List = (props: ListProps) => {
  return (
    <ComponentProvider name="list" className={props.className}>
      <ChakraList {...props}/>
    </ComponentProvider>
  );
};
