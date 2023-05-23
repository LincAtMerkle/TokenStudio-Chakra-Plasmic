import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'

interface Props extends BoxProps {
  isActive: boolean
}

export const Step = (props: Props) => {
  const { isActive, ...boxProps } = props
  return (
    <Box
      boxSize="2.5"
      bg={isActive ? 'accent' : 'border'}
      borderRadius="full"
      transition="background 0.2s"
      {...boxProps}
    />
  )
}
