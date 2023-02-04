import tokenStudioChakra from './tokenStudioChakra.json'
  
export default {
    colors: {
      "btn-bg": {
        // default: tokenStudioChakra.colors['st-light']["btn-primary-default-background-color"],
        default: "#ff00ff",
        _dark: tokenStudioChakra.colors['st-light']["btn-primary-default-background-color"],
      },
      "btn-fg": {
        // default: tokenStudioChakra.colors['st-light']["btn-primary-default-text-color"],
        default: "#ffff00",
        _dark: tokenStudioChakra.colors['st-light']["btn-primary-default-text-color"],
      }
    }
  }
  