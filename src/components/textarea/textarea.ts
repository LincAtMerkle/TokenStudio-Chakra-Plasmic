import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"
import { inputTheme } from "./input"

const baseStyle = defineStyle({
  ...inputTheme.baseStyle?.field,
  padding-bottom: "2",
  padding-top: "2",
  min-height: "20",
  line-height: "short",
  vertical-align: "top",
})

const variants = {
  outline: defineStyle(
    (props) => inputTheme.variants?.outline(props).field ?? {},
  ),
  flushed: defineStyle(
    (props) => inputTheme.variants?.flushed(props).field ?? {},
  ),
  filled: defineStyle(
    (props) => inputTheme.variants?.filled(props).field ?? {},
  ),
  unstyled: inputTheme.variants?.unstyled.field ?? {},
}

const sizes = {
  xs: inputTheme.sizes?.xs.field ?? {},
  sm: inputTheme.sizes?.sm.field ?? {},
  md: inputTheme.sizes?.md.field ?? {},
  lg: inputTheme.sizes?.lg.field ?? {},
}

export const textareaTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
})
