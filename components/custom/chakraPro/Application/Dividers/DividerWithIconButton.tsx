import { Box, BoxProps, Container, Divider, HStack, IconButton } from '@chakra-ui/react'
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
        <IconButton
          flexShrink={0}
          variant="ghost"
          icon={<FiPlus fontSize="1.25rem" />}
          aria-label="Add"
        />
        <Divider />
      </HStack>
    </Container>
  </Box>
)
}