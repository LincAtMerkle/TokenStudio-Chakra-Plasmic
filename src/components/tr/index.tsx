import { TrProps, Tr as ChakraTrComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTrComponent, 'container');

export const Tr = (props: TrProps) => {
  return <Wrapped {...props} />;
};
