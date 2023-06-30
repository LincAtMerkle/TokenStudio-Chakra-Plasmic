import React from "react";
import { chakra, ContainerProps, Container as _Container } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraContainer = wrapTokens(_Container, "container");

export const Container = (props: ContainerProps) => {
  return (
    <ComponentProvider name="container" className={props.className}>
      <ChakraContainer {...props}/>
    </ComponentProvider>
  );
};
