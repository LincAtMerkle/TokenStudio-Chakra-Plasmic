import { menuAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/styled-system"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $background= cssVar("menu-bg")
const $shadow = cssVar("menu-shadow")

const baseStyleList = defineStyle({
  [$bg.variable]: "#fff",
  [$shadow.variable]: "shadows.sm",
  .chakra-ui-dark &: {
    [$bg.variable]: "colors.gray.700",
    [$shadow.variable]: "shadows.dark-lg",
  },
  color: "inherit",
  min-width: "3xs",
 padding-top: "2",
padding-bottom: "2",
  z-index: 1,
  border-radius: "md",
  border-width: "1px",
  background: $bg.reference,
  box-shadow: $shadow.reference,
})

const baseStyleItem = defineStyle({
  padding-top: "1.5",
padding-bottom: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
 &:focus: {
    [$bg.variable]: "colors.gray.100",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.whiteAlpha.100",
    },
  },
 &:active: {
    [$bg.variable]: "colors.gray.200",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.whiteAlpha.200",
    },
  },
  &[data-expanded]: {
    [$bg.variable]: "colors.gray.100",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.whiteAlpha.100",
    },
  },
 &:disabled {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  background: $bg.reference,
})

const baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  font-weight: "semibold",
  font-size: "sm",
})

const baseStyleCommand = defineStyle({
  opacity: 0.6,
})

const baseStyleDivider = defineStyle({
  border: 0,
  border-bottom: "1px solid",
  border-color: "inherit",
  margin-top: "2",
  margin-bottom: "2",
  opacity: 0.6,
})

const baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
})

const baseStyle = definePartsStyle({
  button: baseStyleButton,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider,
})

export const menuTheme = defineMultiStyleConfig({
  baseStyle,
})
