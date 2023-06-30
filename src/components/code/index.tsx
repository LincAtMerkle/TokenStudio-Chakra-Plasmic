import { CodeProps, Code as _Code } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCodeComponent, 'container');

export const Code = (props: CodeProps) => {
  return <Wrapped {...props} />;
};
