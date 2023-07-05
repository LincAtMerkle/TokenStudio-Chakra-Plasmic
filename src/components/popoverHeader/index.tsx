import { PopoverHeaderProps, PopoverHeader as ChakraPopoverHeaderComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPopoverHeaderComponent, 'container');

export const PopoverHeader = (props: PopoverHeaderProps) => {
  return <Wrapped {...props} />;
};
