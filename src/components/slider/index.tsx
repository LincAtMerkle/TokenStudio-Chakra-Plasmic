import React from "react";
import { chakra, SliderProps, Slider as _Slider } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraSlider = wrapTokens(_Slider, "container");

export const Slider = (props: SliderProps) => {
  return (
    <ComponentProvider name="slider" className={props.className}>
      <ChakraSlider {...props}/>
    </ComponentProvider>
  );
};
