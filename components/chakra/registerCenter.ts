import { CenterProps } from "@chakra-ui/react";

import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const centerMeta: CodeComponentMeta<CenterProps> = {
  ...getComponentNameAndImportMeta("Center"),
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
        value: "Center",
      },
    },
  },
};