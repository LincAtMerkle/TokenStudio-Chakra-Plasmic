import { defineStyle, defineStyleConfig 
import { inputTheme } from "./input"
import { runIfFn } from "../utils/run-if-fn"

const baseStyle = defineStyle({
  ...inputTheme.baseStyle?.field,
  text-align: "center",
})

const sizes = {
  lg: defineStyle({
    font-size: "lg",
    w: 12,
    h: 12,
    border-radius: "md",
  }),
  md: defineStyle({
    font-size: "md",
    w: 10,
    h: 10,
    border-radius: "md",
  }),
  sm: defineStyle({
    font-size: "sm",
    w: 8,
    h: 8,
    border-radius: "sm",
  }),
  xs: defineStyle({
    font-size: "xs",
    w: 6,
    h: 6,
    border-radius: "sm",
  }),
}


  outline: defineStyle(
    (props) => runIfFn(inputTheme.variants?.outline, props)?.field ?? {},
  ),
  flushed: defineStyle(
    (props) => runIfFn(inputTheme.variants?.flushed, props)?.field ?? {},
  ),
  filled: defineStyle(
    (props) => runIfFn(inputTheme.variants?.filled, props)?.field ?? {},
  ),
  unstyled: inputTheme.variants?.unstyled.field ?? {},
}

export const pinInputTheme = defineStyleConfig({
    sizes,
    defaultProps: inputTheme.defaultProps,
})
