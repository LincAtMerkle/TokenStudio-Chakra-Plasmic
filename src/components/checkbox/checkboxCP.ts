import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineCssVars } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
)

const vars = defineCssVars('checkbox', ['bg'])

const baseStyle = definePartsStyle((props) => {
  const { colorScheme } = props
  return {
    label: {
      color: 'fg.emphasized',
      font-weight: 'medium',
    },
    control: {
      border-width: '1px',
      border-color: 'border.emphasized',
      bg: vars.bg.reference,
      &[data-checked]: {
        [vars.bg.variable]: `colors.${colorScheme}.500`,
        color: 'white',
       &:hover: {
          [vars.bg.variable]: `colors.${colorScheme}.600`,
        },
        .chakra-ui-dark &: {
          [vars.bg.variable]: `colors.${colorScheme}.200`,
          color: 'gray.800',
         &:hover: {
            [vars.bg.variable]: `colors.${colorScheme}.300`,
          },
        },
      },
      &:indeterminate: {
        [vars.bg.variable]: `colors.${colorScheme}.500`,
        .chakra-ui-dark &: {
          [vars.bg.variable]: `colors.${colorScheme}.200`,
        },
      },
    },
  }
})

const sizes = {
  sm: definePartsStyle({
    label: { font-size: 'xs', line-height: '1.125rem' },
    control: { border-radius: 'sm' },
    icon: { font-size: '3xs' },
  }),
  md: definePartsStyle({
    label: { font-size: 'sm', line-height: '1.25rem' },
    control: { border-radius: 'base' },
    icon: { font-size: '2xs' },
  }),
  lg: definePartsStyle({
    label: { font-size: 'md' },
    control: { border-radius: 'md', line-height: '1.5rem' },
    icon: { font-size: 'xs' },
  }),
}

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    colorScheme: 'brand',
  },
})
