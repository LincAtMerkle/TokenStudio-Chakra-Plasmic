import { Box, Button, Container, Divider, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { FiPlus } from 'react-icons/fi'

export const App = () => (
  <Box bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <HStack>
        <Divider />
        <Button flexShrink={0} variant="secondary" leftIcon={<FiPlus fontSize="1.25rem" />}>
          Create
        </Button>
        <Divider />
      </HStack>
    </Container>
  </Box>
)
