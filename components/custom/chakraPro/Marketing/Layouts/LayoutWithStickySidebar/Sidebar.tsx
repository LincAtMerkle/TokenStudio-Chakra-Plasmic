import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'
import { Placeholder } from './Placeholder'

export const Sidebar = () => {
  return (
    <Box
      as="aside"
      role="complementary"
      bg="bg-accent"
      width={{ base: 'full', lg: 'xl' }}
      alignSelf="start"
      position={{ base: 'unset', lg: 'sticky' }}
      top="36"
    >
      <Placeholder minH="xs">Sidebar</Placeholder>
    </Box>
  )
}
