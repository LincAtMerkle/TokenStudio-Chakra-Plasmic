import { DividerProps, Divider as _Divider } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraDividerComponent, 'container');

export const Divider = (props: DividerProps) => {
  return <Wrapped {...props} />;
};
