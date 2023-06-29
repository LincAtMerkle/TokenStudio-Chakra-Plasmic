import React from "react";
import { chakra, TableProps, Table as _Table } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraTable = wrapTokens(_Table, "container");

export const Table = (props: TableProps) => {
  return (
    <ComponentProvider name="Table" className={props.className}>
      <ChakraTable {...props}/>
    </ComponentProvider>
  );
};
