import { StatProps, Stat as _Stat } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraStatComponent, 'container');

export const Stat = (props: StatProps) => {
  return <Wrapped {...props} />;
};
