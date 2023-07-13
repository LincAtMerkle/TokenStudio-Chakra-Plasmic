import { defineCssVars, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const vars = defineCssVars('close-button', ['bg', 'color', 'size'])

const baseStyle = defineStyle({
  border-radius: 'lg',
  w: [vars.size.reference],
  h: [vars.size.reference],
  bg: vars.bg.reference,
  color: vars.color.reference,
  [vars.color.variable]: `colors.gray.600`,
  .chakra-ui-dark &: {
    [vars.color.variable]: `colors.gray.300`,
  },
 &:hover: {
    [vars.bg.variable]: `colors.gray.50`,
    [vars.color.variable]: `colors.gray.800`,
    .chakra-ui-dark &: {
      [vars.bg.variable]: `colors.gray.800`,
      [vars.color.variable]: `colors.white`,
    },
  },
 &:active: {
    [vars.bg.variable]: `colors.gray.50`,
    [vars.color.variable]: `colors.gray.900`,
    .chakra-ui-dark &: {
      [vars.bg.variable]: `colors.gray.800`,
      [vars.color.variable]: `colors.white`,
    },
  },
 &:focus-visible {
    box-shadow: 'focus',
  },
})

const sizes = {
  '2xs': defineStyle({
    [vars.size.variable]: 'sizes.6',
    font-size: 'xs',
  }),
  xs: defineStyle({
    [vars.size.variable]: 'sizes.8',
    font-size: 'sm',
  }),
  sm: defineStyle({
    [vars.size.variable]: 'sizes.9',
    font-size: 'md',
  }),
  md: defineStyle({
    [vars.size.variable]: 'sizes.10',
    font-size: 'md',
  }),
  lg: defineStyle({
    [vars.size.variable]: 'sizes.11',
    font-size: 'md',
  }),
  xl: defineStyle({
    [vars.size.variable]: 'sizes.12',
    font-size: 'lg',
  }),
  '2xl': defineStyle({
    [vars.size.variable]: 'sizes.15',
    font-size: 'xl',
  }),
}

export default defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
