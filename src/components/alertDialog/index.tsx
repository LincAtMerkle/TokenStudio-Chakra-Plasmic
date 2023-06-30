import React from "react";
import { chakra, AlertDialogProps, AlertDialog as _AlertDialog } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraAlertDialog = wrapTokens(_AlertDialog, "container");

export const AlertDialog = (props: AlertDialogProps) => {
  return (
    <ComponentProvider name="alertDialog" className={props.className}>
      <ChakraAlertDialog {...props}/>
    </ComponentProvider>
  );
};
