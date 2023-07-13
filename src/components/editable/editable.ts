




const baseStylePreview = defineStyle({
  border-radius: "md",
 padding-top: "1",
padding-bottom: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
})

const baseStyleInput = defineStyle({
  border-radius: "md",
 padding-top: "1",
padding-bottom: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
 &:focus-visible { box-shadow: "outline" },
  &::placeholder: { opacity: 0.6 },
})

const baseStyleTextarea = defineStyle({
  border-radius: "md",
 padding-top: "1",
padding-bottom: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
 &:focus-visible { box-shadow: "outline" },
  &::placeholder: { opacity: 0.6 },
})


  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea,
})

  })
