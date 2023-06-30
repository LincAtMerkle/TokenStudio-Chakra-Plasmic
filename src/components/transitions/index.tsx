import { TransitionsProps, Transitions as _Transitions } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTransitionsComponent, 'container');

export const Transitions = (props: TransitionsProps) => {
  return <Wrapped {...props} />;
};
