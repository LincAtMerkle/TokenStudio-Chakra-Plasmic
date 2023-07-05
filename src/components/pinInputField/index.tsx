import { PinInputFieldProps, PinInputField as ChakraPinInputFieldComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPinInputFieldComponent, 'container');

export const PinInputField = (props: PinInputFieldProps) => {
  return <Wrapped {...props} />;
};
