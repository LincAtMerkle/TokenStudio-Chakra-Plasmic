import {
  Box,
  Button,
  chakra,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export const App = () => (
  <Box as="section" bg="bg-surface" py={{ base: '16', md: '24' }}>
    <Container>
      <Stack spacing={{ base: '8', md: '10' }} align="center">
        <Stack spacing={{ base: '4', md: '6' }} textAlign="center">
          <Stack spacing="3">
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="accent">
              Blog
            </Text>
            <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })} fontWeight="semibold">
              Latest Updates
            </Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
            Subscribe to our newsletter and never miss any news.
          </Text>
        </Stack>
        <chakra.form width={{ base: 'full', md: 'md' }}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing="4" shouldWrapChildren>
            <FormControl>
              <Input size="lg" placeholder="Enter your email" type="email" required />
              <FormHelperText color="muted" noOfLines={1}>
                For more information, please read our Privacy Policy.
              </FormHelperText>
            </FormControl>
            <Button variant="primary" size="lg" width="full">
              Subscribe
            </Button>
          </Stack>
        </chakra.form>
      </Stack>
    </Container>
  </Box>
)
