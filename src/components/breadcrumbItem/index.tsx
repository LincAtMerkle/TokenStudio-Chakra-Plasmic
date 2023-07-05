import { BreadcrumbItemProps, BreadcrumbItem as ChakraBreadcrumbItemComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraBreadcrumbItemComponent, 'container');

export const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  return <Wrapped {...props} />;
};
