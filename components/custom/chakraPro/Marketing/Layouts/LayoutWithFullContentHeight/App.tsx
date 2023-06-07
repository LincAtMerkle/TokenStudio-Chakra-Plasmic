import { Flex, FlexProps } from '@chakra-ui/react'
import * as React from 'react'
import { Footer } from './Footer'
import { Main } from './Main'
import { Navbar } from './Navbar'
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
    className={className}
    direction="column" flex="1">
      <Navbar />
      <Main />
      <Footer />
    </Flex>
  )
}
