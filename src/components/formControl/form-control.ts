import { formAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const $fg = cssVar("form-control-color")

const baseStyleRequiredIndicator = defineStyle({
  margin-inline-start: "1",
  [$fg.variable]: "colors.red.500",
  .chakra-ui-dark &: {
    [$fg.variable]: "colors.red.300",
  },
  color: $fg.reference,
})

const baseStyleHelperText = defineStyle({
 margin-top: "2",
  [$fg.variable]: "colors.gray.600",
  .chakra-ui-dark &: {
    [$fg.variable]: "colors.whiteAlpha.600",
  },
  color: $fg.reference,
  line-height: "normal",
  font-size: "sm",
})

const baseStyle = definePartsStyle({
  container: {
    width: "100%",
    position: "relative",
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText,
})

export const formTheme = defineMultiStyleConfig({
  baseStyle,
})
