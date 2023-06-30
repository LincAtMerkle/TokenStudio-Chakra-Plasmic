import React from "react";
import { chakra, AspectRatioProps, AspectRatio as _AspectRatio } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraAspectRatio = wrapTokens(_AspectRatio, "container");

export const AspectRatio = (props: AspectRatioProps) => {
  return (
    <ComponentProvider name="aspectRatio" className={props.className}>
      <ChakraAspectRatio {...props}/>
    </ComponentProvider>
  );
};
