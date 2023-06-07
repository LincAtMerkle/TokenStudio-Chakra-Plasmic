import {
  Button,
  Container,
  ContainerProps,
  Divider,
  Heading,
  Input,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { GoogleIcon } from './ProviderIcons'
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
    className={className} maxW="md" py={{ base: '12', md: '24' }}>
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logo />
        <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
          Log in to your account
        </Heading>
      </Stack>
      <Stack spacing="6">
        <Button variant="secondary" leftIcon={<GoogleIcon boxSize="5" />} iconSpacing="3">
          Continue with Google
        </Button>
        <Divider />
        <Stack spacing="4">
          <Input placeholder="Enter your email" />
          <Button variant="primary">Continue with email</Button>
        </Stack>
      </Stack>
      <Button variant="link" colorScheme="pink" size="sm">
        Continue using Single Sign-on (SSO)
      </Button>
    </Stack>
  </Container>
)
  }