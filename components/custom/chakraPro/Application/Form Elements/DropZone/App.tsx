import { Box, BoxProps, Container, FormControl, FormLabel } from '@chakra-ui/react'
import * as React from 'react'
import { Dropzone } from './Dropzone'
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
    <Box 
    className={className} as="section" bg="bg-surface" py={{ base: '4', md: '8' }}>
    <Container maxW="lg">
      <FormControl id="file">
        <FormLabel>Dropzone</FormLabel>
        <Dropzone />
      </FormControl>
    </Container>
  </Box>
)
}