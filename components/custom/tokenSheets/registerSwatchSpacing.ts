import { SwatchSpacing } from "./SwatchSpacing";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchSpacing() {
  registerComponent(SwatchSpacing, {
    name: "SwatchSpacing",
    importPath: "./components/custom/tokenSheets/SwatchSpacing",
    props: {
      space: {
        type: "string",
        defaultValue: "10",
      },
    },
  });
}
