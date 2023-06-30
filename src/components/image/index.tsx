import React from "react";
import { chakra, ImageProps, Image as _Image } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraImage = wrapTokens(_Image, "container");

export const Image = (props: ImageProps) => {
  return (
    <ComponentProvider name="image" className={props.className}>
      <ChakraImage {...props}/>
    </ComponentProvider>
  );
};
