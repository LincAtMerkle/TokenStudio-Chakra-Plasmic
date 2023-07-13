import { defineStyle, defineStyleConfig 

const baseStyle = defineStyle({
  font-size: "md",
  margin-inline-end: "3",
  margin-bottom: "2",
  font-weight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
 &:disabled {
    opacity: 0.4,
  },
})

export const formLabelTheme = defineStyleConfig({
  })
