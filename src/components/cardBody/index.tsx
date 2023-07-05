import { CardBodyProps, CardBody as ChakraCardBodyComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCardBodyComponent, 'container');

export const CardBody = (props: CardBodyProps) => {
  return <Wrapped {...props} />;
};
