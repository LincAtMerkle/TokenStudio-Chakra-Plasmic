//@ts-nocheck

interface SemanticTokens {
    colors: Record<string, any>
    radii: Record<string, any>
    shadows: Record<string, any>
    fontSizes: Record<string, any>
    borders: Record<string, any>
    sizes: Record<string, any>
    fonts: Record<string, any>
    space: Record<string, any>
    lineHeights: Record<string, any>
    fontWeights: Record<string, any>
  }
  
  const getChakraSemanticTokens = (figmaTokens: any): SemanticTokens => {
    const semanticTokens: SemanticTokens = {
      radii: {},
      colors: {},
      shadows: {},
      fonts: {},
      fontWeights: {},
      space: {},
      lineHeights: {},
      sizes: {},
      borders: {},
      fontSizes: {}
    }
  
    for (const category in figmaTokens) {
      console.log("category: " + category)
      for (const property in figmaTokens[category]) {
        console.log("figmaTokens[category]: " + figmaTokens[category])
        if (category === 'colors') {
          // console.log("**** category: " + category)
          // console.log("**** category.hm-light: " + category.all["hm-light"])
          // console.log("XXXXXXX category.hmlight: " + category.hmlight)
          
          //
          //
          //          
          console.log("***HERE: "+JSON.stringify(category["light"]));
          //
          //
          //



          for (const token in figmaTokens[category]["hm-light"]) {
            semanticTokens[category][token] = {
              default: figmaTokens[category]["hm-light"][token],
              _dark: figmaTokens[category]["hm-dark"][token]
            }
          }
        } else {
          const tokens = figmaTokens[category]["hm-light"] || figmaTokens[category]
  
          for (const token in tokens) {
            semanticTokens[category][token] = tokens[token]
          }
        }
      }
    }
    return semanticTokens
  }
  
  export default getChakraSemanticTokens
  