import React from "react";
import { chakra, EditableProps, Editable as _Editable } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraEditable = wrapTokens(_Editable, "container");

export const Editable = (props: EditableProps) => {
  return (
    <ComponentProvider name="editable" className={props.className}>
      <ChakraEditable {...props}/>
    </ComponentProvider>
  );
};
