import { BoxProps } from "@chakra-ui/react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { getComponentNameAndImportMeta } from "./utils";

export const containerMeta: CodeComponentMeta<BoxProps> = {
  ...getComponentNameAndImportMeta("Container"),
  props: {
    py: {
      type: "number",
      defaultValue: 12,
    },
    px: {
      type: "number",
      defaultValue: 0,
    },
    children: {
      type: "slot",
    }
    },
};
