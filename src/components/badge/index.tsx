import { BadgeProps, Badge as ChakraBadgeComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraBadgeComponent, 'container');

export const Badge = (props: BadgeProps) => {
  return <Wrapped {...props} />;
};
