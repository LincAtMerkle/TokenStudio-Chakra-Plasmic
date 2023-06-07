import { Box, BoxProps, Container, Divider, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import {
  RadioButton,
  RadioButtonGroup,
} from './RadioButtonGroup'
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
    <Box className={className} as="section" bg="bg-surface" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Container>
      <Stack spacing="5">
        <Stack spacing="4" direction={{ base: 'column', md: 'row' }} justify="space-between">
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Member overview
            </Text>
            <Text color="muted" fontSize="sm">
              All registered users in the overview
            </Text>
          </Box>
          <RadioButtonGroup defaultValue="admins">
            <RadioButton value="admins">Admins</RadioButton>
            <RadioButton value="moderators">Moderators</RadioButton>
            <RadioButton value="users">Users</RadioButton>
          </RadioButtonGroup>
        </Stack>
        <Divider />
      </Stack>
    </Container>
  </Box>
)
}