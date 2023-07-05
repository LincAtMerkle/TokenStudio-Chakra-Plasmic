import { TabPanelProps, TabPanel as ChakraTabPanelComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTabPanelComponent, 'container');

export const TabPanel = (props: TabPanelProps) => {
  return <Wrapped {...props} />;
};
