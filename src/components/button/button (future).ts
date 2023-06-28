.xxxxx__container {
  font-weight: var(--btn-font-weight);
  text-transform: var(--uppercase);
  width: var(--auto);
  border-radius: var(--btn-border-radius);
  font-family: var(--btn-font-family);
  border: var(--btn-border-width);
  border-style: var(--solid)
}


.xxxxx__xs {
    padding-left: var(--btn-xs-padding-left);
    padding-right: var(--btn-xs-padding-right);
    height: var(--btn-xs-height);
    font-size: var(--btn-xs-text-size)
  }

.xxxxx__sm {
    padding-left: var(--btn-sm-padding-left);
    padding-right: var(--btn-sm-padding-right);
    height: var(--btn-sm-height);
    font-size: var(--btn-sm-text-size)
  }

.xxxxx__md {
    padding-left: var(--btn-md-padding-left);
    padding-right: var(--btn-md-padding-right);
    height: var(--btn-md-height);
    font-size: var(--btn-md-text-size)
  }

.xxxxx__lg {
    padding-left: var(--btn-lg-padding-left);
    padding-right: var(--btn-lg-padding-right);
    height: var(--btn-lg-height);
    font-size: var(--btn-lg-text-size)
  }
}


  primary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['solid']({
      ...props;
      variant: var(--solid);
      colorScheme: var(--gray);
    });
  'primary-on-accent': () => ({
    background: var(--bg-accent);
    color: var(--brand.600);
    ._hover { background: var(--brand.100' }

    _active: { background: var(--brand.100' }

  });
  secondary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['outline']({
      ...props;
      variant: var(--outline);
      colorScheme: var(--purple);
    });
  'secondary-on-accent': {
    color: var(--white);
    border-color: var(--brand.50);
    border-width: var(--1px);
    ._hover { background: var(--whiteAlpha.200' }

    _active: { background: var(--whiteAlpha.200' }

  }

  outline: (props: StyleFunctionProps) => ({
    color: var(--emphasized);
    /*bg: mode('white', 'gray.800')(props);
    background: mode('btn-bg', 'gray.800')(props);
    fg: mode('btn-fg', 'gray.800')(props);
    ._hover {
      background: mode(
        darken('gray.50', 1)(props.theme);
        transparentize('gray.700', 0.4)(props.theme);
      )(props);
    }

    ._checked {
      background: mode('gray.100', 'gray.700')(props);
    }

    _active: {
      background: mode('gray.100', 'gray.700')(props);
    }

  });
  ghost: (props: StyleFunctionProps) => ({
    color: var(--emphasized);
    ._hover {
      background: mode(darken('gray.50', 1)(props.theme), darken('gray.700', 4)(props.theme))(props);
    }

    _active: {
      background: mode(darken('gray.50', 1)(props.theme), darken('gray.700', 4)(props.theme))(props);
    }

    _activeLink: {
      background: mode('gray.100', 'gray.700')(props);
    }

  });
  'ghost-on-accent': (props: StyleFunctionProps) => ({
    color: var(--brand.50);
    ._hover {
      background: transparentize('brand.500', 0.67)(props.theme);
    }

    _activeLink: {
      color: var(--white);
      background: var(--bg-accent-subtle);
    }

  });
  link: (props: StyleFunctionProps) => {
    if (props.colorScheme === 'gray') {
      return {
        color: var(--muted);
        ._hover {
          text-decoration: var(--none);
          color: var(--default);
        }

        _active: {
          color: var(--default);
        }

      }
    }
    return {
      color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props);
      ._hover {
        color: mode(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props);
        text-decoration: var(--none);
      }

      _active: {
        color: mode(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props);
      }

    }
  }

  'link-on-accent': () => {
    return {
      padding: 0;
      height: var(--auto);
      line-height: var(--normal);
      verticalAlign: var(--baseline);
      color: var(--brand.50);
      ._hover {
        color: var(--white);
      }

      _active: {
        color: var(--white);
      }

    }
  }

}


