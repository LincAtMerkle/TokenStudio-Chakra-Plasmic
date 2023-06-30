import React from "react";
import { chakra, AvatarProps, Avatar as _Avatar } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraAvatar = wrapTokens(_Avatar, "container");

export const Avatar = (props: AvatarProps) => {
  return (
    <ComponentProvider name="avatar" className={props.className}>
      <ChakraAvatar {...props}/>
    </ComponentProvider>
  );
};
