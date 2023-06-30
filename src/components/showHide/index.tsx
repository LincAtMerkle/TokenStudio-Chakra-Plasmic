import { ShowHideProps, ShowHide as ChakraShowHideComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraShowHideComponent, 'container');

export const ShowHide = (props: ShowHideProps) => {
  return <Wrapped {...props} />;
};
