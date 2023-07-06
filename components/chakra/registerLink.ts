import { LinkProps, LinkOverlayProps } from "@chakra-ui/react";

import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const linkMeta: CodeComponentMeta<LinkProps> = {
  ...getComponentNameAndImportMeta("Link"),
  props: {
    size: {
      type: "choice",
      options: ["", "", ""],
      defaultValue: "",
    },
    variant: {
      type: "choice",
      options: ["", "", ""],
      defaultValue: "",
    },

    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Link",
      },
    },
  },
};

export const linkOverlayMeta: CodeComponentMeta<LinkOverlayProps> = {
  ...getComponentNameAndImportMeta("LinkOverlay"),
  props: {
    size: {
      type: "choice",
      options: ["", "", ""],
      defaultValue: "",
    },
    variant: {
      type: "choice",
      options: ["", "", ""],
      defaultValue: "",
    },

    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "LinkOverlay",
      },
    },
  },
};