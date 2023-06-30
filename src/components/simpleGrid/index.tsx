import { SimpleGridProps, SimpleGrid as _SimpleGrid } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSimpleGridComponent, 'container');

export const SimpleGrid = (props: SimpleGridProps) => {
  return <Wrapped {...props} />;
};
