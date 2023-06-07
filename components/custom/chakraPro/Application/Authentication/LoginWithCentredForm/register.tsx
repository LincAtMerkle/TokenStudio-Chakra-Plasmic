import { App } from "./App";
import { registerComponent } from "@plasmicapp/host";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "../../../../../chakra/utils";
export function registerLoginWithCentredForm() {
  registerComponent(App, {
    name: "LoginWithCentredForm",
    importPath:
      "./components/chakra/chakraPro/Application/Authentication/LoginWithCentredForm",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: getPlasmicComponentName("Stack"),
            props: {
              children: {
                type: "component",
                name: getPlasmicComponentName("Stack"),
              },
            },
          },
        ],
      },
    },
  });
}
