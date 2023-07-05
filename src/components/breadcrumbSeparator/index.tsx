import { BreadcrumbSeparatorProps, BreadcrumbSeparator as ChakraBreadcrumbSeparatorComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraBreadcrumbSeparatorComponent, 'container');

export const BreadcrumbSeparator = (props: BreadcrumbSeparatorProps) => {
  return <Wrapped {...props} />;
};
