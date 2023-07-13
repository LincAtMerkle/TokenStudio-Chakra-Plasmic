import { defineCssVars, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const vars = defineCssVars('link', ['color'])

export default defineStyleConfig({
  variants: {
    underline: defineStyle({
      position: 'relative',
      color: vars.color.reference,
      [vars.color.variable]: `colors.brand.600`,
      .chakra-ui-dark &: {
        [vars.color.variable]: `colors.brand.200`,
      },
      &::before: {
        content: '""',
        position: 'absolute',
        width: 'full',
        height: '1.5px',
        border-radius: 'sm',
        backgroundColor: 'accent',
        bottom: '0',
        left: '0',
        transform-origin: 'right',
        transform: 'scaleX(0)',
        transition: ' transform .20s ease-in-out',
      },
     &:hover: {
        text-decoration: 'none',
        &::before: {
          transform-origin: 'left',
          transform: 'scaleX(1)',
        },
      },
    }),
    menu: defineStyle({
      border-radius: 'lg',
     &:hover: {
        text-decoration: 'none',
        bg: 'bg.subtle',
      },
    }),
  },
  
    variant: 'underline',
  },
})
