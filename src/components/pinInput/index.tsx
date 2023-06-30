import React from "react";
import { chakra, PinInputProps, PinInput as _PinInput } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraPinInput = wrapTokens(_PinInput, "container");

export const PinInput = (props: PinInputProps) => {
  return (
    <ComponentProvider name="pinInput" className={props.className}>
      <ChakraPinInput {...props}/>
    </ComponentProvider>
  );
};
