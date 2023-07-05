import { BreadcrumbLinkProps, BreadcrumbLink as ChakraBreadcrumbLinkComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraBreadcrumbLinkComponent, 'container');

export const BreadcrumbLink = (props: BreadcrumbLinkProps) => {
  return <Wrapped {...props} />;
};
