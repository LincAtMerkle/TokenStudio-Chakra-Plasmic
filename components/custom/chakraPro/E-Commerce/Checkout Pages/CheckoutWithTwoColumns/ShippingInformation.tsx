import {
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const ShippingInformation = () => (
  <Stack spacing={{ base: '6', md: '10' }}>
    <Heading size="md">Shipping Information</Heading>
    <Stack spacing={{ base: '6', md: '8' }}>
      <FormControl id="name">
        <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Full name</FormLabel>
        <Input
          name="name"
          placeholder="Your first and last name"
          focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
        />
      </FormControl>
      <FormControl id="street">
        <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Street address</FormLabel>
        <Input
          name="name"
          placeholder="123 Example Street"
          focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
        />
      </FormControl>
      <HStack spacing="6">
        <FormControl id="zip" maxW="32">
          <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Zip Code</FormLabel>
          <Input
            name="zip"
            placeholder="Zip Code"
            focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
          />
        </FormControl>
        <FormControl id="city">
          <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>City</FormLabel>
          <Input
            name="city"
            placeholder="City"
            focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
          />
        </FormControl>
      </HStack>
      <FormControl id="email">
        <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Email address</FormLabel>
        <Input
          name="email"
          placeholder="you@exmaple.com"
          focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
        />
      </FormControl>
      <Checkbox defaultChecked spacing="4" colorScheme="pink">
        Billing address is same as shipping
      </Checkbox>
    </Stack>
  </Stack>
)
