import React from "react";
import { chakra, RadioCardProps, RadioCard as _RadioCard } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraRadioCard = wrapTokens(_RadioCard, "container");

export const RadioCard = (props: RadioCardProps) => {
  return (
    <ComponentProvider name="radioCard" className={props.className}>
      <ChakraRadioCard {...props}/>
    </ComponentProvider>
  );
};
