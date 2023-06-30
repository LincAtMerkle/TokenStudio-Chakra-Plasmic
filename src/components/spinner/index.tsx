import { SpinnerProps, Spinner as _Spinner } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSpinnerComponent, 'container');

export const Spinner = (props: SpinnerProps) => {
  return <Wrapped {...props} />;
};
