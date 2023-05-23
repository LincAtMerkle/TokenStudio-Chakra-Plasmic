import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { QuantityPicker } from './QuantityPicker'

export const App = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <QuantityPicker rootProps={{ maxW: '140px' }} defaultValue={1} max={5} />
    </Box>
  )
}
