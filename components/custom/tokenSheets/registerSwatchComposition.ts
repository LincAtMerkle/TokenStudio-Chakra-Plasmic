import { SwatchComposition } from "./SwatchComposition";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchComposition() {
  registerComponent(SwatchComposition, {
    name: "SwatchComposition",
    importPath: "./components/custom/tokenSheets/SwatchComposition",
    props: {
      composition: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
