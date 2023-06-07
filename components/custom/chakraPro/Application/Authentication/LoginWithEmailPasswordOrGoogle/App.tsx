import {
  Button,
  Checkbox,
  Container,
  ContainerProps,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
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
      <Stack spacing="6">
        <Logo />
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
            Log in to your account
          </Heading>
          <Text color="muted">Start making your dreams come true</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Enter your email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" placeholder="********" type="password" />
          </FormControl>
        </Stack>
        <HStack justify="space-between">
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Button variant="link" colorScheme="pink" size="sm">
            Forgot password
          </Button>
        </HStack>
        <Stack spacing="4">
          <Button variant="primary">Sign in</Button>
          <Button variant="secondary" leftIcon={<GoogleIcon boxSize="5" />} iconSpacing="3">
            Sign in with Google
          </Button>
        </Stack>
      </Stack>
      <HStack spacing="1" justify="center">
        <Text fontSize="sm" color="muted">
          Don&apos;t have an account?
        </Text>
        <Button variant="link" colorScheme="pink" size="sm">
          Sign up
        </Button>
      </HStack>
    </Stack>
  </Container>
)
  }