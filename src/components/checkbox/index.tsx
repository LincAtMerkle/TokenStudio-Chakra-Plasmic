import { CheckboxProps, Checkbox as ChakraCheckboxComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCheckboxComponent, 'container');

export const Checkbox = (props: CheckboxProps) => {
  return <Wrapped {...props} />;
};
