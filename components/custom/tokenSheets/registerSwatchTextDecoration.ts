import { SwatchTextDecoration } from "./SwatchTextDecoration";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchTextDecoration() {
  registerComponent(SwatchTextDecoration, {
    name: "SwatchTextDecoration",
    importPath: "./components/custom/tokenSheets/SwatchTextDecoration",
    props: {
      textDecoration: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
