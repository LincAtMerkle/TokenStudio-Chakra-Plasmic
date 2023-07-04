import { BoxProps, ContainerProps } from "@chakra-ui/react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { getComponentNameAndImportMeta } from "./utils";

export const containerMeta: CodeComponentMeta<ContainerProps> = {
  ...getComponentNameAndImportMeta("Container"),
  props: {
    py: { // can use py
      type: "choice",
      options: [
        "0", "25", "50", "75",
      ],
      defaultValue: "5",
    },
    px: {
      type: "number",
      defaultValue: 0,
    },
    centerContent:{
      type: "boolean",
      defaultValue: false,
    },
    variant:{
      type: "choice",
      options: [
        "colorfulVariant",
        "boldVariant",
      ],
      defaultValue: "colorfulVariant",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: 'text',
          value: 'Container'
        }
      ]
    },
    },
};
