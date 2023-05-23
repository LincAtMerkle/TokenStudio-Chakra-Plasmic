import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import * as React from 'react'
import { RiSearchLine } from 'react-icons/ri'

export const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Icon as={RiSearchLine} color="gray.500" fontSize="lg" />
      </InputLeftElement>
      <Input
        focusBorderColor="pink.500"
        width="full"
        fontSize="sm"
        variant="filled"
        type="text"
        placeholder="What are you looking for?"
        autoComplete="off"
      />
    </InputGroup>
  )
}
