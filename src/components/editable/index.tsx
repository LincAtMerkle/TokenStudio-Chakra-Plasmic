import { EditableProps, Editable as _Editable } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraEditableComponent, 'container');

export const Editable = (props: EditableProps) => {
  return <Wrapped {...props} />;
};
