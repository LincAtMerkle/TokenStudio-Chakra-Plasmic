import { Box, BoxProps, Container, ContainerProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { RadioButton, RadioButtonGroup } from './RadioButtonGroup'
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
    className={className} as="section" bg="bg-surface" py={{ base: '4', md: '8' }}>
    <Container maxW="lg">
      <Stack spacing="5">
        {['md', 'lg'].map((size) => (
          <RadioButtonGroup key={size} defaultValue="left" size={size}>
            <RadioButton value="left">Left</RadioButton>
            <RadioButton value="center">Center</RadioButton>
            <RadioButton value="right">Right</RadioButton>
          </RadioButtonGroup>
        ))}
      </Stack>
    </Container>
  </Box>
)
}