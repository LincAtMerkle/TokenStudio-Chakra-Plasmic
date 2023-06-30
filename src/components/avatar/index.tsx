import { AvatarProps, Avatar as ChakraAvatarComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraAvatarComponent, 'container');

export const Avatar = (props: AvatarProps) => {
  return <Wrapped {...props} />;
};
