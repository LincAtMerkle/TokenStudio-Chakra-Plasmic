import { CircularProgressProps, CircularProgress as _CircularProgress } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCircularProgressComponent, 'container');

export const CircularProgress = (props: CircularProgressProps) => {
  return <Wrapped {...props} />;
};
