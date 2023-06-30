import React from "react";
import { chakra, AccordionProps, Accordion as _Accordion } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraAccordion = wrapTokens(_Accordion, "container");

export const Accordion = (props: AccordionProps) => {
  return (
    <ComponentProvider name="accordion" className={props.className}>
      <ChakraAccordion {...props}/>
    </ComponentProvider>
  );
};
