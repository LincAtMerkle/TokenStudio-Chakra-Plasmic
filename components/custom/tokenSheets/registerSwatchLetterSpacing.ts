import { SwatchLetterSpacing } from "./SwatchLetterSpacing";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchLetterSpacing() {
  registerComponent(SwatchLetterSpacing, {
    name: "SwatchLetterSpacing",
    importPath: "./components/custom/tokenSheets/SwatchLetterSpacing",
    props: {
      paragraphSpacing: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
