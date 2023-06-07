import { Box, BoxProps, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
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
    <Box className={className} as="section" bg="bg-surface" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Container>
      <Stack spacing="1">
        <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })} fontWeight="medium">
          Member overview
        </Heading>
        <Text color="muted">All registered users in the overview</Text>
      </Stack>
    </Container>
  </Box>
)
}