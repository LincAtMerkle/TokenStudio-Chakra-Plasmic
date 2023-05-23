import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiBriefcase, FiDollarSign, FiMapPin } from 'react-icons/fi'

export const App = () => (
  <Box as="section" bg="bg-surface" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Container>
      <Stack spacing="4" direction={{ base: 'column', md: 'row' }} justify="space-between">
        <Stack spacing="1">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })} fontWeight="medium">
            Christoph Winston
          </Heading>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: '2', sm: '6' }}
            color="muted"
          >
            <HStack>
              <Icon as={FiBriefcase} boxSize={{ base: '4', sm: '5' }} />
              <Text>Software Engineer</Text>
            </HStack>
            <HStack>
              <Icon as={FiMapPin} boxSize={{ base: '4', sm: '5' }} />
              <Text>Berlin, Germany</Text>
            </HStack>
            <HStack>
              <Icon as={FiDollarSign} boxSize={{ base: '4', sm: '5' }} />
              <Text>80.000 - 90.000</Text>
            </HStack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing="3">
          <Button variant="secondary">Share</Button>
          <Button variant="primary">Contact</Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
