import { TableContainerProps, TableContainer as ChakraTableContainerComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTableContainerComponent, 'container');

export const TableContainer = (props: TableContainerProps) => {
  return <Wrapped {...props} />;
};
