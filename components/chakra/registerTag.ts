import {
  TagProps,
  TagLabelProps,
  IconProps,
  TagCloseButtonProps,
} from "@chakra-ui/react";
import { registerComponent } from '@plasmicapp/react-web/lib/host';
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const tagMeta: CodeComponentMeta<TagProps> = {
  ...getComponentNameAndImportMeta("Tag"),
  props: {
    spacing: {
      type: "string",
      defaultValue: "24px",
    },
    size: {
      type: "choice",
      options: ["sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["primary", "subtle", "solid", "outline", "unstyled"],
    },
    colorScheme: {
      type: "choice",
      options: [
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
    borderRadius: {
      type: "string",
    },
    children: {
      type: "slot",
      allowedComponents: [
        "TagLeftIcon",
        "TagLabel",
        "TagRightIcon",
        "TagCloseButton",
      ],
      defaultValue: [
        // { type: "component", name: "TagLeftIcon" },
        // {
        //   type: "component",
        //   name: "TagLabel",
        //   props: { children: { type: "text", value: "Tag" } },
        // },
        // { type: "component", name: "TagRightIcon" },
        // { type: "component", name: "TagCloseButton" },
      ],
    },
  },
};

export const tagLeftIconMeta: CodeComponentMeta<IconProps> = {
  ...getComponentNameAndImportMeta("TagLeftIcon"),
  props: {
    children: {
      type: "slot",
      defaultValue: [
        // {
        //   type: "component",
        //   name: "GolfIcon",
        // },
      ],
    },
  },
};

export const tagLabelMeta: CodeComponentMeta<TagLabelProps> = {
  ...getComponentNameAndImportMeta("TagLabel"),

  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "TagLabel",
        },
      ],
    },
  },
};

export const tagRightIconMeta: CodeComponentMeta<IconProps> = {
  ...getComponentNameAndImportMeta("TagRightIcon"),
  props: {
    children: {
      type: "slot",
      defaultValue: [
        // {
        //   type: "component",
        //   name: "GolfIcon",
        // },
      ],
    },
  },
};

export const tagCloseButtonMeta: CodeComponentMeta<TagCloseButtonProps> = {
  ...getComponentNameAndImportMeta("TagCloseButton"),
  props: {},
};
