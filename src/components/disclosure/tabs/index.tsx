import React from "react";
import { chakra, TabsProps, Tabs as _Tabs } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraTabs = wrapTokens(_Tabs, "container");

export const Tabs = (props: TabsProps) => {
  return (
    <ComponentProvider name="tabs" className={props.className}>
      <ChakraTabs {...props}/>
    </ComponentProvider>
  );
};
