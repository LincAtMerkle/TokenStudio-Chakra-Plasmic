import { Box, BoxProps, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'
import { features } from './data'
import { PricingCard } from './PricingCard'
import { PricingFeature } from './PricingFeature'
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
    className={className} as="section">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '12', md: '16' }}>
        <Stack spacing={{ base: '4', md: '6' }}>
          <Stack spacing="3">
            <Text color="accent" fontWeight="semibold">
              Pricing
            </Text>
            <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>
              Get lifetime access
            </Heading>
          </Stack>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted" maxW="3xl">
            Get access to 210+ components and free updates. Customize it to your needs, and make it
            yours today!
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '12', lg: '24' }}>
          <Stack spacing={{ base: '10', md: '12' }} flex="1" justify="center">
            {features.map((feature, id) => (
              <PricingFeature key={id} feature={feature} />
            ))}
          </Stack>
          <PricingCard flex="1" />
        </Stack>
      </Stack>
    </Container>
  </Box>
)
            }