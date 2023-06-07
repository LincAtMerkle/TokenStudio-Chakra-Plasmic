import { Box, BoxProps, Container, Divider, HStack, Text } from '@chakra-ui/react'
import * as React from 'react'
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
    className={className} bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <HStack>
        <Divider />
        <Text fontSize="lg" fontWeight="medium" whiteSpace="nowrap">
          Members
        </Text>
        <Divider />
      </HStack>
    </Container>
  </Box>
)
}