import {
  Avatar,
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo } from './Logo'
import { ReactNode } from 'react';

export type AppProps = BoxProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
    <Box className={className} as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container>
          <Flex justify="space-between" py={{ base: '3', lg: '4' }}>
            <HStack spacing="4">
              <Logo />
              {isDesktop && (
                <ButtonGroup variant="ghost" spacing="1">
                  <Button>Home</Button>
                  <Button aria-current="page">Dashboard</Button>
                  <Button>Tasks</Button>
                  <Button>Bookmarks</Button>
                  <Button>Users</Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup variant="ghost" spacing="1">
                  <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                  <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                  <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
                </ButtonGroup>
                <Avatar boxSize="10" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </Flex>
        </Container>
        {isDesktop && (
          <>
            <Divider />
            <Container py="3">
              <Flex justify="space-between">
                <ButtonGroup variant="ghost" spacing="1">
                  <Button aria-current="page">Overview</Button>
                  <Button>Analytics</Button>
                  <Button>Key Metrics</Button>
                  <Button>Risks</Button>
                  <Button>Alerts</Button>
                </ButtonGroup>

                <InputGroup maxW="xs">
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="muted" boxSize="5" />
                  </InputLeftElement>
                  <Input placeholder="Search" />
                </InputGroup>
              </Flex>
            </Container>
          </>
        )}
      </Box>
    </Box>
  )
}
