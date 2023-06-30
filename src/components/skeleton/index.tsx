import { SkeletonProps, Skeleton as ChakraSkeletonComponent } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSkeletonComponent, 'container');

export const Skeleton = (props: SkeletonProps) => {
  return <Wrapped {...props} />;
};
