import { Box, ButtonGroup, Container, Divider, HStack, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi'

export const App = () => (
  <Box bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <HStack>
        <Divider />
        <ButtonGroup isAttached variant="secondary">
          <IconButton
            value="left"
            aria-label="Show previous"
            icon={<FiArrowLeft fontSize="1.25rem" />}
          />
          <IconButton
            value="center"
            aria-label="Add"
            icon={<FiPlus fontSize="1.25rem" />}
            mx="-px"
          />
          <IconButton
            value="right"
            aria-label="Show next"
            icon={<FiArrowRight fontSize="1.25rem" />}
          />
        </ButtonGroup>
        <Divider />
      </HStack>
    </Container>
  </Box>
)
