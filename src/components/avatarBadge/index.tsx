import { AvatarBadgeProps, AvatarBadge as ChakraAvatarBadgeComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAvatarBadgeComponent, 'container');

export const AvatarBadge = (props: AvatarBadgeProps) => {
  return <Wrapped {...props} />;
};
