import { defineStyle, defineStyleConfig 

const baseStyle = defineStyle({
  opacity: 0.6,
  border-color: "inherit",
})

const variantSolid = defineStyle({
 border-style: "solid",
})

const variantDashed = defineStyle({
 border-style: "dashed",
})


  solid: variantSolid,
  dashed: variantDashed,
}

export const dividerTheme = defineStyleConfig({
      
    variant: "solid",
  },
})
