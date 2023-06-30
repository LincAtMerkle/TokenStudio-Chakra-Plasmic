import { BreadcrumbProps, Breadcrumb as _Breadcrumb } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraBreadcrumbComponent, 'container');

export const Breadcrumb = (props: BreadcrumbProps) => {
  return <Wrapped {...props} />;
};
