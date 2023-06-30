import React from "react";
import { chakra, LinkOverlayProps, LinkOverlay as _LinkOverlay } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraLinkOverlay = wrapTokens(_LinkOverlay, "container");

export const LinkOverlay = (props: LinkOverlayProps) => {
  return (
    <ComponentProvider name="linkOverlay" className={props.className}>
      <ChakraLinkOverlay {...props}/>
    </ComponentProvider>
  );
};
