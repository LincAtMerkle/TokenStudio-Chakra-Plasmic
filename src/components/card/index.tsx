import { CardProps, Card as ChakraCardComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCardComponent, 'container');

export const Card = (props: CardProps) => {
  return <Wrapped {...props} />;
};
