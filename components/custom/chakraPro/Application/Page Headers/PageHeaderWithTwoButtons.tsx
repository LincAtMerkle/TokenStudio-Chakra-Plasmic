import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Box as="section" bg="bg-surface" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Container>
      <Stack spacing="4" direction={{ base: 'column', md: 'row' }} justify="space-between">
        <Stack spacing="1">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })} fontWeight="medium">
            Member overview
          </Heading>
          <Text color="muted">All registered users in the overview</Text>
        </Stack>
        <Stack direction="row" spacing="3">
          <Button variant="secondary">Invite</Button>
          <Button variant="primary">Create</Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
