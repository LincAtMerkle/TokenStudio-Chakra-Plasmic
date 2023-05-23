import { Box, Container, Divider, HStack, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FiPlus } from 'react-icons/fi'

export const App = () => (
  <Box bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <HStack>
        <Divider />
        <IconButton
          flexShrink={0}
          variant="ghost"
          icon={<FiPlus fontSize="1.25rem" />}
          aria-label="Add"
        />
        <Divider />
      </HStack>
    </Container>
  </Box>
)
