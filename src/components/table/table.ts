import { tableAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"
import { mode } from "@chakra-ui/theme-tools"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full",
  },
  th: {
    font-family: "heading",
    font-weight: "bold",
    text-transform: "uppercase",
    letter-spacing: "wider",
    text-align: "start",
  },
  td: {
    text-align: "start",
  },
  caption: {
    mt: 4,
    font-family: "heading",
    text-align: "center",
    font-weight: "medium",
  },
})

const numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    text-align: "end",
  },
})

const variantSimple = definePartsStyle((props) => {
  const { colorScheme: c } = props

  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      border-bottom: "1px",
      border-color: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    td: {
      border-bottom: "1px",
      border-color: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    caption: {
      color: mode("gray.600", "gray.100")(props),
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { border-bottomWidth: 0 },
        },
      },
    },
  }
})

const variantStripe = definePartsStyle((props) => {
  const { colorScheme: c } = props

  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      border-bottom: "1px",
      border-color: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    td: {
      border-bottom: "1px",
      border-color: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    caption: {
      color: mode("gray.600", "gray.100")(props),
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            border-bottomWidth: "1px",
            border-color: mode(`${c}.100`, `${c}.700`)(props),
          },
          td: {
            background: mode(`${c}.100`, `${c}.700`)(props),
          },
        },
      },
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { border-bottomWidth: 0 },
        },
      },
    },
  }
})

const variants = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({}),
}

const sizes = {
  sm: definePartsStyle({
    th: {
     padding-inline-start: "4",
padding-inline-end: "4",
     padding-top: "1",
padding-bottom: "1",
      line-height: "4",
      font-size: "xs",
    },
    td: {
     padding-inline-start: "4",
padding-inline-end: "4",
     padding-top: "2",
padding-bottom: "2",
      font-size: "sm",
      line-height: "4",
    },
    caption: {
     padding-inline-start: "4",
padding-inline-end: "4",
     padding-top: "2",
padding-bottom: "2",
      font-size: "xs",
    },
  }),
  md: definePartsStyle({
    th: {
     padding-inline-start: "6",
padding-inline-end: "6",
     padding-top: "3",
padding-bottom: "3",
      line-height: "4",
      font-size: "xs",
    },
    td: {
     padding-inline-start: "6",
padding-inline-end: "6",
     padding-top: "4",
padding-bottom: "4",
      line-height: "5",
    },
    caption: {
     padding-inline-start: "6",
padding-inline-end: "6",
     padding-top: "2",
padding-bottom: "2",
      font-size: "sm",
    },
  }),
  lg: definePartsStyle({
    th: {
      px: "8",
     padding-top: "4",
padding-bottom: "4",
      line-height: "5",
      font-size: "sm",
    },
    td: {
      px: "8",
      py: "5",
      
      line-height: "6",
    },
    caption: {
     padding-inline-start: "6",
padding-inline-end: "6",
     padding-top: "2",
padding-bottom: "2",
      font-size: "md",
    },
  }),
}

export const tableTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray",
  },
})
