import React from "react";
import { chakra, ButtonProps, Button as _Button } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraButton = wrapTokens(_Button, "container");

export const Button = (props: ButtonProps) => {
  console.log("BUTTON PROPS", props);
  return (
    <ComponentProvider name="button">
      <ChakraButton {...props}/>
    </ComponentProvider>
  );
};
