import { SwatchTypography } from "./SwatchTypography";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchTypography() {
  registerComponent(SwatchTypography, {
    name: "SwatchTypography",
    importPath: "./components/custom/tokenSheets/SwatchTypography",
    props: {
      radius: {
        type: "string",
        defaultValue: "16px",
      },
    },
  });
}
