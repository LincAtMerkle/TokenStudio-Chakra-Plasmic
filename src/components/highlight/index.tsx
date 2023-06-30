import { HighlightProps, Highlight as ChakraHighlightComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraHighlightComponent, 'container');

export const Highlight = (props: HighlightProps) => {
  return <Wrapped {...props} />;
};
