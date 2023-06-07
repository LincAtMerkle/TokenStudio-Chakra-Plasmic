import {
  Box, 
  BoxProps,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { stats } from './data'
import { LogoIcon } from './Logo'
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
    className={className} as="section" bg="bg-surface">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '12', md: '16' }}>
        <Stack spacing={{ base: '4', md: '6' }}>
          <LogoIcon />
          <Stack spacing={{ base: '4', md: '5' }} textAlign="center" align="center">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              Why Chakra UI Pro?
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted" maxW="3xl">
              Because this beautiful and responsive React components will help your to realize your
              next project in no time.
            </Text>
          </Stack>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} columnGap="8" rowGap="10">
          {stats.map((stat, id) => (
            <Box
              key={id}
              borderLeftWidth={{ base: '0', md: '2px' }}
              borderTopWidth={{ base: '2px', md: '0' }}
              borderColor="accent"
              px={{ md: '6' }}
              pt={{ base: '4', md: '0' }}
            >
              <Stack spacing="5">
                <Stack spacing="1">
                  <Heading size="lg" color="accent">
                    {stat.value}
                  </Heading>
                  <Text color="muted" fontSize="lg" fontWeight="medium">
                    {stat.label}
                  </Text>
                </Stack>
                <Button
                  variant="link"
                  colorScheme="pink"
                  alignSelf="start"
                  rightIcon={<FiArrowRight fontSize="1.25rem" />}
                >
                  {stat.link.label}
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)
}