


const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleLabel = defineStyle({
  font-weight: "medium",
})

const baseStyleHelpText = defineStyle({
  opacity: 0.8,
  margin-bottom: "2",
})

const baseStyleNumber = defineStyle({
  vertical-align: "baseline",
  font-weight: "semibold",
})

const baseStyleIcon = defineStyle({
  margin-inline-end: 1,
  w: "3.5",
  h: "3.5",
  vertical-align: "middle",
})


  container: {},
  label: baseStyleLabel,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  
})

const sizes = {
  md: definePartsStyle({
    label: { font-size: "sm" },
    helpText: { font-size: "sm" },
    number: { font-size: "2xl" },
  }),
}

    sizes,
  
    size: "md",
  },
})
