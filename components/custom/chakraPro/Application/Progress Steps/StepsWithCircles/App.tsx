import { Box, BoxProps, Container, HStack } from '@chakra-ui/react'
import * as React from 'react'
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
    const numberOfSteps = 5
    const [currentStep, { setStep }] = useStep({ maxStep: numberOfSteps, initialStep: 2 })
      return (
    <Box 
    className={className}
    bg="bg-surface">
      <Container display="flex" justifyContent="center" alignItems="center" minH="40">
        <HStack spacing="0" justify="space-evenly" flex="1">
          {[...Array(numberOfSteps)].map((_, id) => (
            <Step
              key={id}
              cursor="pointer"
              onClick={() => setStep(id)}
              isActive={currentStep === id}
              isCompleted={currentStep > id}
              isLastStep={numberOfSteps === id + 1}
            />
          ))}
        </HStack>
      </Container>
    </Box>
  )
}
