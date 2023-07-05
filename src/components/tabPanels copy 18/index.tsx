import { TabPanelsProps, TabPanels as ChakraTabPanelsComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTabPanelsComponent, 'container');

export const TabPanels = (props: TabPanelsProps) => {
  return <Wrapped {...props} />;
};
