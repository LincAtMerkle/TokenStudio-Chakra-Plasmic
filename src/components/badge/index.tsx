import React from "react";
import { chakra, BadgeProps, Badge as _Badge } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraBadge = wrapTokens(_Badge, "container");

export const Badge = (props: BadgeProps) => {
  return (
    <ComponentProvider name="badge" className={props.className}>
      <ChakraBadge {...props}/>
    </ComponentProvider>
  );
};
