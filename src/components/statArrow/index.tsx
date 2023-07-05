import { StatArrowProps, StatArrow as ChakraStatArrowComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraStatArrowComponent, 'container');

export const StatArrow = (props: StatArrowProps) => {
  return <Wrapped {...props} />;
};
