import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'
import { ColorPicker } from './ColorPicker'
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
    <ColorPicker
      defaultValue="Blue"
      options={[
        { label: 'Blue', value: '#2B6CB0' },
        { label: 'Yellow', value: '#ECC94B' },
        { label: 'Red', value: '#F56565' },
      ]}
    />
  </Box>
)
}