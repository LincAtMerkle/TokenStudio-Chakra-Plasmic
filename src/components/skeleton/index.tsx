import { SkeletonProps, Skeleton as _Skeleton } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraSkeletonComponent, 'container');

export const Skeleton = (props: SkeletonProps) => {
  return <Wrapped {...props} />;
};
