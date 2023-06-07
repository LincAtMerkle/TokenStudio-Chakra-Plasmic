import {
  Box, 
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'
import { links } from './_data'
import { ReactNode } from 'react';

export type AppProps = BoxProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
  return (
    <Box 
    className={className} bg="bg-accent" color="on-accent">
    <Container as="footer" role="contentinfo">
      <Stack
        spacing={{ base: '12', md: '8' }}
        direction={{ base: 'column-reverse', lg: 'row' }}
        py={{ base: '12', md: '16' }}
        justify="space-between"
      >
        <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" width={{ base: 'full', lg: 'auto' }}>
          {links.map((group, idx) => (
            <Stack key={idx} spacing="4" minW={{ lg: '40' }}>
              <Text fontSize="sm" fontWeight="semibold" color="on-accent-subtle">
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Button key={idx} as="a" variant="link-on-accent" href={link.href}>
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="on-accent-subtle">
            Stay up to date
          </Text>
          <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
            <Input
              placeholder="Enter your email"
              variant="outline-on-accent"
              type="email"
              required
            />
            <Button variant="primary-on-accent" type="submit" flexShrink={0}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider borderColor="bg-accent-subtle" />
      <Stack
        pb="12"
        pt="8"
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'start', md: 'center' }}
      >
        <HStack
          justify={{ base: 'space-between', sm: 'start' }}
          width={{ base: 'full', sm: 'auto' }}
          spacing="8"
        >
          <Logo />
          <ButtonGroup variant="ghost-on-accent">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </HStack>
        <Text fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
)
                }