import { SpinnerProps, Spinner as ChakraSpinnerComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSpinnerComponent, 'container');

export const Spinner = (props: SpinnerProps) => {
  return <Wrapped {...props} />;
};
