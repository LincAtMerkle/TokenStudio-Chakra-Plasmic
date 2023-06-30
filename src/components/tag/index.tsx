import React from "react";
import { chakra, TagProps, Tag as _Tag } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraTag = wrapTokens(_Tag, "container");

export const Tag = (props: TagProps) => {
  return (
    <ComponentProvider name="tag" className={props.className}>
      <ChakraTag {...props}/>
    </ComponentProvider>
  );
};
