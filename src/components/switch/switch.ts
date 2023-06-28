.switch__container {
  track: {
    border-radius: "100px",
    border-color: "switch-default-border-color",
    bg: "gray",
    _checked: {
      border-color: "switch-default-border-color",
      bg: "yellow",
    }

  }

  thumb: {
    border-radius: "switch-border-radius",
    border-color: "switch-thumb-unselected-default-background-color",
    bg: "red",
    _checked: {
      border-color: "switch-default-border-color",
      bg: "switch-thumb-selected-default-background-color",
    }

  }

};

// Three sizes: sm md and lg

.switch__sm {
    track: {
      height: "16px",
      width: "26px",
    }

    thumb: {
      height: "10px",
      width: "10px",
    }

  }

.switch__md {
    track: {
      height: "switch.md.height",
      width: "switch.md.width",
    }

    thumb: {
      height: "switch.md.thumb.height",
      width: "switch.md.thumb.width",
    }

  }

.switch__lg {
    track: {
      height: "switch.lg.height",
      width: "switch.lg.width",
    }

    thumb: {
      height: "switch.lg.thumb.height",
      width: "switch.lg.thumb.width",
    }

  }

};
// Two variants: Selected and UnSelected
//   variants: {
//     unSelected: {

//         _defaut:{
//             switch:{
//       background: var(--radio.unselected.default.background-color)
//             }

//             thumb:{
//       bg:'switch.thumb.unselected.default.background-color)
//             }
//         }


//       _disabled: {
//         switch:{
//         background: var(--radio.unselected.disabled.background-color)
//               }

//         thumb:{
//         bg:'switch.thumb.unselected.default.background-color)
//               }
//       }

//     }

//     selected: {

//         _default:{
//             switch:{
//       background: var(--radio.selected.default.background-color)
//             }

//         thumb:{
//       bg:'switch.thumb.selected.default.background-color)
//         }
//         }


//       _disabled: {
//         switch:{
//         background: var(--radio.selected.disabled.background-color)
//         }

//         thumb:{
//             bgThumb:'switch.thumb.selected.default.background-color)
//       }
//     }
//   }

//   // The default size and variant values
//   defaultProps: {
//     variant: var(--unchecked)
//   }
// }

