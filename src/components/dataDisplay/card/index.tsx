import React from "react";
import { chakra, CardProps, Card as _Card } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraCard = wrapTokens(_Card, "container");

export const Card = (props: CardProps) => {
  return (
    <ComponentProvider name="card" className={props.className}>
      <ChakraCard {...props}/>
    </ComponentProvider>
  );
};
