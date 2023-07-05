import { CardHeaderProps, CardHeader as ChakraCardHeaderComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCardHeaderComponent, 'container');

export const CardHeader = (props: CardHeaderProps) => {
  return <Wrapped {...props} />;
};
