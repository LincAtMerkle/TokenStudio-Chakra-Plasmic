import { SliderProps, Slider as _Slider } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSliderComponent, 'container');

export const Slider = (props: SliderProps) => {
  return <Wrapped {...props} />;
};
