import { Box, BoxProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './Rating'
import { ReactNode } from 'react';

export type AppProps = BoxProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
    return (
    <Box className={className}
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack spacing="4">
      <Rating defaultValue={3} size="sm" />
      <Rating defaultValue={3} />
      <Rating defaultValue={3} size="lg" />
    </Stack>
  </Box>
)
}