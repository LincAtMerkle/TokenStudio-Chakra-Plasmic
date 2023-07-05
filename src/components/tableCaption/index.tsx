import { TableCaptionProps, TableCaption as ChakraTableCaptionComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTableCaptionComponent, 'container');

export const TableCaption = (props: TableCaptionProps) => {
  return <Wrapped {...props} />;
};
