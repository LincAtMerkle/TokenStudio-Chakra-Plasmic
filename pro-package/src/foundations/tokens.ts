import tokenStudioChakra from './tokenStudioChakra.json'
  
export default {
    colors: {
      "btn-bg": {
        default: tokenStudioChakra.colors['light']["btn-primary-default-background-color"],
        _dark: tokenStudioChakra.colors['light']["btn-primary-default-background-color"],
      },
      "btn-fg": {
        default: tokenStudioChakra.colors['light']["btn-primary-default-text-color"],
        _dark: tokenStudioChakra.colors['light']["btn-primary-default-text-color"],
      }
    }
  }
  