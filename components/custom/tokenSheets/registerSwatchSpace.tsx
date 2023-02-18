import { SwatchSpace } from "./SwatchSpace";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchSpace() {
  registerComponent(SwatchSpace, {
    name: "SwatchSpace",
    importPath: "./components/custom/tokenSheets/SwatchSpace",
    props: {
      space: {
        type: "string",
        defaultValue: "10",
      },
    },
  });
}
