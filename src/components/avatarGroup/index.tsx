import { AvatarGroupProps, AvatarGroup as ChakraAvatarGroupComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAvatarGroupComponent, 'container');

export const AvatarGroup = (props: AvatarGroupProps) => {
  return <Wrapped {...props} />;
};
