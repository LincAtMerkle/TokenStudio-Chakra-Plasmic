import { ChakraDocs } from "./ChakraDocs";
import {registerComponent } from "@plasmicapp/host";
import {tokenSetOrder} from "../../../theme/tokenStudioChakra/$metadata.json"

export function registerChakraDocs() {
  registerComponent(ChakraDocs, {
    name: "ChakraDocs",
    importPath: "@chakra-ui/react",
    props: {
      theme: {
        type: "choice",
        options: ["light", "dark"],
        description: "Theme",
        defaultValue: "light"  
      },
      path: {
        //@ts-ignore
        type: "string",
        title: "Tokens path",
        description: "Tokens path",
        defaultValue: "btn.primary",
      },
      set: {
        type: "choice",
        options: tokenSetOrder,
        description: "Token set",
        defaultValue: "core/color",
      },
    },
  });
}
