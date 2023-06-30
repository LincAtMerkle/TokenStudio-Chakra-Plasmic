import { ListProps, List as ChakraListComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraListComponent, 'container');

export const List = (props: ListProps) => {
  return <Wrapped {...props} />;
};
