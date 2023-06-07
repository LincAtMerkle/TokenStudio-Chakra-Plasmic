import {
  Box, 
  BoxProps,
  Button,
  Center,
  Flex,
  Icon,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiInfo } from 'react-icons/fi'
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
    <Box className={className}
    as="section"
    pt={{ base: '4', md: '8' }}
    pb={{ base: '12', md: '24' }}
    px={{ base: '4', md: '8' }}
  >
    <Flex direction="row-reverse">
      <Flex
        width={{ base: 'full', sm: 'md' }}
        boxShadow={useColorModeValue('md', 'md-dark')}
        bg="bg-surface"
        borderRadius="lg"
        overflow="hidden"
      >
        <Center display={{ base: 'none', sm: 'flex' }} bg="bg-accent" px="5">
          <Icon as={FiInfo} boxSize="10" color="on-accent" />
        </Center>
        <Stack direction="row" divider={<StackDivider />} spacing="0">
          <Box p="4">
            <Stack spacing="1">
              <Text fontSize="sm" fontWeight="medium">
                Updates Available
              </Text>
              <Text fontSize="sm" color="muted">
                A new version is available. Please upgrade for the best experience.
              </Text>
            </Stack>
          </Box>
          <Stack justify="space-evenly" minW="24" divider={<StackDivider />} spacing="0">
            <Button variant="link" size="sm" colorScheme="pink">
              Update
            </Button>
            <Button variant="link" size="sm">
              Close
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  </Box>
)
}