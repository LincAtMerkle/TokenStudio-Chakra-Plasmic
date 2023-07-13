

  defineStyle,



const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $thumbSize = cssVar("slider-thumb-size")
const $trackSize = cssVar("slider-track-size")
const $background= cssVar("slider-bg")

const baseStyleContainer = defineStyle((props) => {
  const { orientation } = props

  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
   &:disabled {
      opacity: 0.6,
      cursor: "default",
      pointer-events: "none",
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" },
    }),
  }
})

const baseStyleTrack = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference },
  })

  return {
    ...orientationStyles,
    overflow: "hidden",
    border-radius: "sm",
    [$bg.variable]: "colors.gray.200",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.whiteAlpha.200",
    },
   &:disabled {
      [$bg.variable]: "colors.gray.300",
      .chakra-ui-dark &: {
        [$bg.variable]: "colors.whiteAlpha.300",
      },
    },
    background: $bg.reference,
  }
})

const baseStyleThumb = defineStyle((props) => {
  const { orientation } = props
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
     &:active: {
        transform: `translateX(-50%) scale(1.15)`,
      },
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
     &:active: {
        transform: `translateY(-50%) scale(1.15)`,
      },
    },
  })

  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    align-items: "center",
    justify-content: "center",
    position: "absolute",
    outline: 0,
    z-index: 1,
    border-radius: "full",
    bg: "white",
    box-shadow: "base",
    border: "1px solid",
    border-color: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
   &:focus-visible {
      box-shadow: "outline",
    },
   &:disabled {
      bg: "gray.300",
    },
  }
})

const baseStyleFilledTrack = defineStyle((props) => {
  const { colorScheme: c } = props

  return {
    width: "inherit",
    height: "inherit",
    [$bg.variable]: `colors.${c}.500`,
    .chakra-ui-dark &: {
      [$bg.variable]: `colors.${c}.200`,
    },
    background: $bg.reference,
  }
})

const baseStyle = definePartsStyle((props) => ({
  container: baseStyleContainer(props),
  track: baseStyleTrack(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack(props),
}))

const sizeLg = definePartsStyle({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`,
  },
})

const sizeMd = definePartsStyle({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`,
  },
})

const sizeSm = definePartsStyle({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`,
  },
})

const sizes = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm,
}

    sizes,
  
    size: "md",
    colorScheme: "blue",
  },
})
