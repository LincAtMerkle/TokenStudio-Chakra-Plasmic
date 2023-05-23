import {
  Flex,
  FormLabel,
  Select,
  SelectProps,
  useColorModeValue as mode,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const QuantitySelect = (props: SelectProps) => {
  return (
    <Flex align="center">
      <FormLabel
        fontSize={{ base: 'sm', md: 'md' }}
        htmlFor={props.id}
        mb="0"
        color={mode('gray.600', 'gray.400')}
      >
        Qty
      </FormLabel>
      <Select
        size="sm"
        rounded="md"
        aria-label="Select quantity"
        focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
        {...props}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
    </Flex>
  )
}
