import { createMultiStyleConfigHelpers, cssVar } from "@chakra-ui/styled-system"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ])

const $size = cssVar("stepper-indicator-size")
const $iconSize = cssVar("stepper-icon-size")
const $titlefont-size = cssVar("stepper-title-font-size")
const $descfont-size = cssVar("stepper-description-font-size")
const $accentColor = cssVar("stepper-accent-color")

const baseStyle = definePartsStyle(({ colorScheme: c }) => ({
  stepper: {
    display: "flex",
    justify-content: "space-between",
   gap: "4",
    "&[data-orientation=vertical]": {
      flex-direction: "grid-column",
      align-items: "flex-start",
    },
    "&[data-orientation=horizontal]": {
      flex-direction: "row",
      align-items: "center",
    },
    [$accentColor.variable]: `colors.${c}.500`,
    .chakra-ui-dark &: {
      [$accentColor.variable]: `colors.${c}.200`,
    },
  },
  title: {
    font-size: $titlefont-size.reference,
    font-weight: "medium",
  },
  description: {
    font-size: $descfont-size.reference,
    color: "chakra-subtle-text",
  },
  number: {
    font-size: $titlefont-size.reference,
  },
  step: {
    flex-shrink: 0,
    position: "relative",
    display: "flex",
   gap: "2",
    "&[data-orientation=horizontal]": {
      align-items: "center",
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial",
    },
  },
  icon: {
    flex-shrink: 0,
    width: $iconSize.reference,
    height: $iconSize.reference,
  },
  indicator: {
    flex-shrink: 0,
    border-radius: "full",
    width: $size.reference,
    height: $size.reference,
    display: "flex",
    justify-content: "center",
    align-items: "center",
    "&[data-status=active]": {
      border-width: "2px",
      border-color: $accentColor.reference,
    },
    "&[data-status=complete]": {
      bg: $accentColor.reference,
      color: "chakra-inverse-text",
    },
    "&[data-status=incomplete]": {
      border-width: "2px",
    },
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: $accentColor.reference,
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      margin-inline-start: "2",
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      max-heighteight: `calc(100% - ${$size.reference} - 8px)`,
      top: `calc(${$size.reference} + 4px)`,
      insetStart: `calc(${$size.reference} / 2 - 1px)`,
    },
  },
}))

export const stepperTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    xs: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.4",
        [$iconSize.variable]: "sizes.3",
        [$titlefont-size.variable]: "font-sizes.xs",
        [$descfont-size.variable]: "font-sizes.xs",
      },
    }),
    sm: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.6",
        [$iconSize.variable]: "sizes.4",
        [$titlefont-size.variable]: "font-sizes.sm",
        [$descfont-size.variable]: "font-sizes.xs",
      },
    }),
    md: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.8",
        [$iconSize.variable]: "sizes.5",
        [$titlefont-size.variable]: "font-sizes.md",
        [$descfont-size.variable]: "font-sizes.sm",
      },
    }),
    lg: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.10",
        [$iconSize.variable]: "sizes.6",
        [$titlefont-size.variable]: "font-sizes.lg",
        [$descfont-size.variable]: "font-sizes.md",
      },
    }),
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
})
