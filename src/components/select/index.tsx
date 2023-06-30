import { SelectProps, Select as _CustomSelect } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraCustomSelectComponent, 'container');

export const CustomSelect = (props: SelectProps) => {
  return <Wrapped {...props} />;
};
