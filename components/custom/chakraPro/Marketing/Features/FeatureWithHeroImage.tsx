import {
  Box, 
  BoxProps,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react';

export type AppProps = BoxProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
    const { colorMode } = useColorMode()
  return (
    <Box 
    className={className}
    as="section">
      <Box>
        <Container pt={{ base: '16', md: '24' }} pb={{ base: '28', md: '40' }}>
          <Stack spacing={{ base: '8', md: '10' }} align="center">
            <Stack spacing={{ base: '4', md: '5' }} textAlign="center">
              <Stack spacing="3">
                <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
                  Features
                </Text>
                <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
                  Create accessible React apps with speed
                </Heading>
              </Stack>
              <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" color="muted">
                Candy canes tiramisu bear claw carrot cake chupa chups. Jujubes marzipan lemon drops
                gummi bears tiramisu pastry liquorice.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bg="bg-surface">
        <Container>
          <Box
            transform={{ base: 'translateY(-64px)', md: 'translateY(-96px)' }}
            borderRadius="xl"
            overflow="hidden"
            boxShadow={useColorModeValue('xl', 'xl-dark')}
          >
            <picture>
              <source
                srcSet={`/screenshots/showcase/accent/480-${colorMode}.png`}
                media="(max-width: 40em)"
              />
              <source
                srcSet={`/screenshots/showcase/accent/768-${colorMode}.png`}
                media="(max-width: 62em)"
              />
              <Image
                alt="Feature Hero Image"
                src={`/screenshots/showcase/accent/1440-${colorMode}.png`}
                objectFit="cover"
              />
            </picture>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
