import { TabListProps, TabList as ChakraTabListComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTabListComponent, 'container');

export const TabList = (props: TabListProps) => {
  return <Wrapped {...props} />;
};
