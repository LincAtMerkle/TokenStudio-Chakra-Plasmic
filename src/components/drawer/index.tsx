import React from "react";
import { chakra, DrawerProps, Drawer as _Drawer } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraDrawer = wrapTokens(_Drawer, "container");

export const Drawer = (props: DrawerProps) => {
  return (
    <ComponentProvider name="drawer" className={props.className}>
      <ChakraDrawer {...props}/>
    </ComponentProvider>
  );
};
