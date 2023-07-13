import { checkboxAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/styled-system"
import { mode } from "@chakra-ui/theme-tools"
import { runIfFn } from "../utils/run-if-fn"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const $size = cssVar("checkbox-size")

const baseStyleControl = defineStyle((props) => {
  const { colorScheme: c } = props

  return {
    w: $size.reference,
    h: $size.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    border-radius: "sm",
    border-color: "inherit",
    color: "white",

    &[data-checked]: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      border-color: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),

     &:hover: {
        bg: mode(`${c}.600`, `${c}.300`)(props),
        border-color: mode(`${c}.600`, `${c}.300`)(props),
      },

     &:disabled {
        border-color: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props),
      },
    },

    &:indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      border-color: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
    },

   &:disabled {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      border-color: mode("gray.100", "transparent")(props),
    },

   &:focus-visible {
      box-shadow: "outline",
    },

    &[data-invalid]: {
      border-color: mode("red.500", "red.300")(props),
    },
  }
})

const baseStyleContainer = defineStyle({
 &:disabled { cursor: "not-allowed" },
})

const baseStyleLabel = defineStyle({
  user-select: "none",
 &:disabled { opacity: 0.4 },
})

const baseStyleIcon = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal",
})

const baseStyle = definePartsStyle((props) => ({
  icon: baseStyleIcon,
  container: baseStyleContainer,
  control: runIfFn(baseStyleControl, props),
  label: baseStyleLabel,
}))

const sizes = {
  sm: definePartsStyle({
    control: { [$size.variable]: "sizes.3" },
    label: { font-size: "sm" },
    icon: { font-size: "3xs" },
  }),
  md: definePartsStyle({
    control: { [$size.variable]: "sizes.4" },
    label: { font-size: "md" },
    icon: { font-size: "2xs" },
  }),
  lg: definePartsStyle({
    control: { [$size.variable]: "sizes.5" },
    label: { font-size: "lg" },
    icon: { font-size: "2xs" },
  }),
}

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
})
