import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"
import { cssVar } from "@chakra-ui/theme-tools"

const $background= cssVar("tooltip-bg")
const $fg = cssVar("tooltip-fg")
const $arrowbackground= cssVar("popper-arrow-bg")

const baseStyle = defineStyle({
  background: $bg.reference,
  color: $fg.reference,
  [$bg.variable]: "colors.gray.700",
  [$fg.variable]: "colors.whiteAlpha.900",
  .chakra-ui-dark &: {
    [$bg.variable]: "colors.gray.300",
    [$fg.variable]: "colors.gray.900",
  },
  [$arrowBg.variable]: $bg.reference,
  padding-inline-start: "2",
  padding-inline-end: "2",
  padding-top: "0.5",
  padding-bottom: "0.5",
  border-radius: "sm",
  font-weight: "medium",
  font-size: "sm",
  box-shadow: "md",
  max-width: "xs",
  z-index: "tooltip",
})

export const tooltipTheme = defineStyleConfig({
  baseStyle,
})
