import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  opacity: 0.6,
  border-color: "inherit",
})

const variantSolid = defineStyle({
 border-style: "solid",
})

const variantDashed = defineStyle({
 border-style: "dashed",
})

const variants = {
  solid: variantSolid,
  dashed: variantDashed,
}

export const dividerTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "solid",
  },
})
