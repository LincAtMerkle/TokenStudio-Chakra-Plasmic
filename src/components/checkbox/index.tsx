import { CheckboxProps, Checkbox as _Checkbox } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCheckboxComponent, 'container');

export const Checkbox = (props: CheckboxProps) => {
  return <Wrapped {...props} />;
};
