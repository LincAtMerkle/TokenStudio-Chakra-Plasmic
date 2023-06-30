import { CenterProps, Center as ChakraCenterComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCenterComponent, 'container');

export const Center = (props: CenterProps) => {
  return <Wrapped {...props} />;
};
