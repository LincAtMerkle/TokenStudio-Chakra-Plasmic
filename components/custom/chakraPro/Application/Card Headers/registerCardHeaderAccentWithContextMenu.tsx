import { App }  from "./CardHeaderAccentWithContextMenu";
import {registerComponent } from "@plasmicapp/host";

export function registerCardHeaderAccentWithContextMenu(){
    registerComponent(App, {
        name: "CardHeaderAccentWithContextMenu",
        importPath: "./components/custom/chakraPro/Card Headers/CardHeaderAccentWithContextMenu",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 