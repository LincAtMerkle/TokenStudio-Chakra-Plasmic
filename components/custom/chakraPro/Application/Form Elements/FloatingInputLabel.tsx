import { Box, BoxProps, Container, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
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
    <Box className={className} as="section" bg="bg-surface" pt="12" pb={{ base: '4', md: '8' }}>
    <Container maxW="lg">
      <Stack spacing="10">
        <FormControl>
          {/* The trick is in the empty placeholder ;) */}
          <Input id="small" size="sm" placeholder=" " data-peer />
          <FormLabel htmlFor="small" variant="floating" size="sm">
            Small
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input id="medium" size="md" placeholder=" " data-peer />
          <FormLabel htmlFor="medium" variant="floating" size="md">
            Medium
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input id="large" size="lg" placeholder=" " data-peer />
          <FormLabel htmlFor="large" variant="floating" size="lg">
            Large
          </FormLabel>
        </FormControl>
      </Stack>
    </Container>
  </Box>
)
}