

import { runIfFn } from "../utils/run-if-fn"
import { checkboxTheme } from "./checkbox"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleControl = defineStyle((props) => {
  const controlStyle = runIfFn(checkboxTheme.baseStyle, props)?.control

  return {
    ...controlStyle,
    border-radius: "full",
    &[data-checked]: {
      ...controlStyle?.["&[data-checked]"],
      &::before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        border-radius: "50%",
        bg: "currentColor",
      },
    },
  }
})

const baseStyle = definePartsStyle((props) => ({
  label: checkboxTheme.baseStyle?.(props).label,
  container: checkboxTheme.baseStyle?.(props).container,
  control: baseStyleControl(props),
}))

const sizes = {
  md: definePartsStyle({
    control: { w: "4", h: "4" },
    label: { font-size: "md" },
  }),
  lg: definePartsStyle({
    control: { w: "5", h: "5" },
    label: { font-size: "lg" },
  }),
  sm: definePartsStyle({
    control: { width: "3", height: "3" },
    label: { font-size: "sm" },
  }),
}

    sizes,
  
    size: "md",
    colorScheme: "blue",
  },
})
