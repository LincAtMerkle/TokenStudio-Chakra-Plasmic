import { AccordionIconProps, AccordionIcon as ChakraAccordionIconComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAccordionIconComponent, 'container');

export const AccordionIcon = (props: AccordionIconProps) => {
  return <Wrapped {...props} />;
};
