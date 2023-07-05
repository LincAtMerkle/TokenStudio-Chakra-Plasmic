import { TagCloseButtonProps, TagCloseButton as ChakraTagCloseButtonComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTagCloseButtonComponent, 'container');

export const TagCloseButton = (props: TagCloseButtonProps) => {
  return <Wrapped {...props} />;
};
