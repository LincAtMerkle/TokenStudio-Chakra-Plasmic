import { StatHelpTextProps, StatHelpText as ChakraStatHelpTextComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraStatHelpTextComponent, 'container');

export const StatHelpText = (props: StatHelpTextProps) => {
  return <Wrapped {...props} />;
};
