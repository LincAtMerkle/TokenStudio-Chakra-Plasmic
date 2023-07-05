import { PopoverArrowProps, PopoverArrow as ChakraPopoverArrowComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPopoverArrowComponent, 'container');

export const PopoverArrow = (props: PopoverArrowProps) => {
  return <Wrapped {...props} />;
};
