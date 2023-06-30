import React from "react";
import { chakra, ProgressProps, Progress as _Progress } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraProgress = wrapTokens(_Progress, "container");

export const Progress = (props: ProgressProps) => {
  return (
    <ComponentProvider name="progress" className={props.className}>
      <ChakraProgress {...props}/>
    </ComponentProvider>
  );
};
