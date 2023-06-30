import { TabsProps, Tabs as _Tabs } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTabsComponent, 'container');

export const Tabs = (props: TabsProps) => {
  return <Wrapped {...props} />;
};
