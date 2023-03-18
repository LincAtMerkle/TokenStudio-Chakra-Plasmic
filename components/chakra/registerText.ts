import { TextProps } from "@chakra-ui/react";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const textMeta: ComponentMeta<TextProps> = {
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
