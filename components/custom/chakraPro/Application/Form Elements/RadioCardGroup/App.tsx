import { Box, BoxProps, Container, Text } from '@chakra-ui/react'
import * as React from 'react'
import { RadioCard, RadioCardGroup } from './RadioCardGroup'
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
    <Box className={className} as="section" bg="bg-surface" py={{ base: '4', md: '8' }}>
      <Container maxW="lg">
        <RadioCardGroup defaultValue="one" spacing="3">
          {['one', 'two', 'three'].map((option) => (
            <RadioCard key={option} value={option}>
              <Text color="emphasized" fontWeight="medium" fontSize="sm">
                Option {option}
              </Text>
              <Text color="muted" fontSize="sm">
                Jelly biscuit muffin icing dessert powder macaroon.
              </Text>
            </RadioCard>
          ))}
        </RadioCardGroup>
      </Container>
    </Box>
  )
}
