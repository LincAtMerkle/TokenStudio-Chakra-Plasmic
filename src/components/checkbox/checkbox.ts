.checkbox__container {
  control: {
    background: var(--checkbox-unselected-default-background-color);
    border-color: var(--checkbox-unselected-default-border-color);
    _checked: {
      background: var(--checkbox-selected-default-background-color);
      border-color: var(--checkbox-selected-default-border-color);
      _hover: {
        background: var(--checkbox-selected-hover-background-color);
        border-color: var(--checkbox-selected-hover-border-color)
      }
    }

    _indeterminate: {
      background: var(--purple)
    }

    _invalid: {
      border-color: var(--checkbox-unselected-disabled-border-color);
      background: var(--checkbox-unselected-disabled-background-color)
    }

    _focusVisible: {}
  }

  label: {
    color: var(--semantic-fg-default)
  }

  icon: {
    color: var(--checkbox-checkmark-selected-default-icon-color);
    _checked: {
      _hover: {
      color: var(--checkbox-checkmark-selected-hover-icon-color)
    }
  }
  }
})


.checkbox__sm {
    control: {
      height: var(--checkbox-sm-height);
      width: var(--checkbox-sm-height)
    }

    label: {
      font-size: var(--12px)
    }

    icon: {
      font-size: var(--checkbox-sm-checkmark-width)
    }
  }

.checkbox__md {
    control: {
      height: var(--checkbox-md-height);
      width: var(--checkbox-md-height)
    }

    label: {
      font-size: var(--16px)
    }

    icon: {
      font-size: var(--checkbox-md-checkmark-width)
    }
  }

.checkbox__lg {
    control: {
      height: var(--checkbox-lg-heightx);
      width: var(--checkbox-lg-height)
    }

    label: {
      font-size: var(--18px)
    }

    icon: {
      font-size: var(--checkbox-lg-checkmark-width)
    }
  }
}


.checkbox__bold: {
    control: {
      // these 4 are from the tokens json just wanted to make sure tokens work too
      background: var(--color-rose-700);
      border-color: var(--color-rose-900);
      _checked: {
        background: var(--semantic-warning-fg);
        border-color: var(--semantic-warning-emphasised);
        _hover: {}
      }

      _indeterminate: {}

      _invalid: {}

      _focusVisible: {}
    }

    label: {
      color: var(--blue)
    }

    icon: {}
  }

  .checkbox__colorful: {
    control: {}

    label: {}

    icon: {}
  }
}


