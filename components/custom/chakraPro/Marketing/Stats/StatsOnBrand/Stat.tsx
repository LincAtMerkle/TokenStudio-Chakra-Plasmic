import { Heading, Stack, StackProps, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

interface StatProps extends StackProps {
  label: string
  value: string
}

export const Stat = (props: StatProps) => {
  const { label, value, ...stackProps } = props
  return (
    <Stack spacing="3" textAlign="center" {...stackProps}>
      <Heading size={useBreakpointValue({ base: 'lg', md: 'xl' })}>{value}</Heading>
      <Text fontSize="lg" fontWeight="medium" color="pink.50">
        {label}
      </Text>
    </Stack>
  )
}
