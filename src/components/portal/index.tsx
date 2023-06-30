import { PortalProps, Portal as _Portal } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPortalComponent, 'container');

export const Portal = (props: PortalProps) => {
  return <Wrapped {...props} />;
};
