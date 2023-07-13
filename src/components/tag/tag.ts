

  defineStyle,

import { badgeTheme, badgeVars } from "./badge"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $background= cssVar("tag-bg")
const $color = cssVar("tag-color")
const $shadow = cssVar("tag-shadow")
const $min-height = cssVar("tag-min-height")
const $min-width = cssVar("tag-min-width")
const $font-size = cssVar("tag-font-size")
const $paddingX = cssVar("tag-padding-inline")

const baseStyleContainer = defineStyle({
  font-weight: "medium",
  line-height: 1.2,
  outline: 0,
  [$color.variable]: badgeVars.color.reference,
  [$bg.variable]: badgeVars.bg.reference,
  [$shadow.variable]: badgeVars.shadow.reference,
  color: $color.reference,
  background: $bg.reference,
  box-shadow: $shadow.reference,
  border-radius: "md",
  min-height: $min-height.reference,
  min-width: $min-width.reference,
  font-size: $font-size.reference,
  px: $paddingX.reference,
 &:focus-visible {
    [$shadow.variable]: "shadows.outline",
  },
})

const baseStyleLabel = defineStyle({
  line-height: 1.2,
  overflow: "visible",
})

const baseStyleCloseButton = defineStyle({
  font-size: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  border-radius: "full",
  margin-inline-start: "1.5",
  margin-inline-end: "-1",
  opacity: 0.5,
 &:disabled {
    opacity: 0.4,
  },
 &:focus-visible {
    box-shadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)",
  },
 &:hover: {
    opacity: 0.8,
  },
 &:active: {
    opacity: 1,
  },
})


  
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton,
})

const sizes = {
  sm: definePartsStyle({
    container: {
      [$min-height.variable]: "sizes.5",
      [$min-width.variable]: "sizes.5",
      [$font-size.variable]: "font-sizes.xs",
      [$paddingX.variable]: "space.2",
    },
    closeButton: {
      margin-inline-end: "-2px",
      margin-inline-start: "0.35rem",
    },
  }),
  md: definePartsStyle({
    container: {
      [$min-height.variable]: "sizes.6",
      [$min-width.variable]: "sizes.6",
      [$font-size.variable]: "font-sizes.sm",
      [$paddingX.variable]: "space.2",
    },
  }),
  lg: definePartsStyle({
    container: {
      [$min-height.variable]: "sizes.8",
      [$min-width.variable]: "sizes.8",
      [$font-size.variable]: "font-sizes.md",
      [$paddingX.variable]: "space.3",
    },
  }),
}


  subtle: definePartsStyle((props) => ({
    container: badgeTheme.variants?.subtle(props),
  })),
  solid: definePartsStyle((props) => ({
    container: badgeTheme.variants?.solid(props),
  })),
  outline: definePartsStyle((props) => ({
    container: badgeTheme.variants?.outline(props),
  })),
}

      sizes,
  
    size: "md",
    variant: "subtle",
    colorScheme: "gray",
  },
})
