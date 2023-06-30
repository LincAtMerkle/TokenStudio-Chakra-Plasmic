import React from "react";
import { chakra, ShowHideProps, ShowHide as _ShowHide } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraShowHide = wrapTokens(_ShowHide, "container");

export const ShowHide = (props: ShowHideProps) => {
  return (
    <ComponentProvider name="showHide" className={props.className}>
      <ChakraShowHide {...props}/>
    </ComponentProvider>
  );
};
