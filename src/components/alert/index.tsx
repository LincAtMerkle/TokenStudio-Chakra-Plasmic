import { AlertProps, Alert as ChakraAlertComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAlertComponent, 'container');

export const Alert = (props: AlertProps) => {
  return <Wrapped {...props} />;
};
