import {
  cssVar,
  defineStyle,
  defineStyleConfig,


const $background= cssVar("skip-link-bg")

const baseStyle = defineStyle({
  border-radius: "md",
  font-weight: "semibold",
 &:focus-visible {
    box-shadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg.variable]: "colors.white",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.gray.700",
    },
    background: $bg.reference,
  },
})

export const skipLinkTheme = defineStyleConfig({
  })
