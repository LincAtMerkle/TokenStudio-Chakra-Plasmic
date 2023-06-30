import React from "react";
import { chakra, StatProps, Stat as _Stat } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraStat = wrapTokens(_Stat, "container");

export const Stat = (props: StatProps) => {
  return (
    <ComponentProvider name="stat" className={props.className}>
      <ChakraStat {...props}/>
    </ComponentProvider>
  );
};
