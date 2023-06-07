import {
  Box, 
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
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
    className={className}bg="bg-accent" color="on-acccent">
    <Container as="footer" role="contentinfo">
      <Stack
        justify="space-between"
        align="start"
        direction={{ base: 'column', lg: 'row' }}
        py={{ base: '12', md: '16' }}
        spacing="8"
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Logo />
          <Text color="on-accent-muted">Create beautiful websites remarkably fast.</Text>
        </Stack>
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
      </Stack>
      <Divider borderColor="bg-accent-subtle" />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost-on-accent">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
)
                }