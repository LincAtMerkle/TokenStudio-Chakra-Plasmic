

  defineStyle,


const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $decor = cssVar("breadcrumb-link-decor")

const baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  text-decoration: $decor.reference,
  [$decor.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
   &:hover: {
      [$decor.variable]: "underline",
    },
   &:focus-visible {
      box-shadow: "outline",
    },
  },
})


  link: baseStyleLink,
})

  })
