import { SelectProps, Select as ChakraSelectComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSelectComponent, 'container');

export const CustomSelect = (props: SelectProps) => {
  return <Wrapped {...props} />;
};
