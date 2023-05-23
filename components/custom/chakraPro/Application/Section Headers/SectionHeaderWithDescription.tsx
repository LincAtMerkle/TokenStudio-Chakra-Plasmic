import { Box, Container, Divider, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Box as="section" bg="bg-surface" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Container>
      <Stack spacing="5">
        <Box>
          <Text fontSize="lg" fontWeight="medium">
            Member overview
          </Text>
          <Text color="muted" fontSize="sm">
            All registered users in the overview
          </Text>
        </Box>
        <Divider />
      </Stack>
    </Container>
  </Box>
)
