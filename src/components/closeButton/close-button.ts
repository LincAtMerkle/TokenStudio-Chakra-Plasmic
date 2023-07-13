import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"
import { cssVar } from "@chakra-ui/theme-tools"

const $size = cssVar("close-button-size")
const $background= cssVar("close-button-bg")

const baseStyle = defineStyle({
  w: [$size.reference],
  h: [$size.reference],
  border-radius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
 &:disabled {
    opacity: 0.4,
    cursor: "not-allowed",
    box-shadow: "none",
  },
 &:hover: {
    [$bg.variable]: "colors.blackAlpha.100",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.whiteAlpha.100",
    },
  },
 &:active: {
    [$bg.variable]: "colors.blackAlpha.200",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.whiteAlpha.200",
    },
  },
 &:focus-visible {
    box-shadow: "outline",
  },
  background: $bg.reference,
})

const sizes = {
  lg: defineStyle({
    [$size.variable]: "sizes.10",
    font-size: "md",
  }),
  md: defineStyle({
    [$size.variable]: "sizes.8",
    font-size: "xs",
  }),
  sm: defineStyle({
    [$size.variable]: "sizes.6",
    font-size: "2xs",
  }),
}

export const closeButtonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
  },
})
