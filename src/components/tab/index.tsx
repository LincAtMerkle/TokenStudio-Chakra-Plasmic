import { TabProps, Tab as ChakraTabComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTabComponent, 'container');

export const Tab = (props: TabProps) => {
  return <Wrapped {...props} />;
};
