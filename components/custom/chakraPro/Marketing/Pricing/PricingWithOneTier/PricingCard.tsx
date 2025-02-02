import {
  Box, 
  BoxProps,
  Button,
  Circle,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiCheck } from 'react-icons/fi'
import { product } from './data'

export const PricingCard = (props: BoxProps) => {
  return (
    <Box
      bg="bg-surface"
      borderRadius="2xl"
      boxShadow={mode('lg', 'lg-dark')}
      maxW={{ lg: '576px' }}
      py={{ base: '6', lg: '8' }}
      {...props}
    >
      <Stack spacing="8" divider={<StackDivider />}>
        <Stack
          spacing={{ base: '4', lg: '8' }}
          direction={{ base: 'column-reverse', lg: 'row' }}
          justify="space-between"
          align={{ base: 'start', lg: 'center' }}
          px={{ base: '6', md: '8' }}
        >
          <Stack spacing="1">
            <Heading size="xs">{product.name}</Heading>
            <Text color="muted">{product.description}</Text>
          </Stack>
          <Stack direction="row" spacing="0.5">
            <Heading size="md" pt={{ base: '1.5', lg: '2' }}>
              $
            </Heading>
            <Heading size={useBreakpointValue({ base: 'lg', lg: 'xl' })}>{product.price}</Heading>
          </Stack>
        </Stack>

        <Stack spacing="6" px={{ base: '6', md: '8' }}>
          <Stack spacing="1">
            <Text fontWeight="semibold">What's included</Text>
            <Text color="muted">All you need to build your next app</Text>
          </Stack>
          <SimpleGrid as="ul" columns={{ base: 1, lg: 2 }} columnGap="8" rowGap="4" pb="2">
            {product.features.map((feature) => (
              <HStack key={feature} as="li" spacing="3">
                <Circle size="6" bg={mode('pink.50', 'whiteAlpha.50')}>
                  <Icon as={FiCheck} color="accent" />
                </Circle>
                <Text color="muted">{feature}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Stack>

        <Box px={{ base: '6', md: '8' }} pb="2">
          <Button variant="primary" size="lg" width="full">
            Buy now
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}
