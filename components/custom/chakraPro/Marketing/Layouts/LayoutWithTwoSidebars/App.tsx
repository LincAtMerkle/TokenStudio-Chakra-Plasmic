import { Container, Flex, FlexProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Footer } from './Footer'
import { Main } from './Main'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
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
        <Sidebar maxW={{ lg: '36' }} />
        <Main />
        <Sidebar maxW={{ lg: '72' }} />
      </Stack>
    </Container>
    <Footer />
  </Flex>
)
  }