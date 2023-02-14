import { SizeComponent } from "./SizeComponent";
import { registerComponent } from "@plasmicapp/host";

export function registerSizeComponent() {
  registerComponent(SizeComponent, {
    name: "SizeComponent",
    importPath: "./components/custom/tokenSheets/SizeComponent",
    props: {
      size: {
        type: "string",
        defaultValue: "80px",
      },
    },
  });
}
