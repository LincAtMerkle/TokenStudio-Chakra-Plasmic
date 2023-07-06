import { GridProps } from "@chakra-ui/react";

import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const gridMeta: CodeComponentMeta<GridProps> = {
  ...getComponentNameAndImportMeta("Grid"),
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
        value: "Grid",
      },
    },
  },
};