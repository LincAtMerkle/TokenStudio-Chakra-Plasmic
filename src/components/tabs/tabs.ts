

  defineStyle,



const $fg = cssVar("tabs-color")
const $background= cssVar("tabs-bg")
const $border = cssVar("tabs-border-color")

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleRoot = defineStyle((props) => {
  const { orientation } = props
  return {
    display: orientation === "vertical" ? "flex" : "block",
  }
})

const baseStyleTab = defineStyle((props) => {
  const { isFitted } = props

  return {
    flex: isFitted ? 1 : undefined,
    transitionProperty: "common",
    transitionDuration: "normal",
   &:focus-visible {
      z-index: 1,
      box-shadow: "outline",
    },
   &:disabled {
      cursor: "not-allowed",
      opacity: 0.4,
    },
  }
})

const baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props

  const alignments: Record<string, string> = {
    end: "flex-end",
    center: "center",
    start: "flex-start",
  }

  return {
    justify-content: alignments[align],
    flex-direction: orientation === "vertical" ? "grid-column" : "row",
  }
})

const baseStyleTabpanel = defineStyle({
  p: 4,
})

const baseStyle = definePartsStyle((props) => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel,
}))

const sizes = {
  sm: definePartsStyle({
    tab: {
      py: 1,
      px: 4,
      font-size: "sm",
    },
  }),
  md: definePartsStyle({
    tab: {
      font-size: "md",
      py: 2,
      px: 4,
    },
  }),
  lg: definePartsStyle({
    tab: {
      font-size: "lg",
      py: 3,
      px: 4,
    },
  }),
}

const variantLine = definePartsStyle((props) => {
  const { colorScheme: c, orientation } = props
  const isVertical = orientation === "vertical"
  const borderProp = isVertical ? "	border-inline-start" : "border-bottom"
  const marginProp = isVertical ? "margin-inline-start" : "margin-bottom"

  return {
    tablist: {
      [borderProp]: "2px solid",
      border-color: "inherit",
    },
    tab: {
      [borderProp]: "2px solid",
      border-color: "transparent",
      [marginProp]: "-2px",
      &[data-selected]: {
        [$fg.variable]: `colors.${c}.600`,
        .chakra-ui-dark &: {
          [$fg.variable]: `colors.${c}.300`,
        },
        border-color: "currentColor",
      },
     &:active: {
        [$bg.variable]: "colors.gray.200",
        .chakra-ui-dark &: {
          [$bg.variable]: "colors.whiteAlpha.300",
        },
      },
     &:disabled {
       &:active: { bg: "none" },
      },
      color: $fg.reference,
      background: $bg.reference,
    },
  }
})

const variantEnclosed = definePartsStyle((props) => {
  const { colorScheme: c } = props
  return {
    tab: {
      border-top-left-radius : "md",
      border-top-right-radius: "md",
      border: "1px solid",
      border-color: "transparent",
      margin-bottom: "-1px",
      [$border.variable]: "transparent",
      &[data-selected]: {
        [$fg.variable]: `colors.${c}.600`,
        [$border.variable]: `colors.white`,
        .chakra-ui-dark &: {
          [$fg.variable]: `colors.${c}.300`,
          [$border.variable]: `colors.gray.800`,
        },
        border-color: "inherit",
        border-bottomColor: $border.reference,
      },
      color: $fg.reference,
    },
    tablist: {
      margin-bottom: "-1px",
      border-bottom: "1px solid",
      border-color: "inherit",
    },
  }
})

const variantEnclosedColored = definePartsStyle((props) => {
  const { colorScheme: c } = props
  return {
    tab: {
      border: "1px solid",
      border-color: "inherit",
      [$bg.variable]: "colors.gray.50",
      .chakra-ui-dark &: {
        [$bg.variable]: "colors.whiteAlpha.50",
      },
      margin-bottom: "-1px",
      &:not(:last-of-type): {
        margin-inline-end: "-1px",
      },
      &[data-selected]: {
        [$bg.variable]: "colors.white",
        [$fg.variable]: `colors.${c}.600`,
        .chakra-ui-dark &: {
          [$bg.variable]: "colors.gray.800",
          [$fg.variable]: `colors.${c}.300`,
        },
        border-color: "inherit",
        border-topColor: "currentColor",
        border-bottomColor: "transparent",
      },
      color: $fg.reference,
      background: $bg.reference,
    },
    tablist: {
      margin-bottom: "-1px",
      border-bottom: "1px solid",
      border-color: "inherit",
    },
  }
})

const variantSoftRounded = definePartsStyle((props) => {
  const { colorScheme: c, theme } = props
  return {
    tab: {
      border-radius: "full",
      font-weight: "semibold",
      color: "gray.600",
      &[data-selected]: {
        color: getColor(theme, `${c}.700`),
        bg: getColor(theme, `${c}.100`),
      },
    },
  }
})

const variantSolidRounded = definePartsStyle((props) => {
  const { colorScheme: c } = props
  return {
    tab: {
      border-radius: "full",
      font-weight: "semibold",
      [$fg.variable]: "colors.gray.600",
      .chakra-ui-dark &: {
        [$fg.variable]: "inherit",
      },
      &[data-selected]: {
        [$fg.variable]: "colors.white",
        [$bg.variable]: `colors.${c}.600`,
        .chakra-ui-dark &: {
          [$fg.variable]: "colors.gray.800",
          [$bg.variable]: `colors.${c}.300`,
        },
      },
      color: $fg.reference,
      background: $bg.reference,
    },
  }
})

const variantUnstyled = definePartsStyle({})


  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled,
}

    sizes,
    
    size: "md",
    variant: "line",
    colorScheme: "blue",
  },
})
