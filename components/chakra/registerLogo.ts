import { HTMLChakraProps } from "@chakra-ui/react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { getComponentNameAndImportMeta } from "./utils";

export const logoMeta: CodeComponentMeta<HTMLChakraProps<'svg'>> = {
  ...getComponentNameAndImportMeta("Logo"),
  props: {

  },
};
