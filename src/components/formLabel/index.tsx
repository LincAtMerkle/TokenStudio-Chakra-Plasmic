import { FormLabelProps, FormLabel as ChakraFormLabelComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraFormLabelComponent, 'container');

export const FormLabel = (props: FormLabelProps) => {
  return <Wrapped {...props} />;
};
