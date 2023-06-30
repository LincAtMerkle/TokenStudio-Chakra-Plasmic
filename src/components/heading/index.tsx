import React from "react";
import { chakra, HeadingProps, Heading as _Heading } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraHeading = wrapTokens(_Heading, "container");

export const Heading = (props: HeadingProps) => {
  return (
    <ComponentProvider name="heading" className={props.className}>
      <ChakraHeading {...props}/>
    </ComponentProvider>
  );
};
