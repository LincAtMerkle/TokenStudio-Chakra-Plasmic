.text__container {
    border-radius: var(--lg);
    background: mode('white', 'gray.800')(props);
    ._hover { border-color: mode('gray.300', 'gray.600')(props) }

    ._focus {
      border-color: mode('brand.500', 'brand.200')(props);
      box-shadow: mode(
        `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`;
        `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`;
      )(props);
    }


