



const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const filledStyle = defineStyle((props) => {
  const { colorScheme: c, theme: t, isIndeterminate, hasStripe } = props

  const stripeStyle = mode(
    generateStripe(),
    generateStripe("1rem", "rgba(0,0,0,0.1)"),
  )(props)

  const background-color = mode(`${c}.500`, `${c}.200`)(props)

  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColorVar(t, background-color)} 50%,
    transparent 100%
  )`

  const addStripe = !isIndeterminate && hasStripe

  return {
    ...(addStripe && stripeStyle),
    ...(isIndeterminate ? { bgImage: gradient } : { background-color }),
  }
})

const baseStyleLabel = defineStyle({
  line-height: "1",
  font-size: "0.25em",
  font-weight: "bold",
  color: "white",
})

const baseStyleTrack = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props),
  }
})

const baseStyleFilledTrack = defineStyle((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props),
  }
})

const baseStyle = definePartsStyle((props) => ({
  label: baseStyleLabel,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props),
}))

const sizes = {
  xs: definePartsStyle({
    track: { h: "1" },
  }),
  sm: definePartsStyle({
    track: { h: "2" },
  }),
  md: definePartsStyle({
    track: { h: "3" },
  }),
  lg: definePartsStyle({
    track: { h: "4" },
  }),
}

  sizes,
    
    size: "md",
    colorScheme: "blue",
  },
})
