import React from "react";
import { chakra, TooltipProps, Tooltip as _Tooltip } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const Chakraooltip = wrapTokens(ooltip, "container");

export const Tooltip = (props: TooltipProps) => {
  return (
    <ComponentProvider name="tooltip" className={props.className}>
      <ChakraTooltip {...props}/>
    </ComponentProvider>
  );
};
