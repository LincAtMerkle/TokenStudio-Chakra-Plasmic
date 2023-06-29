import {
    darken;
    mode;
    StyleFunctionProps;
    transparentize
  }
 from "@chakra-ui/theme-tools";
  
  .button__container {
    /*The styles all button have in common*/
    font-weight: "btn-font-weight";
    
    text-transform: "uppercase";
    width: "auto";
    border-radius: "btn-border-radius";
    font-family: "btn-font-family";
    border: "btn-border-width";
    border-style: "solid"
  }
;
  
  
    /*Four sizes: xs,sm,md and large*/
  .button__xs {
      padding-left: "btn-xs-padding-left";
      padding-right: "btn-xs-padding-right";
      height: "btn-xs-height";
      font-size: "btn-xs-text-size";
    }

  .button__sm {
      padding-left: "btn-sm-padding-left";
      padding-right: "btn-sm-padding-right";
      height: "btn-sm-height";
      font-size: "btn-sm-text-size";
    }

  .button__md {
      padding-left: "btn-md-padding-left";
      padding-right: "btn-md-padding-right";
      height: "btn-md-height";
      font-size: "btn-md-text-size";
    }

  .button__lg {
      padding-left: "btn-lg-padding-left";
      padding-right: "btn-lg-padding-right";
      height: "btn-lg-height";
      font-size: "btn-lg-text-size";
    }


  
  
    /*Two variants: outline and solid*/
    primary1: {
      background: var(--#ff00ff);
      /*bg: "btn-primary1-default-background-color";*/
      color: "btn-primary1-default-text-color";
      border-color: "btn-primary1-default-border-color";
      iconColor: "btn-primary1-default-icon-color";
      ._hover {
        background: "btn-primary1-hover-background-color";
        color: "btn-primary1-hover-text-color";
        border-color: "btn-primary1-hover-border-color";
        iconColor: "btn-primary1-hover-icon-color";
      }

      ._active {
        background: "btn-primary1-active-background-color";
        color: "btn-primary1-active-text-color";
        border-color: "btn-primary1-active-border-color";
        iconColor: "btn-primary1-active-icon-color";
      }

      ._disabled {
        background: "btn-primary1-disabled-background-color";
        color: "btn-primary1-disabled-text-color";
        border-color: "btn-primary1-disabled-border-color";
        iconColor: "btn-primary1-disabled-icon-color";
      }

    }

    primary2: {
      /*background: var(--btn-primary-default-background-color);*/
      background: "btn-primary2-default-background-color";
      color: "btn-primary2-default-text-color";
      border-color: "btn-primary2-default-border-color";
      iconColor: "btn-primary2-default-icon-color";
      ._hover {
        background: "btn-primary2-hover-background-color";
        color: "btn-primary2-hover-text-color";
        border-color: "btn-primary2-hover-border-color";
        iconColor: "btn-primary2-hover-icon-color";
      }

      ._active {
        background: "btn-primary2-active-background-color";
        color: "btn-primary2-active-text-color";
        border-color: "btn-primary2-active-border-color";
        iconColor: "btn-primary2-active-icon-color";
      }

      ._disabled {
        background: "btn-primary2-disabled-background-color";
        color: "btn-primary2-disabled-text-color";
        border-color: "btn-primary2-disabled-border-color";
        iconColor: "btn-primary2-disabled-icon-color";
      }

    }

    secondary1: {
      background: "btn-secondary1-default-background-color";
      color: "btn-secondary1-default-text-color";
      border-color: "btn-secondary1-default-border-color";
      iconColor: "btn-secondary1-default-icon-color";
      ._hover {
        background: "btn-secondary1-hover-background-color";
        color: "btn-secondary1-hover-text-color";
        border-color: "btn-secondary1-hover-border-color";
        iconColor: "btn-secondary1-hover-icon-color";
      }

      ._active {
        background: "btn-secondary1-active-background-color";
        color: "btn-secondary1-active-text-color";
        border-color: "btn-secondary1-active-border-color";
        iconColor: "btn-secondary1-active-icon-color";
      }

      ._disabled {
        background: "btn-secondary1-disabled-background-color";
        color: "btn-secondary1-disabled-text-color";
        border-color: "btn-secondary1-disabled-border-color";
        iconColor: "btn-secondary1-disabled-icon-color";
      }

    }

    secondary2: {
      background: "btn-secondary2-default-background-color";
      color: "btn-secondary2-default-text-color";
      border-color: "btn-secondary2-default-border-color";
      iconColor: "btn-secondary2-default-icon-color";
      ._hover {
        background: "btn-secondary2-hover-background-color";
        color: "btn-secondary2-hover-text-color";
        border-color: "btn-secondary2-hover-border-color";
        iconColor: "btn-secondary2-hover-icon-color";
      }

      ._active {
        background: "btn-secondary2-active-background-color";
        color: "btn-secondary2-active-text-color";
        border-color: "btn-secondary2-active-border-color";
        iconColor: "btn-secondary2-active-icon-color";
      }

      ._disabled {
        background: "btn-secondary2-disabled-background-color";
        color: "btn-secondary2-disabled-text-color";
        border-color: "btn-secondary2-disabled-border-color";
        iconColor: "btn-secondary2-disabled-icon-color";
      }

    }

    negative: {
      background: "btn-negative-default-background-color";
      color: "btn-negative-default-text-color";
      border-color: "btn-negative-default-border-color";
      iconColor: "btn-negative-default-icon-color";
      ._hover {
        background: "btn-negative-hover-background-color";
        color: "btn-negative-hover-text-color";
        border-color: "btn-negative-hover-border-color";
        iconColor: "btn-negative-hover-icon-color";
      }

      _acive: {
        background: "btn-negative-acive-background-color";
        color: "btn-negative-acive-text-color";
        border-color: "btn-negative-active-border-color";
        iconColor: "btn-negative-active-icon-color";
      }

      ._disabled {
        background: "btn-negative-disabled-background-color";
        color: "btn-negative-disabled-text-color";
        border-color: "btn-negative-disabled-border-color";
        iconColor: "btn-negative-disabled-icon-color";
      }

    }

    ghost: {
      background: "btn-ghost-default-background-color";
      color: "btn-ghost-default-text-color";
      border-color: "btn-ghost-default-border-color";
      iconColor: "btn-ghost-default-icon-color";
      ._hover {
        background: "btn-ghost-hover-background-color";
        color: "btn-ghost-hover-text-color";
        border-color: "btn-ghost-hover-border-color";
        iconColor: "btn-ghost-hover-icon-color";
      }

      _acive: {
        background: "btn-ghost-acive-background-color";
        color: "btn-ghost-acive-text-color";
        border-color: "btn-ghost-active-border-color";
        iconColor: "btn-ghost-active-icon-color";
      }

      ._disabled {
        background: "btn-ghost-disabled-background-color";
        color: "btn-ghost-disabled-text-color";
        border-color: "btn-ghost-disabled-border-color";
        iconColor: "btn-ghost-disabled-icon-color";
      }

    }

    outline: {
      background: "btn-outline-default-background-color";
      color: "btn-outline-default-text-color";
      border-color: "btn-outline-default-border-color";
      iconColor: "btn-outline-default-icon-color";
      ._hover {
        background: "btn-outline-hover-background-color";
        color: "btn-outline-hover-text-color";
        border-color: "btn-outline-hover-border-color";
        iconColor: "btn-outline-hover-icon-color";
      }

      _acive: {
        background: "btn-outline-acive-background-color";
        color: "btn-outline-acive-text-color";
        border-color: "btn-outline-active-border-color";
        iconColor: "btn-outline-active-icon-color";
      }

      ._disabled {
        background: "btn-outline-disabled-background-color";
        color: "btn-outline-disabled-text-color";
        border-color: "btn-outline-disabled-border-color";
        iconColor: "btn-outline-disabled-icon-color";
      }

    }

    solid: {
      background: "btn-solid-default-background-color";
      color: "btn-solid-default-text-color";
      border-color: "btn-solid-default-border-color";
      iconColor: "btn-solid-default-icon-color";
      ._hover {
        background: "btn-solid-hover-background-color";
        color: "btn-solid-hover-text-color";
        border-color: "btn-solid-hover-border-color";
        iconColor: "btn-solid-hover-icon-color";
      }

      _acive: {
        background: "btn-solid-acive-background-color";
        color: "btn-solid-acive-text-color";
        border-color: "btn-solid-active-border-color";
        iconColor: "btn-solid-active-icon-color";
      }

      ._disabled {
        background: "btn-solid-disabled-background-color";
        color: "btn-solid-disabled-text-color";
        border-color: "btn-solid-disabled-border-color";
        iconColor: "btn-solid-disabled-icon-color";
      }

    }

    link: {
      color: "btn-link-default-text-color";
      border-style: "none";
      ._hover {
        color: "btn-link-hover-text-color";
      }

      ._active {
        color: "btn-link-active-text-color";
      }

      ._disabled {
        color: "btn-link-disabled-text-color";
      }

    }

    unstyled: {
      color: var(--);
      border-style: var(--);
      ._hover {
        color: var(--);
      }

      ._active {
        color: var(--);
      }

      ._disabled {
        color: var(--);
      }
    }

  };
  
