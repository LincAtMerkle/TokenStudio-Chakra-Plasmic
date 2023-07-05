import { PopoverBodyProps, PopoverBody as ChakraPopoverBodyComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPopoverBodyComponent, 'container');

export const PopoverBody = (props: PopoverBodyProps) => {
  return <Wrapped {...props} />;
};
