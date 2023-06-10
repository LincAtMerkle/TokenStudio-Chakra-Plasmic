import { SwatchOpacity } from "./SwatchOpacity";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchOpacity() {
  registerComponent(SwatchOpacity, {
    name: "SwatchOpacity",
    importPath: "./components/custom/tokenSheets/SwatchOpacity",
    props: {
      opacity: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
