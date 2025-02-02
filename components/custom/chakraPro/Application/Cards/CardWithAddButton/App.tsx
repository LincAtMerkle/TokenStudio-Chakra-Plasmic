import {
  Box, 
  BoxProps,
  Button,
  Container,
  IconButton,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { experiences } from './data'
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
    className={className} as="section" py={{ base: '4', md: '8' }}>
    <Container maxW="3xl">
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        p={{ base: '4', md: '6' }}
      >
        <Stack spacing="5" divider={<StackDivider />}>
          <Stack justify="space-between" direction={{ base: 'column', sm: 'row' }} spacing="5">
            <Stack spacing="1">
              <Text fontSize="lg" fontWeight="medium">
                Experiences
              </Text>
              <Text fontSize="sm" color="muted">
                Write in a few short sentences where you have already worked.
              </Text>
            </Stack>
            <Button variant="primary">Add</Button>
          </Stack>
          {experiences.map((experience, id) => (
            <Stack key={id} justify="space-between" direction="row" spacing="4">
              <Stack spacing="0.5" fontSize="sm">
                <Text color="emphasized" fontWeight="medium">
                  {experience.title}
                </Text>
                <Text color="muted">{experience.description}</Text>
              </Stack>

              <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '0', sm: '1' }}>
                <IconButton
                  icon={<FiEdit2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Edit experience"
                />
                <IconButton
                  icon={<FiTrash2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Delete experience"
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
)
}