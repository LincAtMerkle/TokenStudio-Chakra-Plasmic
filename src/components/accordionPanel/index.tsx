import { AccordionPanelProps, AccordionPanel as ChakraAccordionPanelComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAccordionPanelComponent, 'container');

export const AccordionPanel = (props: AccordionPanelProps) => {
  return <Wrapped {...props} />;
};
