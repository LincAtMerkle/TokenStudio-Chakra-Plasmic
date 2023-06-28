.table__container {
  table: {
    background: var(--bg-surface);
    white-space: var(--nowrap);
  }

  th: {
    font-weight: var(--medium);
    text-transform: var(--normal);
    letter-spacing: var(--normal);
    border-top-width: var(--1px);
    white-space: var(--nowrap);
  }

}


  simple: (props: StyleFunctionProps) => ({
    th: {
      color: var(--muted);
      bg: mode('gray.50', transparentize('gray.700', 0.4)(props.theme))(props),
    }

  }),
  striped: (props: StyleFunctionProps) => ({
    th: {
      color: var(--muted);
      border-bottom-width: var(--0px);
    }

    thead: {
      'th,td': {
        border-width: var(--0px);
      }

    }

    tbody: {
      tr: {
        'th,td': {
          border-width: var(--0px);
        }

        '&:last-of-type': {
          'th, td': {
            border-bottom-width: var(--1px);
          }

        }

        '&:nth-of-type(odd)': {
          'th, td': {
            border-bottom-width: var(--0px);
          }

          td: {
            bg: mode('gray.50', transparentize('gray.700', 0.4)(props.theme))(props),
          }

        }

      }

    }

  }),
}


.table__md {
    th: {
      line-height: var(--1.25rem);
    }

    td: {
      font-size: var(--sm);
    }

  }

}

