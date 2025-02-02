import {
  Box, 
  BoxProps,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { stats } from './data'
import { Stat } from './Stat'
  import { ReactNode } from 'react';

  export type AppProps = BoxProps & {
    children: ReactNode
  }
  
  export function App({
    className,
    children,
    ...rest
    }: AppProps) {
      const isMobile = useBreakpointValue({ base: true, md: false })
    return (
      <Box 
      className={className} bg="bg-surface">
      <Container py={{ base: '16', md: '24' }}>
        <Stack spacing={{ base: '12', md: '16' }} textAlign="center" align="center">
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              Why Chakra UI Pro?
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted" maxW="3xl">
              Because this beautiful and responsive React components will help your to realize your
              next project in no time.
            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            maxW="3xl"
            width="full"
            spacing={{ base: '8', md: '4' }}
            {...(!isMobile ? { divider: <StackDivider /> } : {})}
          >
            {stats.map((stat, id) => (
              <Stat key={id} flex="1" {...stat} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
