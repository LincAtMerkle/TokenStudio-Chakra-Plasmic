import { RadioProps, Radio as _Radio } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraRadioComponent, 'container');

export const Radio = (props: RadioProps) => {
  return <Wrapped {...props} />;
};
