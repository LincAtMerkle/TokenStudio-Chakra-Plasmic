import { ButtonProps, ButtonGroupProps } from "@chakra-ui/react";

import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
// import { colorTokens } from "./registerChakraProvider";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const buttonGroupMeta: CodeComponentMeta<ButtonGroupProps> = {
  ...getComponentNameAndImportMeta("ButtonGroup"),
  props: {
    colorScheme: {
      type: "choice",
      options: [
        // ...Object.keys(colorTokens),
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
    },
    size: {
      type: "choice",
      options: ["xs", "sm", "md", "lg"],
      defaultValue: "md",
    },
    isAttached: {
      type: "boolean",
      defaultValue: false,
    },
    isDisabled: {
      type: "boolean",
      defaultValue: false,
    },
    spacing: {
      type: "string",
      defaultValue: "0.5rem",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: getPlasmicComponentName("Button"),
        },
        {
          type: "component",
          name: getPlasmicComponentName("Button"),
        },
      ],
    },
  },
};

export const buttonMeta: CodeComponentMeta<ButtonProps> = {
  ...getComponentNameAndImportMeta("Button"),
  props: {
    size: {
      type: "choice",
      options: ["xs", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["primary1", "primary2","secondary1", "secondary2","negative", "ghost", "outline", "solid", "link", "unstyled"],
      defaultValue: "primary",
    },
    colorScheme: {
      type: "choice",
      options: [
        // ...Object.keys(colorTokens),
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
    },
    iconSpacing: "number",
    isActive: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isLoading: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Button",
      },
    },
  },
};
