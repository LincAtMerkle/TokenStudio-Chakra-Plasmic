import React from "react";
import { chakra, BreadcrumbProps, Breadcrumb as _Breadcrumb } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraBreadcrumb = wrapTokens(_Breadcrumb, "container");

export const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <ComponentProvider name="breadcrumb" className={props.className}>
      <ChakraBreadcrumb {...props}/>
    </ComponentProvider>
  );
};
