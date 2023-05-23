import { Box, Container, Divider, HStack, Text } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Box bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <HStack>
        <Divider />
        <Text fontSize="lg" fontWeight="medium" whiteSpace="nowrap">
          Members
        </Text>
        <Divider />
      </HStack>
    </Container>
  </Box>
)
