import { Box, CloseButton, Container, Link, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Container as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Box
      bg="bg-accent"
      color="on-accent"
      p={{ base: '4', md: '3' }}
      py={{ base: '3', md: '5' }}
      position="relative"
      borderRadius="xl"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        spacing={{ base: '0.5', md: '1.5' }}
        pe={{ base: '4', sm: '0' }}
      >
        <Text fontWeight="medium">This site is using third-party cookies.</Text>
        <Text color="on-accent-muted">
          Read our <Link>Cookie Policy</Link>
        </Text>
      </Stack>
      <CloseButton position="absolute" right="2" top={{ base: '2', md: '4' }} />
    </Box>
  </Container>
)
