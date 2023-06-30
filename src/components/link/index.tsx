import React from "react";
import { chakra, LinkProps, Link as _Link } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraLink = wrapTokens(_Link, "container");

export const Link = (props: LinkProps) => {
  return (
    <ComponentProvider name="link" className={props.className}>
      <ChakraLink {...props}/>
    </ComponentProvider>
  );
};
