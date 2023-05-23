import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'

interface Props extends BoxProps {
  isActive: boolean
}

export const Step = (props: Props) => {
  const { isActive, ...boxProps } = props
  return (
    <Box
      flex="1"
      h="2"
      bg={isActive ? 'accent' : 'border'}
      borderRadius="base"
      transition="background 0.2s"
      {...boxProps}
    />
  )
}
