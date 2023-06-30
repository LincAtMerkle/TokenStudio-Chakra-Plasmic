import React from "react";
import { chakra, CloseButtonProps, CloseButton as _CloseButton } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraCloseButton = wrapTokens(_CloseButton, "container");

export const CloseButton = (props: CloseButtonProps) => {
  return (
    <ComponentProvider name="closeButton" className={props.className}>
      <ChakraCloseButton {...props}/>
    </ComponentProvider>
  );
};
