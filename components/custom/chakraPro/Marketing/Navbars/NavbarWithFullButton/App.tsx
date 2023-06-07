import {
  Box, 
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
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
      <Box 
      className={className}
      as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" py={{ base: '4', lg: '5' }}>
        <Container>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <HStack spacing="10">
                <ButtonGroup variant="link" spacing="8">
                  {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <Box>
                  <Button variant="primary" py="10" px="6" my="-5" borderRadius="0">
                    Get Started
                  </Button>
                </Box>
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>
  )
}
