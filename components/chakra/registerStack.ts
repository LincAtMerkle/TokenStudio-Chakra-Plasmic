import { StackProps } from "@chakra-ui/react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const stackMeta: CodeComponentMeta<StackProps> = {
  ...getComponentNameAndImportMeta("Stack"),
  props: {
    direction: {
      type: "choice",
      options: ["row", "column"],
      defaultValue: "column",
    },
    align: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    spacing: {
      type: "number",
      defaultValue: 8,
    },
    wrap: {
      type: "choice",
      options: ["wrap", "nowrap"],
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: 'text',
          value: 'Click me!'
        }
      ]
    },
  },
};

export const hStackMeta: CodeComponentMeta<StackProps> = {
  ...getComponentNameAndImportMeta("HStack"),
  props: {
    direction: {
      type: "choice",
      options: ["row", "column"],
      defaultValue: "row",
    },
    align: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    spacing: {
      type: "number",
      defaultValue: 8,
    },
    wrap: {
      type: "choice",
      options: ["wrap", "nowrap"],
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: 'text',
          value: 'Click me!'
        }
      ]
    },
  },
};

export const vStackMeta: CodeComponentMeta<StackProps> = {
  ...getComponentNameAndImportMeta("VStack"),
  props: {
    direction: {
      type: "choice",
      options: ["row", "column"],
      defaultValue: "row",
    },
    align: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    spacing: {
      type: "number",
      defaultValue: 8,
    },
    wrap: {
      type: "choice",
      options: ["wrap", "nowrap"],
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: 'text',
          value: 'Click me!'
        }
      ]
    },
  },
};
