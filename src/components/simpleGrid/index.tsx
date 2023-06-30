import { SimpleGridProps, SimpleGrid as ChakraSimpleGridComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSimpleGridComponent, 'container');

export const SimpleGrid = (props: SimpleGridProps) => {
  return <Wrapped {...props} />;
};
