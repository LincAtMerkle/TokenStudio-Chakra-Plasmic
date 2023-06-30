import React from "react";
import { chakra, SkeletonProps, Skeleton as _Skeleton } from "@chakra-ui/react";
import { ComponentProvider, wrapTokens } from "../tokensCtx";

// @ts-ignore TODO: fix types
const ChakraSkeleton = wrapTokens(_Skeleton, "container");

export const Skeleton = (props: SkeletonProps) => {
  return (
    <ComponentProvider name="skeleton" className={props.className}>
      <ChakraSkeleton {...props}/>
    </ComponentProvider>
  );
};
