import { TextareaProps, Textarea as ChakraTextareaComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTextareaComponent, 'container');

export const Textarea = (props: TextareaProps) => {
  return <Wrapped {...props} />;
};
