import { Box, BoxProps, CloseButton, Container, Link, Stack, Text } from '@chakra-ui/react'
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
    className={className}  as="section" pb={{ base: '12', md: '24' }}>
    <Box bg="bg-accent" color="on-accent" position="relative">
      <Container py={{ base: '4', md: '3.5' }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          spacing={{ base: '0.5', md: '1.5' }}
          pe={{ base: '4', sm: '0' }}
        >
          <Text fontWeight="medium">This site is using third-party cookies.</Text>
          <Text color="on-accent-muted">
            Read our <Link>Cookie Policy</Link>
          </Text>
        </Stack>
        <CloseButton position="absolute" right="2" top="2.5" />
      </Container>
    </Box>
  </Box>
)
    }