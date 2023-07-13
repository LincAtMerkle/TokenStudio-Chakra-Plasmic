


import typography from "../foundations/typography"
import { inputTheme } from "./input"
import { runIfFn } from "../utils/run-if-fn"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $stepperWidth = cssVar("number-input-stepper-width")

const $inputPadding = cssVar("number-input-input-padding")
const inputPaddingValue = calc($stepperWidth).add("0.5rem").toString()

const $background= cssVar("number-input-bg")
const $fg = cssVar("number-input-color")
const $border = cssVar("number-input-border-color")

const baseStyleRoot = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue,
})

const baseStyleField = defineStyle(
  (props) => runIfFn(inputTheme.baseStyle, props)?.field ?? {},
)

const baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference,
})

const baseStyleStepper = defineStyle({
  	border-inline-start: "1px solid",
  	border-inline-startColor: $border.reference,
  color: $fg.reference,
  background: $bg.reference,
  [$fg.variable]: "colors.chakra-body-text",
  [$border.variable]: "colors.chakra-border-color",
  .chakra-ui-dark &: {
    [$fg.variable]: "colors.whiteAlpha.800",
    [$border.variable]: "colors.whiteAlpha.300",
  },
 &:active: {
    [$bg.variable]: "colors.gray.200",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.whiteAlpha.300",
    },
  },
 &:disabled {
    opacity: 0.4,
    cursor: "not-allowed",
  },
})

const baseStyle = definePartsStyle((props) => ({
  root: baseStyleRoot,
  field: runIfFn(baseStyleField, props) ?? {},
  stepperGroup: baseStyleStepperGroup,
  stepper: baseStyleStepper,
}))

type font-size = keyof typeof typography.font-sizes

function getSize(size: font-size) {
  //@ts-expect-error
  const sizeStyle = inputTheme.sizes?.[size]

  const radius: Partial<Record<font-size, string>> = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm",
  }

  const _font-size = (sizeStyle.field?.font-size ?? "md") as font-size
  const font-size = typography.font-sizes[_font-size]

  return definePartsStyle({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      vertical-align: "top",
    },
    stepper: {
      font-size: calc(font-size).multiply(0.75).toString(),
      &:first-of-type: {
        border-top-right-radius: radius[size],
        border-top-left-radius: radius[size],
      },
      &:last-of-type: {
        border-bottomEndRadius: radius[size],
       margin-top: "-1px",
        border-topWidth: 1,
      },
    },
  })
}

const sizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
}

    sizes,
  variants: inputTheme.  defaultProps: inputTheme.defaultProps,
})
