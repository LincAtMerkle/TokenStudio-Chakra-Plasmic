import React from "react";
import { chakra, DividerProps, Divider as _Divider } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraDivider = wrapTokens(_Divider, "container");

export const Divider = (props: DividerProps) => {
  return (
    <ComponentProvider name="divider" className={props.className}>
      <ChakraDivider {...props}/>
    </ComponentProvider>
  );
};
