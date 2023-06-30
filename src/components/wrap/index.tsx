import React from "react";
import { chakra, WrapProps, Wrap as _Wrap } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraWrap = wrapTokens(_Wrap, "container");

export const Wrap = (props: WrapProps) => {
  return (
    <ComponentProvider name="wrap" className={props.className}>
      <ChakraWrap {...props}/>
    </ComponentProvider>
  );
};
