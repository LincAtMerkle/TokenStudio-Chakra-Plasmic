import {
  Box, 
  BoxProps,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { ReactNode } from "react";

export type AppProps = BoxProps & {
  children: ReactNode;
};

export function App({ className, children, ...rest }: AppProps) {
  return (
    <Box className={className} bg="bg-surface">
    <Container py={{ base: '16', md: '24' }}>
      <Stack
        spacing="16"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'start', md: 'center' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} width="full">
          <Stack spacing={{ base: '4', md: '6' }}>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'lg' })}>
              Subsribe to our newsletter
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
              We will write you when we have new components released so you can try them first.
            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            width="full"
            maxW={{ md: 'lg' }}
            spacing="4"
          >
            <FormControl flex="1">
              <Input type="email" size="lg" placeholder="Enter your email" />
              <FormHelperText color="subtle">Read abotu your privacy policy</FormHelperText>
            </FormControl>
            <Button variant="primary" size="lg">
              Subscribe
            </Button>
          </Stack>
        </Stack>
        <Box width="full" height={{ base: 'sm', md: 'md' }}>
          <Image
            boxSize="full"
            alt="Subscribe to newsletter image"
            src="https://tinyurl.com/2p8nmy9p"
            objectFit="cover"
          />
        </Box>
      </Stack>
    </Container>
  </Box>
)
  }