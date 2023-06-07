import { Box, BoxProps, Button, Container, Divider, Stack, Text } from '@chakra-ui/react'
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
      <Stack spacing="5">
        <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} justify="space-between">
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Member overview
            </Text>
            <Text color="muted" fontSize="sm">
              All registered users in the overview
            </Text>
          </Box>
          <Button variant="primary" alignSelf="start">
            Create
          </Button>
        </Stack>
        <Divider />
      </Stack>
    </Container>
  </Box>
)
}