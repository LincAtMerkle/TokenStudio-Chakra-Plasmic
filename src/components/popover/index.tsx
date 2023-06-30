import { PopoverProps, Popover as ChakraPopoverComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPopoverComponent, 'container');

export const Popover = (props: PopoverProps) => {
  return <Wrapped {...props} />;
};
