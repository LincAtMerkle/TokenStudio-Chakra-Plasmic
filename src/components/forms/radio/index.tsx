import React from "react";
import { chakra, RadioProps, Radio as _Radio } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraRadio = wrapTokens(_Radio, "container");

export const Radio = (props: RadioProps) => {
  return (
    <ComponentProvider name="radio" className={props.className}>
      <ChakraRadio {...props}/>
    </ComponentProvider>
  );
};
