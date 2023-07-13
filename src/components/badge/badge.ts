import {
  defineCssVars,
  defineStyle,
  defineStyleConfig,



const vars = defineCssVars("badge", ["background", "color", "shadow"])

const baseStyle = defineStyle({
  px: 1,
  text-transform: "uppercase",
  font-size: "xs",
  border-radius: "sm",
  font-weight: "bold",
  bg: vars.bg.reference,
  color: vars.color.reference,
  box-shadow: vars.shadow.reference,
})

const variantSolid = defineStyle((props) => {
  const { colorScheme: c, theme } = props
  const dark = transparentize(`${c}.500`, 0.6)(theme)
  return {
    [vars.bg.variable]: `colors.${c}.500`,
    [vars.color.variable]: `colors.white`,
    .chakra-ui-dark &: {
      [vars.bg.variable]: dark,
      [vars.color.variable]: `colors.whiteAlpha.800`,
    },
  }
})

const variantSubtle = defineStyle((props) => {
  const { colorScheme: c, theme } = props
  const darkbackground= transparentize(`${c}.200`, 0.16)(theme)
  return {
    [vars.bg.variable]: `colors.${c}.100`,
    [vars.color.variable]: `colors.${c}.800`,
    .chakra-ui-dark &: {
      [vars.bg.variable]: darkBg,
      [vars.color.variable]: `colors.${c}.200`,
    },
  }
})

const variantOutline = defineStyle((props) => {
  const { colorScheme: c, theme } = props
  const darkColor = transparentize(`${c}.200`, 0.8)(theme)
  return {
    [vars.color.variable]: `colors.${c}.500`,
    .chakra-ui-dark &: {
      [vars.color.variable]: darkColor,
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`,
  }
})


  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
}

export const badgeTheme = defineStyleConfig({
      
    variant: "subtle",
    colorScheme: "gray",
  },
})

export { vars as badgeVars }
