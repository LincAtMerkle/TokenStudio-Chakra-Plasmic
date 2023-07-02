import {
  Container,
  ContainerProps,
} from '@chakra-ui/react'
import * as React from 'react'
import { ReactNode } from 'react';

export type AppProps = ContainerProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
  return (
    <Container 
      className={className}
      // maxW="lg" 
      py={{ base: '12', md: '24' }} 
      px={{ base: '0', sm: '8' }}>
      {children}
  </Container>
)
}