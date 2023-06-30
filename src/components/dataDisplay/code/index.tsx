import React from "react";
import { chakra, SwitchProps, Switch as _Switch } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraSwitch = wrapTokens(_Switch, "container");

export const Switch = (props: SwitchProps) => {
  return (
    <ComponentProvider name="switch" className={props.className}>
      <ChakraSwitch {...props}/>
    </ComponentProvider>
  );
};
