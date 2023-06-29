

const baseStyle = (props: StyleFunctionProps) => ({
  label: {
    color: var(--muted);
    font-weight: var(--medium);
  }

  control: {
    background: mode('white', 'gray.800')(props);
    border-radius: var(--base);
  }

})


.xxxxx__md {
    label: {
      font-size: var(--sm);
    }

  }

  xxl:{
    label: {
      font-size: var(--xl);
    }

  }
}


  primary: (props: StyleFunctionProps) =>
    props.theme.components['Checkbox']['variants']['solid']({
      ...props;
      variant: var(--solid);
      colorScheme: var(--brand);
    });
  'primary-on-accent': () => ({
    background: var(--brand.50);
    color: var(--brand.600);
    ._hover { background: var(--brand.100' }

    ._active { background: var(--brand.100' }

  });
}



