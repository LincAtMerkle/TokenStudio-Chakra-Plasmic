import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack
      spacing={{ base: '8', md: '8' }}
      direction={{ base: 'column', lg: 'row' }}
      justify="space-between"
    >
      <Stack spacing={{ base: '4', md: '5' }} flexShrink={0}>
        <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
          Sign up for our newsletter
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
          Be the first to know when we release new components
        </Text>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} spacing="4" width="full" maxW={{ md: 'lg' }}>
        <FormControl flex="1">
          <Input type="email" size="lg" placeholder="Enter your email" />
          <FormHelperText color="subtle">We send you at most one mail per month</FormHelperText>
        </FormControl>
        <Button variant="primary" size="lg">
          Subscribe
        </Button>
      </Stack>
    </Stack>
  </Container>
)
