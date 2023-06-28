import React from "react";
import { chakra, ButtonProps, Button as _Button } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

/*@ts-ignore TODO: fix types
const ChakraButton = wrapTokens(_Button, "container");

export const Button = (props: ButtonProps) => {
  return (
    <ComponentProvider name="button" className={props.className}>
      <ChakraButton {...props}/>
    </ComponentProvider>
  );
};
