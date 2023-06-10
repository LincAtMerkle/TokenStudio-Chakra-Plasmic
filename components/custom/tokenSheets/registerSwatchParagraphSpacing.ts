import { SwatchParagraphSpacing } from "./SwatchParagraphSpacing";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchParagraphSpacing() {
  registerComponent(SwatchParagraphSpacing, {
    name: "SwatchParagraphSpacing",
    importPath: "./components/custom/tokenSheets/SwatchParagraphSpacing",
    props: {
      paragraphSpacing: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
