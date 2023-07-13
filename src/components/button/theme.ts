import { defineStyle, defineStyleConfig 

import { runIfFn } from "../utils/run-if-fn"

const baseStyle = defineStyle({
  line-height: "1.2",
  border-radius: "md",
  font-weight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
 &:focus-visible {
    box-shadow: "outline",
  },
 &:disabled {
    opacity: 0.4,
    cursor: "not-allowed",
    box-shadow: "none",
  },
 &:hover: {
   &:disabled {
      bg: "initial",
    },
  },
})

const variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme } = props

  if (c === "gray") {
    return {
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
     &:hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
     &:active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    }
  }

  const darkHoverbackground= transparentize(`${c}.200`, 0.12)(theme)
  const darkActivebackground= transparentize(`${c}.200`, 0.24)(theme)

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
   &:hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
   &:active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  }
})

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props
  const border-color = mode(`gray.200`, `whiteAlpha.300`)(props)
  return {
    border: "1px solid",
    border-color: c === "gray" ? border-color : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
      { margin-inline-end: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
      { margin-bottom: "-1px" },
    ...runIfFn(variantGhost, props),
  }
})

type AccessibleColor = {
  bg?: string
  color?: string
  hoverBg?: string
  activeBg?: string
}

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600",
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600",
  },
}

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props

  if (c === "gray") {
    const background= mode(`gray.100`, `whiteAlpha.200`)(props)

    return {
      bg,
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
     &:hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
       &:disabled {
          bg,
        },
      },
     &:active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
    }
  }

  const {
    background= `${c}.500`,
    color = "white",
    hoverbackground= `${c}.600`,
    activebackground= `${c}.700`,
  } = accessibleColorMap[c] ?? {}

  const background = mode(bg, `${c}.200`)(props)

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
   &:hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
     &:disabled {
        bg: background,
      },
    },
   &:active: { bg: mode(activeBg, `${c}.400`)(props) },
  }
})

const variantLink = defineStyle((props) => {
  const { colorScheme: c } = props
  return {
    padding: 0,
    height: "auto",
    line-height: "normal",
    vertical-align: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
   &:hover: {
      text-decoration: "underline",
     &:disabled {
        text-decoration: "none",
      },
    },
   &:active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
    },
  }
})

const variantUnstyled = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  line-height: "inherit",
  margin: "0",
 padding: "0",
})


  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
}

const sizes = {
  lg: defineStyle({
    h: "12",
    min-width: "12",
    font-size: "lg",
   padding-inline-start: "6",
padding-inline-end: "6",
  }),
  md: defineStyle({
    h: "10",
    min-width: "10",
    font-size: "md",
   padding-inline-start: "4",
padding-inline-end: "4",
  }),
  sm: defineStyle({
    h: "8",
    min-width: "8",
    font-size: "sm",
    px: "3",
  }),
  xs: defineStyle({
    h: "6",
    min-width: "6",
    font-size: "xs",
    px: "2",
  }),
}

export const buttonTheme = defineStyleConfig({
      sizes,
  
    variant: "solid",
    size: "md",
    colorScheme: "gray",
  },
})