import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineCssVars } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)


  field: {
   &:disabled {
      opacity: 1.0,
    },
    &::placeholder: {
      opacity: 1,
      color: 'fg.subtle',
    },
  },
})

const vars = defineCssVars('input', ['bg', 'border-color'])


  outline: definePartsStyle((props) => ({
    field: {
      border-radius: 'lg',
      border-color: 'border.emphasized',
      bg: vars.bg.reference,
      [vars.bg.variable]: `white`,
      .chakra-ui-dark &: {
        [vars.bg.variable]: `gray.800`,
      },
     &:hover: {
        border-color: 'border.active',
      },
     &:focus-visible {
        z-index: 1,
        border-color: 'brand.500',
        box-shadow: `0 0 0 1px ${props.theme.colors[props.colorScheme]['500']}`,
        .chakra-ui-dark &: {
          border-color: 'brand.200',
          box-shadow: `0 0 0 1px ${props.theme.colors[props.colorScheme]['200']}`,
        },
      },
    },
    addon: {
      border-radius: 'lg',
      border-color: 'border.emphasized',
      bg: 'bg.subtle',
    },
  })),

  'filled.accent': definePartsStyle({
    field: {
      bg: 'bg.accent.subtle',
      border-width: '2px',
      border-color: 'transparent',
      border-radius: 'lg',
      color: 'fg.accent.default',
      &::placeholder: {
        color: 'fg.accent.muted',
      },
     &:hover: {
        border-color: 'bg.accent.muted',
      },
     &:focus-visible {
        border-color: 'brand.300',
      },
    },
  }),
}

const sizes = {
  sm: definePartsStyle({
    field: { px: 2.5, h: 9, font-size: 'sm' },
  }),
  md: definePartsStyle({
    field: { px: 3, h: 10, font-size: 'md' },
  }),
  lg: definePartsStyle({
    field: { px: 3.5, h: 11, font-size: 'md' },
  }),
  xl: definePartsStyle({
    field: { px: 4, h: 12, font-size: 'md' },
  }),
}

export default defineMultiStyleConfig({
    sizes,
    
    colorScheme: 'brand',
  },
})
