import { Avatar, Box, BoxProps, Center, Flex, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { Rating } from './Rating'
import { SignUpForm } from './SignUpForm'
import { ReactNode } from 'react';

export type AppProps = BoxProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
  return (
    <Box 
    className={className} py={{ base: '12', md: '24' }} maxW="7xl" mx="auto">
    <Stack direction="row" spacing="12">
      <Flex flex="1">
        <SignUpForm />
      </Flex>
      <Center flex="1" px={{ lg: '8' }} display={{ base: 'none', lg: 'flex' }}>
        <VStack spacing="8">
          <Stack direction="row" spacing="3">
            <Icon as={ImQuotesLeft} boxSize="8" mt="-4" />
            <Heading size="sm" fontWeight="medium" textAlign="center">
              What can I say - I fell in love with Chakra UI Pro.
            </Heading>
            <Icon as={ImQuotesRight} boxSize="8" alignSelf="end" />
          </Stack>
          <VStack spacing="4">
            <Avatar
              size="lg"
              src="https://avatars.githubusercontent.com/u/20296626?v=4"
              name="Simon Holzmayer"
            />
            <Stack textAlign="center" spacing="1">
              <Text fontSize="md" fontWeight="medium" color="muted">
                Simon Holzmayer
              </Text>
              <Text fontWeight="medium" fontSize="sm" color="muted">
                simon@chakra-ui.com
              </Text>
            </Stack>
            <Rating defaultValue={5} />
          </VStack>
        </VStack>
      </Center>
    </Stack>
  </Box>
)
  }