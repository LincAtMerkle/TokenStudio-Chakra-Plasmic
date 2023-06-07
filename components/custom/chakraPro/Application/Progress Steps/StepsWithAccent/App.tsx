import { Box, BoxProps, Container, ContainerProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { steps } from './data'
import { Step } from './Step'
import { useStep } from './useStep'
import { ReactNode } from 'react';

export type AppProps = BoxProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
    const [currentStep, { setStep }] = useStep({ maxStep: steps.length })
    return (
    <Box 
    className={className}
    bg="bg-surface">
      <Container py={{ base: '8', md: '16' }}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing="4">
          {steps.map((step, id) => (
            <Step
              key={id}
              cursor="pointer"
              onClick={() => setStep(id)}
              title={step.title}
              description={step.description}
              isActive={currentStep === id}
              isCompleted={currentStep > id}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
