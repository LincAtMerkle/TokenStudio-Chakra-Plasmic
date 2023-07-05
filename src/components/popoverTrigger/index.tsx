import { PopoverTriggerProps, PopoverTrigger as ChakraPopoverTriggerComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPopoverTriggerComponent, 'container');

export const PopoverTrigger = (props: PopoverTriggerProps) => {
  return <Wrapped {...props} />;
};
