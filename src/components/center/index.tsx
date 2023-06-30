import React from "react";
import { chakra, CenterProps, Center as _Center } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraCenter = wrapTokens(_Center, "container");

export const Center = (props: CenterProps) => {
  return (
    <ComponentProvider name="center" className={props.className}>
      <ChakraCenter {...props}/>
    </ComponentProvider>
  );
};
