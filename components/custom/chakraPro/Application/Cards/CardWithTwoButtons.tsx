import { Box, Button, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Box as="section" py={{ base: '4', md: '8' }}>
    <Container maxW="3xl">
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        p={{ base: '4', md: '6' }}
      >
        <Stack spacing="5">
          <Stack spacing="1">
            <Text fontSize="lg" fontWeight="medium">
              Updates Available
            </Text>
            <Text fontSize="sm" color="muted">
              A new version is available. Please upgrade for the best experience.
            </Text>
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
            <Button variant="secondary">Skip</Button>
            <Button variant="primary">Download</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
)
