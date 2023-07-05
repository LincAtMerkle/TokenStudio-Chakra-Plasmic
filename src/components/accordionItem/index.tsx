import { AccordionItemProps, AccordionItem as ChakraAccordionItemComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAccordionItemComponent, 'container');

export const AccordionItem = (props: AccordionItemProps) => {
  return <Wrapped {...props} />;
};
