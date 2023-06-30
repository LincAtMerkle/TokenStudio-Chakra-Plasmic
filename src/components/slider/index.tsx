import { SliderProps, Slider as ChakraSliderComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSliderComponent, 'container');

export const Slider = (props: SliderProps) => {
  return <Wrapped {...props} />;
};
