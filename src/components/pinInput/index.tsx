import { PinInputProps, PinInput as ChakraPinInputComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraPinInputComponent, 'container');

export const PinInput = (props: PinInputProps) => {
  return <Wrapped {...props} />;
};
