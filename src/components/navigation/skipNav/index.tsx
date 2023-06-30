import React from "react";
import { chakra, SkipNavProps, SkipNav as _SkipNav } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraSkipNav = wrapTokens(_SkipNav, "container");

export const SkipNav = (props: SkipNavProps) => {
  return (
    <ComponentProvider name="skipNav" className={props.className}>
      <ChakraSkipNav {...props}/>
    </ComponentProvider>
  );
};
