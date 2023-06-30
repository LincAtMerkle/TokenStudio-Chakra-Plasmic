import React from "react";
import { chakra, IconProps, Icon as _Icon } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraIcon = wrapTokens(_Icon, "container");

export const Icon = (props: IconProps) => {
  return (
    <ComponentProvider name="icon" className={props.className}>
      <ChakraIcon {...props}/>
    </ComponentProvider>
  );
};
