import React from "react";
import { chakra, ModalProps, Modal as _Modal } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraModal = wrapTokens(_Modal, "container");

export const Modal = (props: ModalProps) => {
  return (
    <ComponentProvider name="modal" className={props.className}>
      <ChakraModal {...props}/>
    </ComponentProvider>
  );
};
