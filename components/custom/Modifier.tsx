import { ReactNode } from 'react';
import * as React from 'react'
import {
  BoxProps,
} from '@chakra-ui/react'
import { ModifierProvider } from '../../src/components/tokensCtx';

export type ModifierProps = BoxProps & {
  type?: string
  color?: string
  children: ReactNode
}

const [color, setColor] = React.useState('blue');
const [type, setType] = React.useState('casual');

export function Modifier({
  className,
  children,
  ...rest
  }: ModifierProps) {
  return (
    <div className={className}>
    <ModifierProvider modifiers={{ color: 'blue' }}>
        {children}
      </ModifierProvider>
      </div>
  )
}