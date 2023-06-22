import { TextProps } from "@chakra-ui/react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const textMeta: CodeComponentMeta<TextProps> = {
  ...getComponentNameAndImportMeta("Text"),
  props: {
    size: {
      type: "choice",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
      defaultValue: "md",
    },
    variant: {
      type: "choice",
      options: ["light", "regular", "semiBold", "bold"],
      defaultValue: "regular",
    },
    fontStyle: {
      type: "choice",
      options: ["normal", "italic", "oblique"],
      defaultValue: "normal",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Some Text",
        },
      ],
    },
  },
};
