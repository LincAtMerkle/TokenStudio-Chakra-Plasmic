import {
  cssVar,
  defineStyle,
  defineStyleConfig,


const $startColor = cssVar("skeleton-start-color")
const $endColor = cssVar("skeleton-end-color")

const baseStyle = defineStyle({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  .chakra-ui-dark &: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600",
  },
  background: $startColor.reference,
  border-color: $endColor.reference,
  opacity: 0.7,
  border-radius: "sm",
})

export const skeletonTheme = defineStyleConfig({
  })
