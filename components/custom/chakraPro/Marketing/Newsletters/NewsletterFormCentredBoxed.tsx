import {
  Box,
  Button,
  Container,
  ContainerProps,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
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
    <Box
      bg="bg-surface"
      py={{ base: '10', md: '16' }}
      px="6"
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
    >
      <Stack spacing={{ base: '8', md: '10' }} align="center">
        <Stack spacing={{ base: '4', md: '5' }} textAlign="center">
          <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
            Not found what you are looking for?
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
            We will contact you when there are new components to discover.
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          width="full"
          maxW={{ md: 'lg' }}
          spacing="4"
        >
          <FormControl flex="1">
            <Input type="email" size="lg" placeholder="Enter your email" />
            <FormHelperText color="subtle">We send you at most one mail per month</FormHelperText>
          </FormControl>
          <Button variant="primary" size="lg">
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Container>
)
  }