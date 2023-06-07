import { Box, BoxProps, Button, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
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
    className={className} as="section" py={{ base: '4', md: '8' }}>
    <Container maxW="3xl">
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        p={{ base: '4', md: '6' }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '5', md: '6' }}
          justify="space-between"
        >
          <Stack spacing="1">
            <Text fontSize="lg" fontWeight="medium">
              Updates Available
            </Text>
            <Text fontSize="sm" color="muted">
              A new version is available. Please upgrade for the best experience.
            </Text>
          </Stack>
          <Box>
            <Button variant="primary">Download</Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  </Box>
)
}