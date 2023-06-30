import { GridProps, Grid as _Grid } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraGridComponent, 'container');

export const Grid = (props: GridProps) => {
  return <Wrapped {...props} />;
};
