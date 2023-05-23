import { Box, CloseButton, Container, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Box as="section" pb={{ base: '12', md: '24' }}>
    <Box bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} position="relative">
      <Container py={{ base: '4', md: '3.5' }}>
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
        <CloseButton position="absolute" right="2" top="2.5" />
      </Container>
    </Box>
  </Box>
)
