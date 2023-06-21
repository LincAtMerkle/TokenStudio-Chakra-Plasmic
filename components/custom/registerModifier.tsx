import { Modifier } from "./Modifier";
import {registerComponent } from "@plasmicapp/host";

export function registerModifier() {
  registerComponent(Modifier, {
    name: "Modifier",
    importPath: "./Modifier",
    props: {
    color: {
      type: "choice",
      options: ["blue", "green"],
      defaultValue: "blue",
    },
    type: {
      type: "choice",
      options: ["casual", "business"],
      defaultValue: "casual",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Modifier",
      },
    },
  },
});
}
