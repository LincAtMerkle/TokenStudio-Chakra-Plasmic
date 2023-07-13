






const $fg = cssVar("alert-fg")
const $background= cssVar("alert-bg")


  container: {
    background: $bg.reference,
   padding-inline-start: "4",
padding-inline-end: "4",
   padding-top: "3",
padding-bottom: "3",
  },
  title: {
    font-weight: "bold",
    line-height: "6",
    margin-inline-end: "2",
  },
  description: {
    line-height: "6",
  },
  icon: {
    color: $fg.reference,
    flex-shrink: 0,
    margin-inline-end: "3",
    w: "5",
    h: "6",
  },
  spinner: {
    color: $fg.reference,
    flex-shrink: 0,
    margin-inline-end: "3",
    w: "5",
    h: "5",
  },
})

function getBg(props: StyleFunctionProps) {
  const { theme, colorScheme: c } = props
  const darkbackground= transparentize(`${c}.200`, 0.16)(theme)
  return {
    light: `colors.${c}.100`,
    dark: darkBg,
  }
}

const variantSubtle = definePartsStyle((props) => {
  const { colorScheme: c } = props
  const background= getBg(props)
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg.variable]: bg.light,
      .chakra-ui-dark &: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark,
      },
    },
  }
})

const variantLeftAccent = definePartsStyle((props) => {
  const { colorScheme: c } = props
  const background= getBg(props)
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg.variable]: bg.light,
      .chakra-ui-dark &: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark,
      },
      padding-inline-start: "3",
      	border-inline-startWidth: "4px",
      	border-inline-startColor: $fg.reference,
    },
  }
})

const variantTopAccent = definePartsStyle((props) => {
  const { colorScheme: c } = props
  const background= getBg(props)
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg.variable]: bg.light,
      .chakra-ui-dark &: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark,
      },
     padding-top: "2",
      border-topWidth: "4px",
      border-topColor: $fg.reference,
    },
  }
})

const variantSolid = definePartsStyle((props) => {
  const { colorScheme: c } = props
  return {
    container: {
      [$fg.variable]: `colors.white`,
      [$bg.variable]: `colors.${c}.500`,
      .chakra-ui-dark &: {
        [$fg.variable]: `colors.gray.900`,
        [$bg.variable]: `colors.${c}.200`,
      },
      color: $fg.reference,
    },
  }
})


  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid,
}

      
    variant: "subtle",
    colorScheme: "blue",
  },
})
