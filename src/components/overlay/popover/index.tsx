import React from "react";
import { chakra, PopoverProps, Popover as _Popover } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraPopover = wrapTokens(_Popover, "container");

export const Popover = (props: PopoverProps) => {
  return (
    <ComponentProvider name="popover" className={props.className}>
      <ChakraPopover {...props}/>
    </ComponentProvider>
  );
};
