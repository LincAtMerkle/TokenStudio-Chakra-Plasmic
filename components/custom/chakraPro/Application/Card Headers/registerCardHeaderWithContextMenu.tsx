import { App }  from "./CardHeaderWithContextMenu";
import {registerComponent } from "@plasmicapp/host";

export function registerCardHeaderWithContextMenu(){
    registerComponent(App, {
        name: "CardHeaderWithContextMenu",
        importPath: "./components/custom/chakraPro/Card Headers/CardHeaderWithContextMenu",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 