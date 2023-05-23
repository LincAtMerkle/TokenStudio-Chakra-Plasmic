import { Circle, SquareProps, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const CartCount = (props: SquareProps) => (
  <Circle
    fontSize="xs"
    fontWeight="semibold"
    centerContent
    position="absolute"
    top="-2"
    right="-4"
    bg={mode('pink.500', 'pink.300')}
    color={mode('white', 'gray.800')}
    width="5"
    height="5"
    {...props}
  />
)
