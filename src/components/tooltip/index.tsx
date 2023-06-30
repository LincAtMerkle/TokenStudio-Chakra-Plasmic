import { TooltipProps, Tooltip as ChakraTooltipComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTooltipComponent, 'container');

export const Tooltip = (props: TooltipProps) => {
  return <Wrapped {...props} />;
};
