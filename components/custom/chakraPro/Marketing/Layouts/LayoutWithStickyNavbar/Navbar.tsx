import { Box, BoxProps, Container } from '@chakra-ui/react'
import * as React from 'react'
import { Placeholder } from './Placeholder'
import { useNavbar } from './useNavbar'

export const Navbar = () => {
  const { rootProps } = useNavbar()

  return (
    <Box
      as="nav"
      role="navigation"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="bg-accent"
      {...rootProps}
    >
      <Container>
        <Placeholder minH="20">Navigation</Placeholder>
      </Container>
    </Box>
  )
}
