import { defineStyle, defineStyleConfig 


const $size = cssVar("spinner-size")

const baseStyle = defineStyle({
  width: [$size.reference],
  height: [$size.reference],
})

const sizes = {
  xs: defineStyle({
    [$size.variable]: "sizes.3",
  }),
  sm: defineStyle({
    [$size.variable]: "sizes.4",
  }),
  md: defineStyle({
    [$size.variable]: "sizes.6",
  }),
  lg: defineStyle({
    [$size.variable]: "sizes.8",
  }),
  xl: defineStyle({
    [$size.variable]: "sizes.12",
  }),
}

export const spinnerTheme = defineStyleConfig({
    sizes,
  
    size: "md",
  },
})
