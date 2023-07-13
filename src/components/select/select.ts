

  defineStyle,

import { inputTheme } from "./input"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $background= cssVar("select-bg")

const baseStyleField = defineStyle({
  ...inputTheme.baseStyle?.field,
  appearance: "none",
  padding-bottom: "1px",
  line-height: "normal",
  background: $bg.reference,
  [$bg.variable]: "colors.white",
  .chakra-ui-dark &: {
    [$bg.variable]: "colors.gray.700",
  },
  "> option, > optgroup": {
    background: $bg.reference,
  },
})

const baseStyleIcon = defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  font-size: "xl",
 &:disabled {
    opacity: 0.5,
  },
})


  field: baseStyleField,
  
})

const iconSpacing = defineStyle({
  paddingInlineEnd: "8",
})

const sizes = {
  lg: {
    ...inputTheme.sizes?.lg,
    field: {
      ...inputTheme.sizes?.lg.field,
      ...iconSpacing,
    },
  },
  md: {
    ...inputTheme.sizes?.md,
    field: {
      ...inputTheme.sizes?.md.field,
      ...iconSpacing,
    },
  },
  sm: {
    ...inputTheme.sizes?.sm,
    field: {
      ...inputTheme.sizes?.sm.field,
      ...iconSpacing,
    },
  },
  xs: {
    ...inputTheme.sizes?.xs,
    field: {
      ...inputTheme.sizes?.xs.field,
      ...iconSpacing,
    },
    icon: {
      insetEnd: "1",
    },
  },
}

    sizes,
  variants: inputTheme.  defaultProps: inputTheme.defaultProps,
})
