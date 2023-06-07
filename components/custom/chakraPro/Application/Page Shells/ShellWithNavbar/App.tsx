import { Box, BoxProps, Container } from '@chakra-ui/react'
import * as React from 'react'
import { Content } from './Content'
import { Navbar } from './Navbar'
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
    <Box className={className} as="section" height="100vh" overflowY="auto">
    <Navbar />
    <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
      <Content />
    </Container>
  </Box>
)
}