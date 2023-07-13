import { switchAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"
import { calc, cssVar } from "@chakra-ui/theme-tools"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $width = cssVar("switch-track-width")
const $height = cssVar("switch-track-height")
const $diff = cssVar("switch-track-diff")
const diffValue = calc.subtract($width, $height)
const $translateX = cssVar("switch-thumb-x")
const $background= cssVar("switch-bg")

const baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props

  return {
    border-radius: "full",
   padding: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [$bg.variable]: "colors.gray.300",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.whiteAlpha.400",
    },
   &:focus-visible {
      box-shadow: "outline",
    },
   &:disabled {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    &[data-checked]: {
      [$bg.variable]: `colors.${c}.500`,
      .chakra-ui-dark &: {
        [$bg.variable]: `colors.${c}.200`,
      },
    },
    background: $bg.reference,
  }
})

const baseStyleThumb = defineStyle({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  border-radius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  &[data-checked]: {
    transform: `translateX(${$translateX.reference})`,
  },
})

const baseStyle = definePartsStyle((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    &[dir=rtl]: {
      [$translateX.variable]: calc($diff).negate().toString(),
    },
  },
  track: baseStyleTrack(props),
  thumb: baseStyleThumb,
}))

const sizes = {
  sm: definePartsStyle({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3",
    },
  }),
  md: definePartsStyle({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4",
    },
  }),
  lg: definePartsStyle({
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "sizes.6",
    },
  }),
}

export const switchTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
})
