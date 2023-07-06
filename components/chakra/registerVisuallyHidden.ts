import { VisuallyHiddenProps } from "@chakra-ui/react";

import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const visuallyHiddenMeta: CodeComponentMeta<VisuallyHiddenProps> = {
  ...getComponentNameAndImportMeta("VisuallyHidden"),
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
        value: "VisuallyHidden",
      },
    },
  },
};