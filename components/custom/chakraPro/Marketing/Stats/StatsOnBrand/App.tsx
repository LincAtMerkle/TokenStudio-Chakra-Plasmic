import {
  Box, 
  BoxProps,
  Container,
  ContainerProps,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { stats } from './data'
import { Stat } from './Stat'
import { ReactNode } from 'react';

export type AppProps = ContainerProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
  return (
    <Container 
    className={className} py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '12', md: '16' }}>
      <Stack spacing={{ base: '4', md: '5' }} textAlign="center" align="center">
        <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>Why Chakra UI Pro?</Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted" maxW="3xl">
          Because this beautiful and responsive React components will help your to realize your next
          project in no time.
        </Text>
      </Stack>
      <Box
        bg="bg-accent"
        color="on-accent"
        borderRadius="2xl"
        px={{ base: '6', md: '12', lg: '16' }}
        py={{ base: '10', md: '12', lg: '16' }}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} rowGap="8">
          {stats.map((stat, id) => (
            <Stat key={id} {...stat} />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  </Container>
)
}