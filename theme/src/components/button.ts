import {
  darken,
  mode,
  StyleFunctionProps,
  transparentize,
} from "@chakra-ui/theme-tools";

const baseStyle = {
  // The styles all button have in common
  fontWeight: "btn-font-weight",
  textTransform: "uppercase",
  width: "auto",
  borderRadius: "btn-border-radius",
  fontFamily: "btn-font-family",
  border: "btn-border-width",
  borderStyle: "solid",
};

const sizes = {
  // Four sizes: xs,sm,md and large
  xs: {
    paddingLeft: "btn-xs-padding-left",
    paddingRight: "btn-xs-padding-right",
    h: "btn-xs-height",
    fontSize: "btn-xs-text-size",
  },
  sm: {
    paddingLeft: "btn-sm-padding-left",
    paddingRight: "btn-sm-padding-right",
    height: "btn-sm-height",
    fontSize: "btn-sm-text-size",
  },
  md: {
    paddingLeft: "btn-md-padding-left",
    paddingRight: "btn-md-padding-right",
    height: "btn-md-height",
    fontSize: "btn-md-text-size",
  },
  lg: {
    paddingLeft: "btn-lg-padding-left",
    paddingRight: "btn-lg-padding-right",
    height: "btn-lg-height",
    fontSize: "btn-lg-text-size",
  },
};

const variants = {
  // Two variants: outline and solid
  primary: {
    // bg: 'btn-primary-default-background-color',
    bg: "btn-primary-default-background-color",
    color: "btn-primary-default-text-color",
    borderColor: "btn-primary-default-border-color",
    iconColor: "btn-primary-default-icon-color",
    _hover: {
      bg: "btn-primary-hover-background-color",
      color: "btn-primary-hover-text-color",
      borderColor: "btn-primary-hover-border-color",
      iconColor: "btn-primary-hover-icon-color",
    },
    _active: {
      bg: "btn-primary-active-background-color",
      color: "btn-primary-active-text-color",
      borderColor: "btn-primary-active-border-color",
      iconColor: "btn-primary-active-icon-color",
    },
    _disabled: {
      bg: "btn-primary-disabled-background-color",
      color: "btn-primary-disabled-text-color",
      borderColor: "btn-primary-disabled-border-color",
      iconColor: "btn-primary-disabled-icon-color",
    },
  },
  secondary: {
    bg: "btn-secondary-default-background-color",
    color: "btn-secondary-default-text-color",
    borderColor: "btn-secondary-default-border-color",
    iconColor: "btn-secondary-default-icon-color",
    _hover: {
      bg: "btn-secondary-hover-background-color",
      color: "btn-secondary-hover-text-color",
      borderColor: "btn-secondary-hover-border-color",
      iconColor: "btn-secondary-hover-icon-color",
    },
    _active: {
      bg: "btn-secondary-active-background-color",
      color: "btn-secondary-active-text-color",
      borderColor: "btn-secondary-active-border-color",
      iconColor: "btn-secondary-active-icon-color",
    },
    _disabled: {
      bg: "btn-secondary-disabled-background-color",
      color: "btn-secondary-disabled-text-color",
      borderColor: "btn-secondary-disabled-border-color",
      iconColor: "btn-secondary-disabled-icon-color",
    },
  },
  negative: {
    bg: "btn-negative-default-background-color",
    color: "btn-negative-default-text-color",
    borderColor: "btn-negative-default-border-color",
    iconColor: "btn-negative-default-icon-color",
    _hover: {
      bg: "btn-negative-hover-background-color",
      color: "btn-negative-hover-text-color",
      borderColor: "btn-negative-hover-border-color",
      iconColor: "btn-negative-hover-icon-color",
    },
    _acive: {
      bg: "btn-negative-acive-background-color",
      color: "btn-negative-acive-text-color",
      borderColor: "btn-negative-active-border-color",
      iconColor: "btn-negative-active-icon-color",
    },
    _disabled: {
      bg: "btn-negative-disabled-background-color",
      color: "btn-negative-disabled-text-color",
      borderColor: "btn-negative-disabled-border-color",
      iconColor: "btn-negative-disabled-icon-color",
    },
  },
  ghost: {
    bg: "btn-ghost-default-background-color",
    color: "btn-ghost-default-text-color",
    borderColor: "btn-ghost-default-border-color",
    iconColor: "btn-ghost-default-icon-color",
    _hover: {
      bg: "btn-ghost-hover-background-color",
      color: "btn-ghost-hover-text-color",
      borderColor: "btn-ghost-hover-border-color",
      iconColor: "btn-ghost-hover-icon-color",
    },
    _acive: {
      bg: "btn-ghost-acive-background-color",
      color: "btn-ghost-acive-text-color",
      borderColor: "btn-ghost-active-border-color",
      iconColor: "btn-ghost-active-icon-color",
    },
    _disabled: {
      bg: "btn-ghost-disabled-background-color",
      color: "btn-ghost-disabled-text-color",
      borderColor: "btn-ghost-disabled-border-color",
      iconColor: "btn-ghost-disabled-icon-color",
    },
  },
  outline: {
    bg: "btn-outline-default-background-color",
    color: "btn-outline-default-text-color",
    borderColor: "btn-outline-default-border-color",
    iconColor: "btn-outline-default-icon-color",
    _hover: {
      bg: "btn-outline-hover-background-color",
      color: "btn-outline-hover-text-color",
      borderColor: "btn-outline-hover-border-color",
      iconColor: "btn-outline-hover-icon-color",
    },
    _acive: {
      bg: "btn-outline-acive-background-color",
      color: "btn-outline-acive-text-color",
      borderColor: "btn-outline-active-border-color",
      iconColor: "btn-outline-active-icon-color",
    },
    _disabled: {
      bg: "btn-outline-disabled-background-color",
      color: "btn-outline-disabled-text-color",
      borderColor: "btn-outline-disabled-border-color",
      iconColor: "btn-outline-disabled-icon-color",
    },
  },
  solid: {
    bg: "btn-solid-default-background-color",
    color: "btn-solid-default-text-color",
    borderColor: "btn-solid-default-border-color",
    iconColor: "btn-solid-default-icon-color",
    _hover: {
      bg: "btn-solid-hover-background-color",
      color: "btn-solid-hover-text-color",
      borderColor: "btn-solid-hover-border-color",
      iconColor: "btn-solid-hover-icon-color",
    },
    _acive: {
      bg: "btn-solid-acive-background-color",
      color: "btn-solid-acive-text-color",
      borderColor: "btn-solid-active-border-color",
      iconColor: "btn-solid-active-icon-color",
    },
    _disabled: {
      bg: "btn-solid-disabled-background-color",
      color: "btn-solid-disabled-text-color",
      borderColor: "btn-solid-disabled-border-color",
      iconColor: "btn-solid-disabled-icon-color",
    },
  },
  link: {
    color: "btn-link-default-text-color",
    borderStyle: "none",
    _hover: {
      color: "btn-link-hover-text-color",
    },
    _active: {
      color: "btn-link-active-text-color",
    },
    _disabled: {
      color: "btn-link-disabled-text-color",
    },
  },
  unstyled: {
    color: '',
    borderStyle: '',
    _hover: {
      color: '',
    },
    _active: {
      color: '',
    },
    _disabled: {
      color: '',
    }
  },
};

export default {
  baseStyle,
  variants,
  sizes,
};
