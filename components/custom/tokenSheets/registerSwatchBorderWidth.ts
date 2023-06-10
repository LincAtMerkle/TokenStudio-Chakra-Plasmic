import { SwatchBorderWidth } from "./SwatchBorderWidth";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchBorderWidth() {
  registerComponent(SwatchBorderWidth, {
    name: "SwatchBorderWidth",
    importPath: "./components/custom/tokenSheets/SwatchBorderWidth",
    props: {
      borderWidth: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
