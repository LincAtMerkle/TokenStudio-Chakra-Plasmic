import React from "react";
import { chakra, RangeSliderProps, RangeSlider as _RangeSlider } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraRangeSlider = wrapTokens(_RangeSlider, "container");

export const RangeSlider = (props: RangeSliderProps) => {
  return (
    <ComponentProvider name="rangeSlider" className={props.className}>
      <ChakraRangeSlider {...props}/>
    </ComponentProvider>
  );
};
