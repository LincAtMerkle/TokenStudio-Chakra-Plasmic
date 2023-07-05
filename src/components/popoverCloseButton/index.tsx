import { PopoverCloseButtonProps, PopoverCloseButton as ChakraPopoverCloseButtonComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPopoverCloseButtonComponent, 'container');

export const PopoverCloseButton = (props: PopoverCloseButtonProps) => {
  return <Wrapped {...props} />;
};
