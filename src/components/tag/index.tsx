import { TagProps, Tag as _Tag } from "@chakra-ui/react";
import { wrapTokens } from "../../tokensCtx";

const Wrapped = wrapTokens(ChakraTagComponent, 'container');

export const Tag = (props: TagProps) => {
  return <Wrapped {...props} />;
};
