import { TooltipProps, Tooltip as _Tooltip } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraooltipComponent, 'container');

export const Tooltip = (props: TooltipProps) => {
  return <Wrapped {...props} />;
};
