import {
  Box, 
  BoxProps,
  Button,
  CloseButton,
  Container,
  Icon,
  Input,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMail } from 'react-icons/fi'
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
    className={className}  as="section" pb={{ base: '12', md: '24' }}>
      <Box bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', md: '2.5' }} position="relative">
          <CloseButton display={{ md: 'none' }} position="absolute" right="2" top="2" />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            spacing={{ base: '3', md: '8' }}
          >
            <Stack
              spacing="4"
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'start', md: 'center' }}
            >
              {!isMobile && (
                <Square size="12" bg="bg-subtle" borderRadius="md">
                  <Icon as={FiMail} boxSize="6" />
                </Square>
              )}
              <Stack spacing="0.5" pe={{ base: '4', sm: '0' }}>
                <Text fontWeight="medium">Subscribe to our newsletter</Text>
                <Text color="muted">This way you&apos;ll be the first to know when we launch.</Text>
              </Stack>
            </Stack>
            <Stack
              as="form"
              onSubmit={(e) => e.preventDefault()}
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: '3', md: '2' }}
              align={{ base: 'stretch', md: 'center' }}
            >
              <Input placeholder="Enter your email" type="email" isRequired />
              <Button variant="primary" flexShrink={0} type="submit">
                Subscribe
              </Button>
              <CloseButton display={{ base: 'none', md: 'inline-flex' }} />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
