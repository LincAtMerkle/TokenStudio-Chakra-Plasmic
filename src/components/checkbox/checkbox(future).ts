import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const baseStyle = (props: StyleFunctionProps) => ({
  label: {
    color: 'muted',
    font-weight: 'medium',
  },
  control: {
    bg: mode('white', 'gray.800')(props),
    border-radius: 'base',
  },
})

const sizes = {
  md: {
    label: {
      font-size: 'sm',
    },
  },
  xxl:{
    label: {
      font-size: 'xl',
    },
  }
}


  primary: (props: StyleFunctionProps) =>
    props.theme.components['Checkbox']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'brand',
    }),
  'primary-on-accent': () => ({
    bg: 'brand.50',
    color: 'brand.600',
   &:hover: { bg: 'brand.100' },
   &:active: { bg: 'brand.100' },
  }),
}

const defaultProps = {
  colorScheme: 'brand',
}

export default {
    sizes,
    defaultProps,
}
