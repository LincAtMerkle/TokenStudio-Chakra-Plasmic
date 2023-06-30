import { DrawerProps, Drawer as ChakraDrawerComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraDrawerComponent, 'container');

export const Drawer = (props: DrawerProps) => {
  return <Wrapped {...props} />;
};
