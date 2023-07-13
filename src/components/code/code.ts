import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"
import { badgeTheme, badgeVars as vars } from "./badge"

const { variants, defaultProps } = badgeTheme

const baseStyle = defineStyle({
  font-family: "mono",
  font-size: "sm",
 padding-inline-start: "0.2em",
padding-inline-end: "0.2em",
  border-radius: "sm",
  bg: vars.bg.reference,
  color: vars.color.reference,
  box-shadow: vars.shadow.reference,
})

export const codeTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps,
})
