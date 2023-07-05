import { CardFooterProps, CardFooter as ChakraCardFooterComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCardFooterComponent, 'container');

export const CardFooter = (props: CardFooterProps) => {
  return <Wrapped {...props} />;
};
