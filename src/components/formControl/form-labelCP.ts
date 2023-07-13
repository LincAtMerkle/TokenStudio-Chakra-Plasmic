const baseStyle = {
  color: 'fg.emphasized',
  mb: '1.5',
  font-size: 'sm',
}

const sizes = {
  sm: {
    [data-peer]:placeholder-shown ~ &: {
      font-size: 'sm',
      top: '1.5',
      left: '4',
    },
  },
  md: {
    [data-peer]:placeholder-shown ~ &: {
      font-size: 'md',
      top: '2',
      left: '4',
    },
  },
  lg: {
    [data-peer]:placeholder-shown ~ &: {
      font-size: 'lg',
      top: '2.5',
      left: '4',
    },
  },
}


  inline: () => ({
    margin: 0,
    min-width: '2xs',
  }),
  floating: () => ({
    position: 'absolute',
    transition: 'all 0.12s ease-in',
    pointer-events: 'none',
    top: '-27px',
    left: '0',
    [data-peer]:placeholder-shown ~ &: {
      font-weight: 'normal',
      color: 'fg.subtle',
    },
    [data-peer]:focus ~ &: {
      font-size: 'sm',
      font-weight: 'medium',
      top: '-27px',
      left: '0',
      color: 'fg.muted',
    },
  }),
}

const defaultProps = {
  size: 'md',
}

export default {
    sizes,
    defaultProps,
}
