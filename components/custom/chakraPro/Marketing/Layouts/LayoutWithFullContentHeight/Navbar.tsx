import { Box, Container } from '@chakra-ui/react'
import * as React from 'react'
import { Placeholder } from './Placeholder'

export const Navbar = () => {
  return (
    <Box as="nav" role="navigation" bg="bg-accent">
      <Container>
        <Placeholder minH="20">Navigation</Placeholder>
      </Container>
    </Box>
  )
}
