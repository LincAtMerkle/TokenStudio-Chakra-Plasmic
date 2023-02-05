import { ToggleColorMode } from "./ToggleColorMode";
import {registerComponent } from "@plasmicapp/host";

export function registerToggleColorMode() {
  registerComponent(ToggleColorMode, {
    name: "ToggleColorMode",
    importPath: "./ToggleColorMode",
    props: {

    },
  });
}