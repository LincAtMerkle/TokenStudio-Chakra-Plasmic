import { TdProps, Td as ChakraTdComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTdComponent, 'container');

export const Td = (props: TdProps) => {
  return <Wrapped {...props} />;
};
