import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'
import { QuantityPicker } from './QuantityPicker'
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
      <QuantityPicker rootProps={{ maxW: '140px' }} defaultValue={1} max={5} />
    </Box>
  )
}
