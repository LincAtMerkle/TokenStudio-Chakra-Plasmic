import { Box, BoxProps, CloseButton, Container, ContainerProps, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
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
    className={className} as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Box
      bg="bg-surface"
      p={{ base: '4', md: '3' }}
      py={{ base: '3', md: '5' }}
      position="relative"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      borderRadius="xl"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        spacing={{ base: '0.5', md: '1.5' }}
        pe={{ base: '4', sm: '0' }}
      >
        <Text fontWeight="medium">This site is using third-party cookies.</Text>
        <Text color="muted">
          Read our <Link>Cookie Policy</Link>
        </Text>
      </Stack>
      <CloseButton position="absolute" right="2" top={{ base: '2', md: '4' }} />
    </Box>
  </Container>
)
    }