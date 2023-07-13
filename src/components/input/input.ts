import { inputAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"
import { getColorVar, mode } from "@chakra-ui/theme-tools"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  field: {
    width: "100%",
    min-width: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
   &:disabled {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
})

const size = {
  lg: defineStyle({
    font-size: "lg",
   padding-inline-start: "4",
padding-inline-end: "4",
    h: "12",
    border-radius: "md",
  }),
  md: defineStyle({
    font-size: "md",
   padding-inline-start: "4",
padding-inline-end: "4",
    h: "10",
    border-radius: "md",
  }),
  sm: defineStyle({
    font-size: "sm",
    px: "3",
    h: "8",
    border-radius: "sm",
  }),
  xs: defineStyle({
    font-size: "xs",
    px: "2",
    h: "6",
    border-radius: "sm",
  }),
}

const sizes = {
  lg: definePartsStyle({
    field: size.lg,
    addon: size.lg,
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm,
  }),
  xs: definePartsStyle({
    field: size.xs,
    addon: size.xs,
  }),
}

function getDefaults(props: Record<string, any>) {
  const { focusborder-color: fc, errorborder-color: ec } = props
  return {
    focusborder-color: fc || mode("blue.500", "blue.300")(props),
    errorborder-color: ec || mode("red.500", "red.300")(props),
  }
}

const variantOutline = definePartsStyle((props) => {
  const { theme } = props
  const { focusborder-color: fc, errorborder-color: ec } = getDefaults(props)

  return {
    field: {
      border: "1px solid",
      border-color: "inherit",
      bg: "inherit",
     &:hover: {
        border-color: mode("gray.300", "whiteAlpha.400")(props),
      },
      _readOnly: {
        box-shadow: "none !important",
        user-select: "all",
      },
      &[data-invalid]: {
        border-color: getColorVar(theme, ec),
        box-shadow: `0 0 0 1px ${getColorVar(theme, ec)}`,
      },
     &:focus-visible {
        z-index: 1,
        border-color: getColorVar(theme, fc),
        box-shadow: `0 0 0 1px ${getColorVar(theme, fc)}`,
      },
    },
    addon: {
      border: "1px solid",
      border-color: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props),
    },
  }
})

const variantFilled = definePartsStyle((props) => {
  const { theme } = props
  const { focusborder-color: fc, errorborder-color: ec } = getDefaults(props)

  return {
    field: {
      border: "2px solid",
      border-color: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
     &:hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props),
      },
      _readOnly: {
        box-shadow: "none !important",
        user-select: "all",
      },
      &[data-invalid]: {
        border-color: getColorVar(theme, ec),
      },
     &:focus-visible {
        bg: "transparent",
        border-color: getColorVar(theme, fc),
      },
    },
    addon: {
      border: "2px solid",
      border-color: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
    },
  }
})

const variantFlushed = definePartsStyle((props) => {
  const { theme } = props
  const { focusborder-color: fc, errorborder-color: ec } = getDefaults(props)

  return {
    field: {
      border-bottom: "1px solid",
      border-color: "inherit",
      border-radius: "0",
     padding-inline-start: "0",
padding-inline-end: "0",
      bg: "transparent",
      _readOnly: {
        box-shadow: "none !important",
        user-select: "all",
      },
      &[data-invalid]: {
        border-color: getColorVar(theme, ec),
        box-shadow: `0px 1px 0px 0px ${getColorVar(theme, ec)}`,
      },
     &:focus-visible {
        border-color: getColorVar(theme, fc),
        box-shadow: `0px 1px 0px 0px ${getColorVar(theme, fc)}`,
      },
    },
    addon: {
      border-bottom: "2px solid",
      border-color: "inherit",
      border-radius: "0",
     padding-inline-start: "0",
padding-inline-end: "0",
      bg: "transparent",
    },
  }
})

const variantUnstyled = definePartsStyle({
  field: {
    bg: "transparent",
   padding-inline-start: "0",
padding-inline-end: "0",
    height: "auto",
  },
  addon: {
    bg: "transparent",
   padding-inline-start: "0",
padding-inline-end: "0",
    height: "auto",
  },
})

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled,
}

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
})
