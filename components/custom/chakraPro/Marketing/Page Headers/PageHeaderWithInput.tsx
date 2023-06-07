import {
  Box, 
  BoxProps,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { ReactNode } from "react";

export type AppProps = BoxProps & {
  children: ReactNode;
};

export function App({ className, children, ...rest }: AppProps) {
  return (
    <Box className={className} as="section" bg="bg-surface" py={{ base: '16', md: '24' }}>
    <Container>
      <Stack spacing={{ base: '8', md: '10' }} align="center">
        <Stack spacing={{ base: '4', md: '6' }} textAlign="center">
          <Stack spacing="3">
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="accent">
              Support
            </Text>
            <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })} fontWeight="semibold">
              Welcome to Help Center
            </Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
            How can we help you?
          </Text>
        </Stack>
        <InputGroup size="lg" maxW={{ md: 'sm' }}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} boxSize="5" color="muted" />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
      </Stack>
    </Container>
  </Box>
)
}