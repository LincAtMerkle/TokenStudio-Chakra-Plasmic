import React from "react";
import { chakra, KbdProps, Kbd as _Kbd } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraKbd = wrapTokens(_Switch, "container");

export const Kbd = (props: KbdProps) => {
  return (
    <ComponentProvider name="kbd" className={props.className}>
      <ChakraKbd {...props}/>
    </ComponentProvider>
  );
};
