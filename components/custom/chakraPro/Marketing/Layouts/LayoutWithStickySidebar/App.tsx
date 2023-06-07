import { Box, BoxProps, Container, Flex, FlexProps, Stack } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import * as React from 'react'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'
import { Main } from './Main'
import { ReactNode } from 'react';

export type AppProps = FlexProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
  return (
    <Flex 
    className={className} direction="column" flex="1">
    <Navbar />
    <Container py="16" flex="1">
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '12', lg: '16' }} flex="1">
        <Main />
        <Sidebar />
      </Stack>
    </Container>
    <Footer />
  </Flex>
)
  }