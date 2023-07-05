import { CheckboxGroupProps, CheckboxGroup as ChakraCheckboxGroupComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCheckboxGroupComponent, 'container');

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  return <Wrapped {...props} />;
};
