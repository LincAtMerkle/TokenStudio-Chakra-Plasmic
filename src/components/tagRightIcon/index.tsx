import { TagRightIconProps, TagRightIcon as ChakraTagRightIconComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTagRightIconComponent, 'container');

export const TagRightIcon = (props: TagRightIconProps) => {
  return <Wrapped {...props} />;
};
