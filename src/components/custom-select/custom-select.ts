.custom-select__container {
  field: {
    width: 100%
;
    display: var(--inline-flex);
    align-items: var(--center);
    justify-content: var(--space-between);
    transition: var(--all 50ms ease);
  }

  option: {
    display: var(--flex);
    align-items: var(--center);
    cursor: var(--pointer);
    _disabled: {
      opacity: 0.4,
      cursor: var(--not-allowed);
    }

  }

  menu: {
    min-width: var(--3xs);
  }

}


  outline: (props: StyleFunctionProps) => ({
    menu: {
      bg: mode('white', 'gray.800')(props),
      box-shadow: mode('sm', 'sm-dark')(props),
      color: var(--inherit);
      min-width: var(--3xs);
      padding-left: var(--2);
      padding-right: var(--2);
  
      border-radius: var(--md);
      border-width: var(--1px);
    }

    option: {
      _selected: {
        bg: mode('gray.100', 'gray.700')(props),
      }

    }

    field: {
      border: var(--1px solid);
      border-color: var(--inherit);
      bg: mode('white', 'gray.800')(props),

      _hover: {
        border-color: mode('gray.300', 'whiteAlpha.400')(props),
      }

      _disabled: {
        opacity: 0.4,
        cursor: var(--not-allowed);
        border-color: var(--inherit);
      }

      _readOnly: {
        box-shadow: var(--none !important);
        userSelect: var(--all);
      }

      _invalid: {
        border-color: getColor(props.theme, mode('red.500', 'red.300')(props)),
        box-shadow: `0 0 0 1px ${getColor(props.theme, mode('red.500', 'red.300')(props))}`,
      }

      _focus: {
        border-color: mode('brand.500', 'brand.200')(props),
        box-shadow: mode(
          `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
          `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
        )(props),
      }

      _expanded: {
        border-color: mode('brand.500', 'brand.200')(props),
        box-shadow: mode(
          `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
          `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
        )(props),
      }

    }

  }),
}


.custom-select__sm {
    field: {
      px: 3,
      h: 8,
      font-size: var(--sm);
      border-radius: var(--sm);
    }

    menu: {
      font-size: var(--sm);
      border-radius: var(--sm);
    }

    option: {
      px: 3,
      h: 8,
      font-size: var(--sm);
    }

  }

.custom-select__md {
    field: {
      px: 4,
      h: 10,
      font-size: var(--md);
      border-radius: var(--md);
    }

    menu: {
      font-size: var(--md);
      border-radius: var(--md);
    }

    option: {
      px: 4,
      h: 10,
      font-size: var(--md);
    }

  }

.custom-select__lg {
    field: {
      px: 4,
      h: 12,
      font-size: var(--lg);
      border-radius: var(--md);
    }

    menu: {
      font-size: var(--lg);
      border-radius: var(--md);
    }

    option: {
      px: 4,
      h: 12,
      font-size: var(--lg);
    }

  }