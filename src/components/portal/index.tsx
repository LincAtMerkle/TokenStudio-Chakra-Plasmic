import React from "react";
import { chakra, PortalProps, Portal as _Portal } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraPortal = wrapTokens(_Portal, "container");

export const Portal = (props: PortalProps) => {
  return (
    <ComponentProvider name="portal" className={props.className}>
      <ChakraPortal {...props}/>
    </ComponentProvider>
  );
};
