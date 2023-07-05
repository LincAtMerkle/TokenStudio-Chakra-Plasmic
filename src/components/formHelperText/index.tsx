import { FormHelperTextProps, FormHelperText as ChakraFormHelperTextComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraFormHelperTextComponent, 'container');

export const FormHelperText = (props: FormHelperTextProps) => {
  return <Wrapped {...props} />;
};
