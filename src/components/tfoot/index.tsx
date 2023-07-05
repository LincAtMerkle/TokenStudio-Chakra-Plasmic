import { TfootProps, Tfoot as ChakraTfootComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTfootComponent, 'container');

export const Tfoot = (props: TfootProps) => {
  return <Wrapped {...props} />;
};
