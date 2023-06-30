import React from "react";
import { chakra, FlexProps, Flex as _Flex } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraFlex = wrapTokens(_Flex, "container");

export const Flex = (props: FlexProps) => {
  return (
    <ComponentProvider name="flex" className={props.className}>
      <ChakraFlex {...props}/>
    </ComponentProvider>
  );
};
