import { SwatchSpace } from "./SwatchSpace";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchSpace() {
  registerComponent(SwatchSpace, {
    name: "SwatchSpace",
    importPath: "./components/custom/tokenSheets/SwatchSpace",
    props: {
      Space: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
