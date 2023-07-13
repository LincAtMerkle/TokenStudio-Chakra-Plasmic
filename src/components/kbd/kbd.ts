import {
  cssVar,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/styled-system"

const $background= cssVar("kbd-bg")

const baseStyle = defineStyle({
  [$bg.variable]: "colors.gray.100",
  .chakra-ui-dark &: {
    [$bg.variable]: "colors.whiteAlpha.100",
  },
  background: $bg.reference,
  border-radius: "md",
  border-width: "1px",
  border-bottomWidth: "3px",
  font-size: "0.8em",
  font-weight: "bold",
  line-height: "normal",
 padding-inline-start: "0.4em",
padding-inline-end: "0.4em",
  white-space: "nowrap",
})

export const kbdTheme = defineStyleConfig({
  baseStyle,
})
