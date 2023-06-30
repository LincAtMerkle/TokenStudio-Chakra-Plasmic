import React from "react";
import { chakra, IconButtonProps, IconButton as _IconButton } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraIconButton = wrapTokens(_IconButton, "container");

export const IconButton = (props: IconButtonProps) => {
  return (
    <ComponentProvider name="iconButton" className={props.className}>
      <ChakraIconButton {...props}/>
    </ComponentProvider>
  );
};
