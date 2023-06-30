import { RadioProps, Radio as ChakraRadioComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraRadioComponent, 'container');

export const Radio = (props: RadioProps) => {
  return <Wrapped {...props} />;
};
