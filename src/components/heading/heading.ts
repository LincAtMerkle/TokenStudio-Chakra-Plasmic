import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  font-family: "heading",
  font-weight: "bold",
})

const sizes = {
  "4xl": defineStyle({
    font-size: ["6xl", null, "7xl"],
    line-height: 1,
  }),
  "3xl": defineStyle({
    font-size: ["5xl", null, "6xl"],
    line-height: 1,
  }),
  "2xl": defineStyle({
    font-size: ["4xl", null, "5xl"],
    line-height: [1.2, null, 1],
  }),
  xl: defineStyle({
    font-size: ["3xl", null, "4xl"],
    line-height: [1.33, null, 1.2],
  }),
  lg: defineStyle({
    font-size: ["2xl", null, "3xl"],
    line-height: [1.33, null, 1.2],
  }),
  md: defineStyle({
    font-size: "xl",
    line-height: 1.2,
  }),
  sm: defineStyle({
    font-size: "md",
    line-height: 1.2,
  }),
  xs: defineStyle({
    font-size: "sm",
    line-height: 1.2,
  }),
}

export const headingTheme = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "xl",
  },
})
