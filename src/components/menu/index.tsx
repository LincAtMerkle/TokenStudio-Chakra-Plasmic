import { MenuProps, Menu as _Menu } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraMenuComponent, 'container');

export const Menu = (props: MenuProps) => {
  return <Wrapped {...props} />;
};
