import { TableProps, Table as ChakraTableComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTableComponent, 'container');

export const Table = (props: TableProps) => {
  return <Wrapped {...props} />;
};
