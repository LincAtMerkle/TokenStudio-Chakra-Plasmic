import { Box, BoxProps, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode } from "react";

export type AppProps = BoxProps & {
  children: ReactNode;
};

export function App({ className, children, ...rest }: AppProps) {
  return (
    <Box className={className} as="section" bg="bg-accent" color="on-accent" py={{ base: '16', md: '24' }}>
    <Container>
      <Stack spacing={{ base: '4', md: '6' }} align="center" textAlign="center">
        <Stack spacing="3">
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="pink.50">
            Pricing
          </Text>
          <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })} fontWeight="semibold">
            Get lifetime access
          </Heading>
        </Stack>
        <Text color="on-accent-muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
          Get early access to 210+ components and free updates.
        </Text>
      </Stack>
    </Container>
  </Box>
)
}