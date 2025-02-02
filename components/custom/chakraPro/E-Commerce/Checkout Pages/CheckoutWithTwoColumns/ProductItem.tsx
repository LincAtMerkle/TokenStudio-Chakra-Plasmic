import { AspectRatio, Flex, Image, Select, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Product } from './_data'

interface Props {
  product: Product
}

export const ProductItem = (props: Props) => {
  const { product } = props
  return (
    <Flex justify="space-between" key={product.id}>
      <Stack direction="row" spacing="5">
        <AspectRatio ratio={1} width="92px">
          <Image src={product.imageUrl} alt={product.name} borderRadius="md" />
        </AspectRatio>
        <Stack spacing="3">
          <Stack spacing="1">
            <Text fontWeight="semibold">{product.name}</Text>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>Size: 20</Text>
          </Stack>
          <Select
            aria-label="Select quantity"
            maxW="16"
            size="sm"
            borderRadius="md"
            focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
            bg={useColorModeValue('white', 'gray.700')}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </Stack>
      </Stack>
      <Text fontWeight="medium">$199.00</Text>
    </Flex>
  )
}
