import { Box, BoxProps, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
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
    className={className} as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Container>
      <Box
        bg="bg-surface"
        px={{ base: '4', md: '6' }}
        py="5"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
      >
        <Stack spacing="1">
          <Text fontSize="lg" fontWeight="medium">
            Member overview
          </Text>
          <Text color="muted" fontSize="sm">
            All registered users in the overview
          </Text>
        </Stack>
      </Box>
    </Container>
  </Box>
)
}