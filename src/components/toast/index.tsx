import { ToastProps, Toast as _Toast } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraToastComponent, 'container');

export const Toast = (props: ToastProps) => {
  return <Wrapped {...props} />;
};
