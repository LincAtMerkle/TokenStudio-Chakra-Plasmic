import { LinkProps, Link as _Link } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraLinkComponent, 'container');

export const Link = (props: LinkProps) => {
  return <Wrapped {...props} />;
};
