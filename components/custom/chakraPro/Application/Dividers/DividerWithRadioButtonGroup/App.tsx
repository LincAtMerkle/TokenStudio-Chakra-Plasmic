import { Box, BoxProps, Container, Divider, HStack } from '@chakra-ui/react'
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
    <Box 
    className={className} bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <HStack>
        <Divider />
        <RadioButtonGroup defaultValue="left">
          <RadioButton value="left">Show all</RadioButton>
          <RadioButton value="center">Active</RadioButton>
          <RadioButton value="right">Inactive</RadioButton>
        </RadioButtonGroup>
        <Divider />
      </HStack>
    </Container>
  </Box>
)
}