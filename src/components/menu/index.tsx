import { MenuProps, Menu as ChakraMenuComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraMenuComponent, 'container');

export const Menu = (props: MenuProps) => {
  return <Wrapped {...props} />;
};
