import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'

export const App = () => (
  <Box as="section" bg="bg-surface" py={{ base: '16', md: '24' }}>
    <Container>
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack spacing={{ base: '4', md: '6' }}>
          <Stack spacing="3">
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="accent">
              Pricing
            </Text>
            <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })} fontWeight="semibold">
              Get lifetime access
            </Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
            Get early access to 210+ components and free updates.
          </Text>
        </Stack>
        <Stack direction={{ base: 'column-reverse', md: 'row' }}>
          <Button variant="secondary" size="lg">
            Learn more
          </Button>
          <Button variant="primary" size="lg">
            Buy now
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
