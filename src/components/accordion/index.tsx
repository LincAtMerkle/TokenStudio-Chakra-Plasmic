import { AccordionProps, Accordion as ChakraAccordionComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAccordionComponent, 'container');

export const Accordion = (props: AccordionProps) => {
  return <Wrapped {...props} />;
};
