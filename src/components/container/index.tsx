import { ContainerProps, Container as ChakraContainerComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraContainerComponent, 'container');

export const Container = (props: ContainerProps) => {
  return <Wrapped {...props} />;
};
