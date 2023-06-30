import { TextareaProps, Textarea as _Textarea } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTextareaComponent, 'container');

export const Textarea = (props: TextareaProps) => {
  return <Wrapped {...props} />;
};
