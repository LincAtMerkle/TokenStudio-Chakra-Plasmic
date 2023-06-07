import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'
import { Placeholder } from './Placeholder'

export const Main = () => {
  return (
    <Box as="main" role="main" width="full" bg="bg-accent">
      <Placeholder minH="lg">Main</Placeholder>
    </Box>
  )
}
