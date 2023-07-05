import { PopoverContentProps, PopoverContent as ChakraPopoverContentComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPopoverContentComponent, 'container');

export const PopoverContent = (props: PopoverContentProps) => {
  return <Wrapped {...props} />;
};
