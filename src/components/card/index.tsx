import { CardProps, Card as _Card } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCardComponent, 'container');

export const Card = (props: CardProps) => {
  return <Wrapped {...props} />;
};
