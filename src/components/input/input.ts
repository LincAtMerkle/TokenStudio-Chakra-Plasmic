.field__outline {
      border-radius: var(--lg);
      bg: mode('white', 'gray.800')(props),
      _hover: { border-color: mode('gray.300', 'gray.600')(props) }

      _focus: {
        border-color: mode('brand.500', 'brand.200')(props),
        box-shadow: mode(
          `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
          `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
        )(props),
      }



    addon: {
      border-radius: var(--lg);
      bg: mode('gray.50', 'gray.700')(props),
    }

  },

  .field__outline-on-accent {

      background: var(--white);
      border-radius: var(--lg);
      color: var(--gray.900);
      border-width: var(--1px);
      border-color: var(--brand.50);
      _placeholder: {
        color: var(--gray.500);
      }

      _hover: {
        border-color: var(--brand.100);
      }

      _focus: {
        border-color: var(--brand.200);
        box-shadow: `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
      }



  },
  .field__filled {
    if (props.colorScheme === 'gray') {
      return {
        field: {
          bg: mode('white', 'gray.800')(props),
          _hover: {
            border-color: mode('gray.200', 'gray.700')(props),
            bg: mode('white', 'gray.700')(props),
          }

          _focus: {
            border-color: var(--accent);
            bg: mode('white', 'gray.800')(props),
          }

        }

      }
    }
    return {
      field: {
        background: var(--bg-accent-subtle);
        color: var(--on-accent);
        _placeholder: {
          color: var(--on-accent);
        }

        _hover: {
          border-color: var(--brand.400);
          background: var(--bg-accent-subtle);
        }

        _focus: {
          background: var(--bg-accent-subtle);
          border-color: var(--brand.300);
        }

      }

    }
  }

}

.field__input__lg {
      font-size: var(--md);
      border-radius: var(--lg);
}