import { HeadingProps, Heading as ChakraHeadingComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraHeadingComponent, 'container');

export const Heading = (props: HeadingProps) => {
  return <Wrapped {...props} />;
};
