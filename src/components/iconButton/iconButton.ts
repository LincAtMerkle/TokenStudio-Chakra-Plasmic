
  .iconButton__container {
    width: var(--auto);
    border-radius: var(--icon-button-border-radius);
    border: var(--btn-border-width);
    border-style: var(--solid);
    _isRound: {
        border-radius: var(--icon-button-round-border-radius)
    }
  }
  // Four sizes: xs,sm,md and large
  const sizes  = {
  .iconButton__xs {
      height: var(--icon-button-xs-height);
      width: var(--icon-button-xs-width);
      font-size: var(--icon-button-xs-icon-size)
    }

  .iconButton__sm {
        height: var(--icon-button-sm-height);
        min-width: var(--icon-button-sm-width);
        font-size: var(--icon-button-sm-icon-size)
    }

  .iconButton__md {
        height: var(--icon-button-md-height);
        min-width: var(--icon-button-md-width);
        font-size: var(--icon-button-md-icon-size)
    }

  .iconButton__lg {
        height: var(--icon-button-lg-height);
        min-width: var(--icon-button-lg-width);
        font-size: var(--icon-button-lg-icon-size)
    }

    .iconButton__primary: {
      background: var(--icon-button-default-background-color);
      color: var(--icon-button-default-icon-color);
      border-color: var(--icon-button-default-border-color);
      iconColor:"icon-button-default-icon-color",
      _hover: {
        background: var(--btn-primary-hover-background-color);
        color: var(--btn-primary-hover-text-color);
        border-color: var(--btn-primary-hover-border-color);
        iconColor:'btn-primary-hover-icon-color)
      }

      _isActive: {
        background: var(--btn-primary-active-background-color);
        color: var(--btn-primary-active-text-color);
        border-color: var(--btn-primary-active-border-color);
        iconColor:'btn-primary-active-icon-color)
      }

      _disabled: {
        background: var(--btn-primary-disabled-background-color);
        color: var(--btn-primary-disabled-text-color);
        border-color: var(--btn-primary-disabled-border-color);
        iconColor:'btn-primary-disabled-icon-color)
      }
    }

    .iconButton__secondary: {
      background: var(--btn-secondary-default-background-color);
      color: var(--btn-secondary-default-text-color);
      border-color: var(--btn-secondary-default-border-color);
      iconColor:'btn-secondary-default-icon-color);
      _hover: {
        background: var(--btn-secondary-hover-background-color);
        color: var(--btn-secondary-hover-text-color);
        border-color: var(--btn-secondary-hover-border-color);
        iconColor:'btn-secondary-hover-icon-color)
      }

      _isActive: {
        background: var(--btn-secondary-active-background-color);
        color: var(--btn-secondary-active-text-color);
        border-color: var(--btn-secondary-active-border-color);
        iconColor:'btn-secondary-active-icon-color)
      }

      _disabled: {
        background: var(--btn-secondary-disabled-background-color);
        color: var(--btn-secondary-disabled-text-color);
        border-color: var(--btn-secondary-disabled-border-color);
        iconColor:'btn-secondary-disabled-icon-color)
      }
    }

    .iconButton__negative: {
      background: var(--btn-negative-default-background-color);
      color: var(--btn-negative-default-text-color);
      border-color: var(--btn-negative-default-border-color);
      iconColor:'btn-negative-default-icon-color);
      _hover: {
        background: var(--btn-negative-hover-background-color);
        color: var(--btn-negative-hover-text-color);
        border-color: var(--btn-negative-hover-border-color);
        iconColor:'btn-negative-hover-icon-color)

        
      }

      _isActive: {
        background: var(--btn-negative-active-background-color);
        color: var(--btn-negative-active-text-color);
        border-color: var(--btn-negative-active-border-color);
        iconColor:'btn-negative-active-icon-color)

      }

      _disabled: {
        background: var(--btn-negative-disabled-background-color);
        color: var(--btn-negative-disabled-text-color);
        border-color: var(--btn-negative-disabled-border-color);
        iconColor:'btn-negative-disabled-icon-color)

      }
    }

  
