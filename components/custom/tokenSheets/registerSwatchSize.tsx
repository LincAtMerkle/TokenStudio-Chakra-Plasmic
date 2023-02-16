import { SwatchSize } from "./SwatchSize";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchSize() {
  registerComponent(SwatchSize, {
    name: "SwatchSize",
    importPath: "./components/custom/tokenSheets/SwatchSize",
    props: {
      size: {
        type: "string",
        defaultValue: "80px",
      },
    },
  });
}
