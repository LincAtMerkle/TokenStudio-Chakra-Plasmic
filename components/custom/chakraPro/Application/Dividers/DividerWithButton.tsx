import { Box, BoxProps, Button, Container, Divider, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { FiPlus } from 'react-icons/fi'
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
        <Button flexShrink={0} variant="secondary" leftIcon={<FiPlus fontSize="1.25rem" />}>
          Create
        </Button>
        <Divider />
      </HStack>
    </Container>
  </Box>
)
}