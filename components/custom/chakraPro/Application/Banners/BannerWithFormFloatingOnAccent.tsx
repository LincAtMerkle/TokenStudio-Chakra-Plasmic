import {
  Box, 
  BoxProps,
  Button,
  CloseButton,
  Container,
  ContainerProps,
  Icon,
  Input,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMail } from 'react-icons/fi'
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
    className={className}  as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
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
          spacing={{ base: '3', md: '8' }}
        >
          <Stack
            spacing="4"
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'start', md: 'center' }}
          >
            {!isMobile && (
              <Square size="12" bg="bg-accent-subtle" borderRadius="md">
                <Icon as={FiMail} boxSize="6" />
              </Square>
            )}
            <Stack spacing="0.5" pe={{ base: '4', sm: '0' }}>
              <Text fontWeight="medium">Subscribe to our newsletter</Text>
              <Text color="on-accent-muted">
                This way you&apos;ll be the first to know when we launch.
              </Text>
            </Stack>
          </Stack>
          <Stack
            as="form"
            onSubmit={(e) => e.preventDefault()}
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: '3', md: '2' }}
            align={{ base: 'stretch', md: 'center' }}
          >
            <Input
              placeholder="Enter your email"
              type="email"
              isRequired
              variant="outline-on-accent"
            />
            <Button variant="primary-on-accent" type="submit" flexShrink={0}>
              Subscribe
            </Button>
            <CloseButton display={{ base: 'none', md: 'inline-flex' }} />
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}
