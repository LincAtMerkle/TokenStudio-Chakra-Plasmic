import { LinkOverlayProps, LinkOverlay as _LinkOverlay } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraLinkOverlayComponent, 'container');

export const LinkOverlay = (props: LinkOverlayProps) => {
  return <Wrapped {...props} />;
};
