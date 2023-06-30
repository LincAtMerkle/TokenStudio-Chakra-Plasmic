import React from "react";
import { chakra, MenuProps, Menu as _Menu } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraMenu = wrapTokens(_Menu, "container");

export const Menu = (props: MenuProps) => {
  return (
    <ComponentProvider name="menu" className={props.className}>
      <ChakraMenu {...props}/>
    </ComponentProvider>
  );
};
