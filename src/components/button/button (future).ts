import { darken, mode, StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools'

const baseStyle = {
  font-weight: 'btn-font-weight',
  text-transform: 'uppercase',
  width: 'auto',
  border-radius: 'btn-border-radius',
  font-family: 'btn-font-family',
  border: 'btn-border-width',
 border-style: 'solid'
}

const sizes = {
  xs: {
    padding-left: 'btn-xs-padding-left',
    padding-right: 'btn-xs-padding-right',
    h: 'btn-xs-height',
    font-size: 'btn-xs-text-size'
  },
  sm: {
    padding-left: 'btn-sm-padding-left',
    padding-right: 'btn-sm-padding-right',
    height: 'btn-sm-height',
    font-size: 'btn-sm-text-size'
  },
  md: {
    padding-left: 'btn-md-padding-left',
    padding-right: 'btn-md-padding-right',
    height: 'btn-md-height',
    font-size: 'btn-md-text-size'
  },
  lg: {
    padding-left: 'btn-lg-padding-left',
    padding-right: 'btn-lg-padding-right',
    height: 'btn-lg-height',
    font-size: 'btn-lg-text-size'
  }
}

const variants = {
  primary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'gray',
    }),
  'primary-on-accent': () => ({
    bg: 'bg-accent',
    color: 'brand.600',
   &:hover: { bg: 'brand.100' },
   &:active: { bg: 'brand.100' },
  }),
  secondary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['outline']({
      ...props,
      variant: 'outline',
      colorScheme: 'purple',
    }),
  'secondary-on-accent': {
    color: 'white',
    border-color: 'brand.50',
    border-width: '1px',
   &:hover: { bg: 'whiteAlpha.200' },
   &:active: { bg: 'whiteAlpha.200' },
  },
  outline: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    // bg: mode('white', 'gray.800')(props),
    bg: mode('btn-bg', 'gray.800')(props),
    fg: mode('btn-fg', 'gray.800')(props),
   &:hover: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        transparentize('gray.700', 0.4)(props.theme),
      )(props),
    },
    &[data-checked]: {
      bg: mode('gray.100', 'gray.700')(props),
    },
   &:active: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  ghost: (props: StyleFunctionProps) => ({
    color: 'emphasized',
   &:hover: {
      bg: mode(darken('gray.50', 1)(props.theme), darken('gray.700', 4)(props.theme))(props),
    },
   &:active: {
      bg: mode(darken('gray.50', 1)(props.theme), darken('gray.700', 4)(props.theme))(props),
    },
    &[aria-current=page]: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  'ghost-on-accent': (props: StyleFunctionProps) => ({
    color: 'brand.50',
   &:hover: {
      bg: transparentize('brand.500', 0.67)(props.theme),
    },
    &[aria-current=page]: {
      color: 'white',
      bg: 'bg-accent-subtle',
    },
  }),
  link: (props: StyleFunctionProps) => {
    if (props.colorScheme === 'gray') {
      return {
        color: 'muted',
       &:hover: {
          text-decoration: 'none',
          color: 'default',
        },
       &:active: {
          color: 'default',
        },
      }
    }
    return {
      color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props),
     &:hover: {
        color: mode(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props),
        text-decoration: 'none',
      },
     &:active: {
        color: mode(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props),
      },
    }
  },
  'link-on-accent': () => {
    return {
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
    }
  },
}

export default {
  baseStyle,
  variants,
  sizes,
}
