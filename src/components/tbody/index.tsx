import { TbodyProps, Tbody as ChakraTbodyComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraTbodyComponent, 'container');

export const Tbody = (props: TbodyProps) => {
  return <Wrapped {...props} />;
};
