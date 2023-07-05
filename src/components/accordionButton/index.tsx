import { AccordionButtonProps, AccordionButton as ChakraAccordionButtonComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAccordionButtonComponent, 'container');

export const AccordionButton = (props: AccordionButtonProps) => {
  return <Wrapped {...props} />;
};
