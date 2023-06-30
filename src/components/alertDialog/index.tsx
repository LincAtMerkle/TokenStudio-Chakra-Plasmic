import { AlertDialogProps, AlertDialog as _AlertDialog } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAlertDialogComponent, 'container');

export const AlertDialog = (props: AlertDialogProps) => {
  return <Wrapped {...props} />;
};
