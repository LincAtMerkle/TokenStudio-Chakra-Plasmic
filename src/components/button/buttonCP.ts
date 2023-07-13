import { defineCssVars, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { transparentize } from '@chakra-ui/theme-tools'

const sizes = {
  '2xs': defineStyle({
    h: '6',
    min-width: '6',
    font-size: '2xs',
    px: '2',
    '& svg': {
      font-size: 'sm',
    },
  }),
  xs: defineStyle({
    h: '8',
    min-width: '8',
    font-size: 'xs',
    line-height: '1.125rem',
    px: '2',
    '& svg': {
      font-size: 'md',
    },
  }),
  sm: defineStyle({
    h: '9',
    min-width: '9',
    font-size: 'sm',
    line-height: '1.25rem',
    px: '3.5',
    '& svg': {
      font-size: 'xl',
    },
  }),
  md: defineStyle({
    h: '10',
    min-width: '10',
    font-size: 'sm',
    line-height: '1.25rem',
    px: '4',
    '& svg': {
      font-size: 'xl',
    },
  }),
  lg: defineStyle({
    h: '11',
    min-width: '11',
    font-size: 'md',
    line-height: '1.5rem',
    px: '4.5',
    '& svg': {
      font-size: 'xl',
    },
  }),
  xl: defineStyle({
    h: '12',
    min-width: '12',
    font-size: 'md',
    line-height: '1.5rem',
    px: '5',
    '& svg': {
      font-size: 'xl',
    },
  }),
  '2xl': defineStyle({
    h: '15',
    min-width: '15',
    font-size: 'lg',
    line-height: '1.75rem',
    px: '7',
    '& svg': {
      font-size: '2xl',
    },
  }),
}

const vars = defineCssVars('button', ['bg', 'color'])

const variants = {
  primary: defineStyle((props) => {
    const { colorScheme } = props
    return {
      border-radius: 'lg',
      flex-shrink: 0,
      bg: vars.bg.reference,
      color: vars.color.reference,

      [vars.bg.variable]: `colors.${colorScheme}.500`,
      [vars.color.variable]: `colors.white`,
      .chakra-ui-dark &: {
        [vars.bg.variable]: `colors.${colorScheme}.200`,
        [vars.color.variable]: `colors.gray.800`,
      },
     &:hover: {
        [vars.bg.variable]: `colors.${colorScheme}.600`,
       &:disabled {
          background: 'inerit',
        },
        .chakra-ui-dark &: {
          [vars.bg.variable]: `colors.${colorScheme}.300`,
        },
      },
     &:active: {
        [vars.bg.variable]: `colors.${colorScheme}.700`,
        .chakra-ui-dark &: {
          [vars.bg.variable]: `colors.${colorScheme}.400`,
        },
      },
     &:disabled {
       &:hover: {
          [vars.bg.variable]: `colors.${colorScheme}.500`,
          .chakra-ui-dark &: {
            [vars.bg.variable]: `colors.${colorScheme}.200`,
          },
        },
      },
     &:focus-visible {
        box-shadow: 'focus',
      },
    }
  }),

  secondary: defineStyle({
    border-width: '1px',
    border-color: 'border.emphasized',
    border-radius: 'lg',
    flex-shrink: 0,
    bg: vars.bg.reference,
    color: vars.color.reference,
    [vars.color.variable]: `colors.gray.700`,
    '> svg': {
      color: 'fg.muted',
    },
    .chakra-ui-dark &: {
      [vars.color.variable]: `colors.gray.200`,
    },
   &:hover: {
      [vars.bg.variable]: `colors.gray.50`,
      [vars.color.variable]: `colors.gray.800`,
      .chakra-ui-dark &: {
        [vars.bg.variable]: `colors.gray.800`,
        [vars.color.variable]: `colors.white`,
      },
    },
    &[data-checked]: {
      [vars.bg.variable]: `colors.gray.50`,
      .chakra-ui-dark &: {
        [vars.bg.variable]: `colors.gray.800`,
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
    &[data-selected]: {
      [vars.bg.variable]: `colors.gray.50`,
      [vars.color.variable]: `colors.gray.900`,
      .chakra-ui-dark &: {
        [vars.bg.variable]: `colors.gray.800`,
        [vars.color.variable]: `colors.white`,
      },
    },
   &:disabled {
      opacity: 1,
      border-color: 'border.default',
      [vars.color.variable]: `colors.gray.400`,
      '> svg': {
        color: 'unset',
      },
      .chakra-ui-dark &: {
        [vars.color.variable]: `colors.gray.600`,
      },
     &:hover: {
        [vars.color.variable]: `colors.gray.400`,
        .chakra-ui-dark &: {
          [vars.color.variable]: `colors.gray.600`,
        },
      },
    },
   &:focus-visible {
      box-shadow: 'focus',
    },
  }),

  tertiary: defineStyle({
    border-radius: 'lg',
    flex-shrink: 0,
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
    &[data-checked]: {
      [vars.bg.variable]: `colors.gray.50`,
      .chakra-ui-dark &: {
        [vars.bg.variable]: `colors.gray.800`,
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
    &[aria-current=page]: {
      [vars.bg.variable]: `colors.gray.100`,
      .chakra-ui-dark &: {
        [vars.bg.variable]: `colors.gray.700`,
      },
    },
   &:disabled {
      opacity: 1,
      [vars.color.variable]: `colors.gray.400`,
      .chakra-ui-dark &: {
        [vars.color.variable]: `colors.gray.600`,
      },
     &:hover: {
        [vars.color.variable]: `colors.gray.400`,
        .chakra-ui-dark &: {
          [vars.color.variable]: `colors.gray.600`,
        },
      },
    },
   &:focus-visible {
      box-shadow: 'focus',
    },
  }),

  text: defineStyle((props) => {
    const { colorScheme } = props
    const baseStyle = defineStyle({
      border-radius: '0',
      padding: 0,
      height: 'auto',
      vertical-align: 'baseline',
      color: vars.color.reference,
      justify-content: 'flex-start',
    })

    if (colorScheme === 'gray') {
      return {
        ...baseStyle,
        [vars.color.variable]: `colors.gray.600`,
        .chakra-ui-dark &: {
          [vars.color.variable]: `colors.gray.200`,
        },
       &:hover: {
          [vars.color.variable]: `colors.gray.700`,
          .chakra-ui-dark &: {
            [vars.color.variable]: `colors.gray.300`,
          },
        },
       &:active: {
          [vars.color.variable]: `colors.gray.800`,
          .chakra-ui-dark &: {
            [vars.color.variable]: `colors.gray.300`,
          },
        },
       &:focus-visible {
          box-shadow: 'focus',
        },
       &:disabled {
          opacity: 1,
          [vars.color.variable]: `colors.gray.400`,
          .chakra-ui-dark &: {
            [vars.color.variable]: `colors.gray.600`,
          },
         &:hover: {
            [vars.color.variable]: `colors.gray.400`,
            .chakra-ui-dark &: {
              [vars.color.variable]: `colors.gray.600`,
            },
          },
        },
      }
    }

    return {
      ...baseStyle,
      [vars.color.variable]: `colors.${colorScheme}.600`,
      .chakra-ui-dark &: {
        [vars.color.variable]: `colors.${colorScheme}.200`,
      },
     &:hover: {
        [vars.color.variable]: `colors.${colorScheme}.700`,
        .chakra-ui-dark &: {
          [vars.color.variable]: `colors.${colorScheme}.300`,
        },
      },
     &:active: {
        [vars.color.variable]: `colors.${colorScheme}.700`,
        .chakra-ui-dark &: {
          [vars.color.variable]: `colors.${colorScheme}.300`,
        },
      },
    }
  }),

  'primary.accent': defineStyle(() => {
    return {
      bg: 'brand.50',
      color: 'brand.600',
     &:hover: { bg: 'brand.100' },
     &:active: { bg: 'brand.100' },
    }
  }),

  'secondary.accent': {
    color: 'white',
    border-color: 'brand.50',
    border-width: '1px',
   &:hover: { bg: 'whiteAlpha.200' },
   &:active: { bg: 'whiteAlpha.200' },
  },

  'tertiary.accent': defineStyle((props) => ({
    color: 'brand.50',
   &:hover: {
      bg: transparentize('brand.500', 0.67)(props.theme),
    },
    &[aria-current=page]: {
      color: 'white',
      bg: 'bg.accent.subtle',
    },
  })),

  'text.accent': defineStyle({
    padding: 0,
    height: 'auto',
    line-height: 'normal',
    vertical-align: 'baseline',
    color: 'brand.50',
   &:hover: {
      color: 'white',
    },
   &:active: {
      color: 'white',
    },
  }),
}

export default defineStyleConfig({
  variants,
  sizes,
  defaultProps: {
    colorScheme: 'brand',
  },
})
