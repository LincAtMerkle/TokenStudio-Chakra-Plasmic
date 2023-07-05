import { StatNumberProps, StatNumber as ChakraStatNumberComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraStatNumberComponent, 'container');

export const StatNumber = (props: StatNumberProps) => {
  return <Wrapped {...props} />;
};
