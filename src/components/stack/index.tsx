import { StackProps, Stack as _Stack } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraStackComponent, 'container');

export const Stack = (props: StackProps) => {
  return <Wrapped {...props} />;
};
