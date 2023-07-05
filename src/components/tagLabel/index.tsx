import { TagLabelProps, TagLabel as ChakraTagLabelComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTagLabelComponent, 'container');

export const TagLabel = (props: TagLabelProps) => {
  return <Wrapped {...props} />;
};
