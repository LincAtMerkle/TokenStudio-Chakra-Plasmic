import { getColor, mode, transparentize, type StyleFunctionProps } from '@chakra-ui/theme-tools'

const parts = ['field', 'menu', 'option']

const baseStyle = {
  field: {
    width: '100%',
    display: 'inline-flex',
    align-items: 'center',
    justify-content: 'space-between',
    transition: 'all 50ms ease',
  },
  option: {
    display: 'flex',
    align-items: 'center',
    cursor: 'pointer',
   &:disabled {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
  menu: {
    min-width: '3xs',
  },
}


  outline: (props: StyleFunctionProps) => ({
    menu: {
      bg: mode('white', 'gray.800')(props),
      box-shadow: 'sm',
      color: 'inherit',
      min-width: '3xs',
      py: '2',
      border-radius: 'md',
      border-width: '1px',
    },
    option: {
      &[data-selected]: {
        bg: mode('gray.100', 'gray.700')(props),
      },
    },
    field: {
      border-width: '1px',
      bg: mode('white', 'gray.800')(props),

     &:hover: {
        border-color: mode('gray.300', 'whiteAlpha.400')(props),
      },
     &:disabled {
        opacity: 0.4,
        cursor: 'not-allowed',
        border-color: 'inherit',
      },
      _readOnly: {
        box-shadow: 'none !important',
        user-select: 'all',
      },
      &[data-invalid]: {
        border-color: getColor(props.theme, mode('red.500', 'red.300')(props)),
        box-shadow: `0 0 0 1px ${getColor(props.theme, mode('red.500', 'red.300')(props))}`,
      },
     &:focus: {
        border-color: mode('brand.500', 'brand.200')(props),
        box-shadow: mode(
          `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
          `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
        )(props),
      },
      &[data-expanded]: {
        border-color: mode('brand.500', 'brand.200')(props),
        box-shadow: mode(
          `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
          `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
        )(props),
      },
    },
  }),
}

const sizes = {
  sm: {
    field: {
      px: 3,
      h: 8,
      font-size: 'sm',
      border-radius: 'sm',
    },
    menu: {
      font-size: 'sm',
      border-radius: 'sm',
    },
    option: {
      px: 3,
      h: 8,
      font-size: 'sm',
    },
  },
  md: {
    field: {
      px: 4,
      h: 10,
      font-size: 'md',
      border-radius: 'md',
    },
    menu: {
      font-size: 'md',
      border-radius: 'md',
    },
    option: {
      px: 4,
      h: 10,
      font-size: 'md',
    },
  },
  lg: {
    field: {
      px: 4,
      h: 12,
      font-size: 'lg',
      border-radius: 'md',
    },
    menu: {
      font-size: 'lg',
      border-radius: 'md',
    },
    option: {
      px: 4,
      h: 12,
      font-size: 'lg',
    },
  },
}

export default {
  parts,
      sizes,
  
    size: 'md',
    variant: 'outline',
    colorScheme: 'brand',
  },
}
