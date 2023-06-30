import { LinkOverlayProps, LinkOverlay as ChakraLinkOverlayComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraLinkOverlayComponent, 'container');

export const LinkOverlay = (props: LinkOverlayProps) => {
  return <Wrapped {...props} />;
};
