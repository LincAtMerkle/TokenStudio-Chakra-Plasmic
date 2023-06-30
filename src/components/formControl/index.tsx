import { FormControlProps, FormControl as ChakraFormControlComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraFormControlComponent, 'container');

export const FormControl = (props: FormControlProps) => {
  return <Wrapped {...props} />;
};
