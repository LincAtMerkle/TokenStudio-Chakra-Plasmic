import { TagLeftIconProps, TagLeftIcon as ChakraTagLeftIconComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTagLeftIconComponent, 'container');

export const TagLeftIcon = (props: TagLeftIconProps) => {
  return <Wrapped {...props} />;
};
