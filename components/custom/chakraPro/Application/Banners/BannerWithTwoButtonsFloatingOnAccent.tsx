import {
  Box, 
  BoxProps,
  Button,
  CloseButton,
  Container,
  ContainerProps,
  Icon,
  Link,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { BiCookie } from 'react-icons/bi'
import { ReactNode } from 'react';

export type AppProps = ContainerProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
    <Container 
    className={className} as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
      <Box
        bg="bg-accent"
        color="on-accent"
        px={{ base: '4', md: '3' }}
        py={{ base: '4', md: '2.5' }}
        position="relative"
        borderRadius="xl"
      >
        <CloseButton display={{ md: 'none' }} position="absolute" right="2" top="2" />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          spacing={{ base: '3', md: '2' }}
        >
          <Stack
            spacing="4"
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'start', md: 'center' }}
          >
            {!isMobile && (
              <Square size="12" bg="bg-accent-subtle" borderRadius="md">
                <Icon as={BiCookie} boxSize="6" />
              </Square>
            )}
            <Stack spacing="0.5" pe={{ base: '4', md: '0' }}>
              <Text fontWeight="medium">
                We use our own and third-party cookies to personalize content.
              </Text>
              <Text color="on-accent-muted">
                Read our <Link>Cookie Policy</Link>
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: '3', md: '2' }}
            align={{ base: 'stretch', md: 'center' }}
          >
            <Button variant="secondary-on-accent" width="full">
              Reject
            </Button>
            <Button variant="primary-on-accent" width="full">
              Allow
            </Button>
            <CloseButton display={{ base: 'none', md: 'inline-flex' }} />
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}
