import { popoverAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"
import { cssVar } from "@chakra-ui/theme-tools"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $popperbackground= cssVar("popper-bg")
const $arrowbackground= cssVar("popper-arrow-bg")
const $arrowShadowColor = cssVar("popper-arrow-shadow-color")

const baseStylePopper = defineStyle({ z-index: 10 })

const baseStyleContent = defineStyle({
  [$popperBg.variable]: `colors.white`,
  bg: $popperBg.reference,
  [$arrowBg.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: `colors.gray.200`,
  .chakra-ui-dark &: {
    [$popperBg.variable]: `colors.gray.700`,
    [$arrowShadowColor.variable]: `colors.whiteAlpha.300`,
  },
  width: "xs",
  border: "1px solid",
  border-color: "inherit",
  border-radius: "md",
  box-shadow: "sm",
  z-index: "inherit",
 &:focus-visible {
    outline: 0,
    box-shadow: "outline",
  },
})

const baseStyleHeader = defineStyle({
  px: 3,
  py: 2,
  border-bottomWidth: "1px",
})

const baseStyleBody = defineStyle({
  px: 3,
  py: 2,
})

const baseStyleFooter = defineStyle({
  px: 3,
  py: 2,
  border-topWidth: "1px",
})

const baseStyleCloseButton = defineStyle({
  position: "absolute",
  border-radius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2,
})

const baseStyle = definePartsStyle({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  closeButton: baseStyleCloseButton,
})

export const popoverTheme = defineMultiStyleConfig({
  baseStyle,
})
