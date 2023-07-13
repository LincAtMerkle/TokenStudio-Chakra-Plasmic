import { mode, transparentize, type StyleFunctionProps } from '@chakra-ui/theme-tools'

const baseStyle = {
  table: {
    bg: 'bg.surface',
    white-space: 'nowrap',
  },
  th: {
    font-weight: 'medium',
    text-transform: 'normal',
    letter-spacing: 'normal',
    border-topWidth: '1px',
    white-space: 'nowrap',
  },
}


  simple: (props: StyleFunctionProps) => ({
    th: {
      color: 'fg.muted',
      bg: mode('gray.50', transparentize('gray.700', 0.4)(props.theme))(props),
    },
  }),
  striped: (props: StyleFunctionProps) => ({
    th: {
      color: 'fg.muted',
      border-bottomWidth: '0px',
    },
    thead: {
      'th,td': {
        border-width: '0px',
      },
    },
    tbody: {
      tr: {
        'th,td': {
          border-width: '0px',
        },
        '&:last-of-type': {
          'th, td': {
            border-bottomWidth: '1px',
          },
        },
        '&:nth-of-type(odd)': {
          'th, td': {
            border-bottomWidth: '0px',
          },
          td: {
            bg: mode('gray.50', transparentize('gray.700', 0.4)(props.theme))(props),
          },
        },
      },
    },
  }),
}

const sizes = {
  md: {
    th: {
      line-height: '1.25rem',
    },
    td: {
      font-size: 'sm',
    },
  },
}

export default {
  sizes,
    }
