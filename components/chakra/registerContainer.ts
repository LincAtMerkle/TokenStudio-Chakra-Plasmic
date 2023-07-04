import { BoxProps, ContainerProps } from "@chakra-ui/react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { getComponentNameAndImportMeta } from "./utils";

export const containerMeta: CodeComponentMeta<ContainerProps> = {
  ...getComponentNameAndImportMeta("Container"),
  props: {
    // py: {
    //   type: "number",
    //   defaultValue: 12,
    // },
    // px: {
    //   type: "number",
    //   defaultValue: 0,
    // },
    centerContent:{
      type: "boolean",
      defaultValue: false,
    },
    size:{
      type: "choice",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    variant:{
      type: "choice",
      options: [
        "colorful",
        "bold",
      ],
      defaultValue: "colorful",
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
