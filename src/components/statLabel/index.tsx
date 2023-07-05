import { StatLabelProps, StatLabel as ChakraStatLabelComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraStatLabelComponent, 'container');

export const StatLabel = (props: StatLabelProps) => {
  return <Wrapped {...props} />;
};
